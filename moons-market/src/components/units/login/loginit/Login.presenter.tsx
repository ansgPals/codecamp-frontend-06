import { ChangeEvent, MouseEvent } from "react";
import {
  FieldValues,
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import * as S from "./Login.styles";
interface IFormValues {
  email?: string;
  password?: string;
}
interface ILogInPropsUI {
  inputRef: any;

  onClickSignUp: () => void;
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  formState: FormState<FieldValues>;
  onClickSubmit: (data: IFormValues) => void;
}
export interface IButtonProps {
  isActive: boolean;
}

export default function LogInPresenter(props: ILogInPropsUI) {
  return (
    <>
      <S.BackGround>
        <S.Back>
          <S.Goangsss> MOONSMARKET</S.Goangsss>
          <S.Title>로그인</S.Title>
          <form onSubmit={props.handleSubmit(props.onClickSubmit)}>
            <S.JustBox>
              <S.SubTitle>이메일</S.SubTitle>
              <S.InputBox
                placeholder="이메일을 입력해주세요."
                type="text"
                ref={props.inputRef}
                {...props.register("email")}
              ></S.InputBox>
              <S.InputErr>{props.formState.errors.email?.message}</S.InputErr>
            </S.JustBox>
            <S.JustBox>
              <S.SubTitle>비밀번호</S.SubTitle>
              <S.InputBox
                placeholder="비밀번호를 입력해주세요."
                type="password"
                {...props.register("password")}
              ></S.InputBox>
              <S.InputErr>
                {props.formState.errors.password?.message}
              </S.InputErr>
            </S.JustBox>
            <S.SignUpButton isActive={props.formState.isValid}>
              로그인
            </S.SignUpButton>
          </form>
          <S.FooterBox>
            <S.FooterButton>이메일찾기</S.FooterButton>
            <S.FooterButton2>비밀번호찾기</S.FooterButton2>
            <S.FooterButton onClick={props.onClickSignUp}>
              회원가입
            </S.FooterButton>
          </S.FooterBox>
        </S.Back>
      </S.BackGround>
    </>
  );
}
