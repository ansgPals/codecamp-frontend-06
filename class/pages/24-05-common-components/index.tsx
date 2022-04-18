import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styled from "@emotion/styled";

import Input01 from "../../src/components/commons/inputs/01";
import Button01 from "../../src/components/commons/buttons/01";

const Error = styled.div`
  color: red;
  font-size: 9px;
`;

interface IFormValues {
  email?: string;
  password?: string;
}
// 아래 schema 는 컴포넌트 분리시 .validation.ts라는 파일로보관하기
const schema = yup.object({
  email: yup
    .string()
    .email("이메일 형식이 적한하지 않습니다.")
    .required("이메일은 필수 입력 사항입니다."),
  password: yup
    .string()
    .required("비밀번호는 필수입력사합니다.")
    .min(4, "비밀번호는 최소 4자리 이상 입력해주세요")
    .max(15, "비밀번호는 최대 15자리로 입력해주세요"),

  // min 은 최소입력글자
  // 순서는 위에서 부터 아래로읨
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
        {/* 이메일: <input type="text" {...register("email")} /> */}
        이메일: <Input01 type="text" register={register("email")} />
        <Error>{formState.errors.email?.message}</Error>
        {/* 비밀번호: <input type="password" {...register("password")} /> */}
        비밀번호: <Input01 type="password" register={register("password")} />
        <Error>{formState.errors.password?.message}</Error>
        {/* <LoginButton isActive={formState.isValid}>로그인</LoginButton> */}
        <Button01 isActive={formState.isValid} title="로그인하기" />
      </form>
    </>
  );
}
