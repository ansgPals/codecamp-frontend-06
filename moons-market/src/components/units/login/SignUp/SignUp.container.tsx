import { gql, useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import {  useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import {
  IMutation,
  IMutationCreateUserArgs,
} from "../../../../commons/types/generated/types";
import SignUpPresenter from "./SignUp.presenter";

export const CREATE_USER = gql`
  mutation createUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      _id
    }
  }
`;
const schema= yup.object({
email : yup.string().email("이메일형식이 맞지 않습니다.").required("이메엘을 입력해주세요"),
name : yup.string().required("성함을 입력해주세요"),
password : yup.string().required("비밀번호를입력해주세요").min(6,"비밀번호는 최소6자리입니다."),
passwordOk: yup.string().oneOf([yup.ref('password'), null],'비밀번호를 확인해주세요!')
})
interface IFormValues {
  email?: string;
  password?: string;
  passwordOk?:string
  name?:string
}

export default function SignUpContainer() {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const {register,formState,handleSubmit}= useForm({
    resolver: yupResolver(schema),
    mode : "onChange"
  })

  const [createUser] = useMutation<
    Pick<IMutation, "createUser">,
    IMutationCreateUserArgs
  >(CREATE_USER);


  const onClickSignUp = async (data:IFormValues) => {

      try {
        const result = await createUser({
          variables: {
            createUserInput: {
             email:data.email,
             name:data.name,
             password:data.password
            },
          },
        });
        alert("회원가입을 환영합니다!! 한번더 로그인해주세요!");
        console.log(result)
        router.push(`/login`);
      } catch (error: any) {
        console.log(error);
      }
    
  };
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <SignUpPresenter
      inputRef={inputRef}
      onClickSignUp={onClickSignUp}
      register={register}
      formState={formState}
      handleSubmit={handleSubmit}
    />
  );
}
