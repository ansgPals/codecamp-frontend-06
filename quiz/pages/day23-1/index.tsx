import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styled from "@emotion/styled";

const Error = styled.div`
  color: red;
  font-size: 9px;
`;
interface IButtonProps {
  isActive: boolean;
}
const LoginButton = styled.button`
  background-color: ${(props: IButtonProps) => props.isActive && "yellow"};
`;

interface IFormValues {
  name?: string;
  password?: string;
  title?: string;
  contents?: string;
}

const schema = yup.object({
  name: yup
    .string()
    .max(5, "이름을 5글자이내로작정해주세요")
    .required("이름은 필수 입력 사항입니다."),
  password: yup
    .string()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{1,8}$/,
      "비밀번호는 영문, 숫자, 특수문자를 포함한 8자리 이내 문자열입니다."
    )
    .max(8, "비밀번호는 최대 8자리로 입력해주세요")

    .required("비밀번호는 필수입력사합니다."),
  title: yup
    .string()
    .max(100, "100자이내로 작성해주세요")
    .required("제목은 필수 입력 사항입니다."),
  contents: yup
    .string()
    .max(1000, "1000자이내로 작성해주세요")
    .required("내용은 필수 입력 사항입니다."),
});

export default function ReactHookFormPage() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickSubmit = (data: IFormValues) => {
    console.log(data);
  };
  console.log("리랜더링체크");
  return (
    <>
      <form onSubmit={handleSubmit(onClickSubmit)}>
        작성자: <input type="text" {...register("name")} />
        <Error>{formState.errors.name?.message}</Error>
        <br />
        비밀번호: <input type="password" {...register("password")} />
        <Error>{formState.errors.password?.message}</Error>
        <br />
        제목: <input type="text" {...register("title")} />
        <Error>{formState.errors.title?.message}</Error>
        <br />
        내용: <input type="text" {...register("contents")} />
        <Error>{formState.errors.contents?.message}</Error>
        <LoginButton isActive={formState.isValid}>게시물등록하기</LoginButton>
      </form>
    </>
  );
}
