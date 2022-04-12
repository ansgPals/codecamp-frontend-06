import { ChangeEvent } from "react";
import * as S from "../SignUp/SignUp.styles";

interface ISignUpPropsUI {
  inputRef: any;
  onChangeInputs: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickSignUp: () => void;
  inputsErr: {
    email: string;
    password: string;
    name: string;
    password2: string;
  };
  isActive: boolean;
  onChangePasswordOk: (event: ChangeEvent<HTMLInputElement>) => void;
}
export interface IButtonProps {
  isActive: boolean;
}

export default function SignUpPresenter(props: ISignUpPropsUI) {
  return (
    <>
      <S.BackGround>
        <S.Back>
          <S.Goangsss> GOANGSSS </S.Goangsss>
          <S.Title>회원가입</S.Title>
          <S.JustBox>
            <S.SubTitle>이메일</S.SubTitle>
            <S.InputBox
              placeholder="이메일을 입력해주세요."
              type="text"
              ref={props.inputRef}
              onChange={props.onChangeInputs}
              id="email"
            ></S.InputBox>
            <S.InputErr>{props.inputsErr.email}</S.InputErr>
          </S.JustBox>
          <S.JustBox>
            <S.SubTitle>이름</S.SubTitle>
            <S.InputBox
              placeholder="이름을 입력해주세요."
              type="text"
              onChange={props.onChangeInputs}
              id="name"
            ></S.InputBox>
            <S.InputErr>{props.inputsErr.name}</S.InputErr>
          </S.JustBox>
          <S.JustBox>
            <S.SubTitle>비밀번호</S.SubTitle>
            <S.InputBox
              placeholder="비밀번호를 입력해주세요."
              type="password"
              onChange={props.onChangeInputs}
              id="password"
            ></S.InputBox>
            <S.InputErr>{props.inputsErr.password}</S.InputErr>
          </S.JustBox>
          <S.JustBox>
            <S.SubTitle>비밀번호확인</S.SubTitle>
            <S.InputBox
              placeholder="비밀번호확인을 입력해주세요."
              type="password"
              onChange={props.onChangeInputs}
              id="password2"
            ></S.InputBox>
            <S.InputErr>{props.inputsErr.password2}</S.InputErr>
          </S.JustBox>
          <S.SignUpButton
            onClick={props.onClickSignUp}
            isActive={props.isActive}
          >
            회원가입하기
          </S.SignUpButton>
        </S.Back>
      </S.BackGround>
    </>
  );
}
