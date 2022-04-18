import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styled from "@emotion/styled";

const Error = styled.div`
  color: red;
  font-size: 9px;
`;
const LoginButton = styled.button`
  background-color: ${(props) => props.isActive && "yellow"};
`;

interface IFormValues {
  email?: string;
  password?: string;
}

const schema = yup.object({
  email: yup
    .string()
    .email("이메일 형식이 적한하지 않습니다.")
    .required("이메일은 필수 입력 사항입니다."),
  password: yup
    .string()
    .min(4, "비밀번호는 최소 4자리 이상 입력해주세요")
    .max(15, "비밀번호는 최대 15자리로 입력해주세요")
    .required("비밀번호는 필수입력사합니다."),
  // min 은 최소입력글자
});

export default function ReactHookFormPage() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
    // 검증할때 사용할것을 등록
    // 모드는 온체인지일때마다 디폴트는 온클릭인것같음
  });

  const onClickSubmit = (data: IFormValues) => {
    console.log(data);
  };
  console.log("리랜더링체크");
  return (
    <>
      <form onSubmit={handleSubmit(onClickSubmit)}>
        이메일: <input type="text" {...register("email")} />
        <Error>{formState.errors.email?.message}</Error>
        <br />
        비밀번호: <input type="password" {...register("password")} />
        <Error>{formState.errors.password?.message}</Error>
        <br />
        <LoginButton isActive={formState.isValid}>로그인</LoginButton>
      </form>
    </>
  );
}
