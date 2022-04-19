import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../commons/store";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../../../commons/types/generated/types";
import LogInPresenter from "./Login.presenter";

export const LOGIN_USER = gql`
  mutation loginUser($password: String!, $email: String!) {
    loginUser(password: $password, email: $email) {
      accessToken
    }
  }
`;

const schema = yup.object({
  email: yup
    .string()
    .email("이메일 형식이 적합하지 않습니다.")
    .required("이메일은 필수 입력 사항입니다."),
  password: yup
    .string()
    .required("비밀번호는 필수입력사합니다.")
    .min(4, "비밀번호는 최소 4자리 이상 입력해주세요")
    .max(15, "비밀번호는 최대 15자리로 입력해주세요"),
});

interface IFormValues {
  email?: string;
  password?: string;
}
export default function LogInContainer() {
  const [, setAccessToken] = useRecoilState(accessTokenState);

  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);

  const onClickSubmit = async (data: IFormValues) => {
    console.log(data);
    if (formState.isValid) {
      try {
        const result = await loginUser({
          variables: {
            email: data.email,
            password: data.password,
          },
        });
        const accessToken = result.data?.loginUser.accessToken;
        setAccessToken(accessToken || "");
        localStorage.setItem("accessToken", accessToken || "");
        console.log(accessToken);
        alert("어서오세요!!");
        // router.push(`/boards`);
      } catch (error: any) {
        console.log(error);
        alert(error.message);
      }
    }
  };

  const onClickSignUp = () => {
    router.push(`/login/SignUp`);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <LogInPresenter
      inputRef={inputRef}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onClickSubmit={onClickSubmit}
      onClickSignUp={onClickSignUp}
    />
  );
}
