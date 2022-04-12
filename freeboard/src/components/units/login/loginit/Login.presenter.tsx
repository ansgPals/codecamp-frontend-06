import { ChangeEvent } from "react";
import * as S from "./Login.styles";

interface ILogInPropsUI {
  inputRef: any;
  onChangeMailInput: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassInput: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickLogin: () => void;
  passErr: string;

  emailErr: string;

  isActive: boolean;
  onClickSignUp: () => void;
}
export interface IButtonProps {
  isActive: boolean;
}

export default function LogInPresenter(props: ILogInPropsUI) {
  return (
    <>
      <S.BackGround>
        <S.Back>
          <S.Goangsss> GOANGSSS </S.Goangsss>
          <S.Title>로그인</S.Title>
          <S.JustBox>
            <S.SubTitle>이메일</S.SubTitle>
            <S.InputBox
              placeholder="이메일을 입력해주세요."
              type="text"
              ref={props.inputRef}
              onChange={props.onChangeMailInput}
              id="email"
            ></S.InputBox>
            <S.InputErr>{props.emailErr}</S.InputErr>
          </S.JustBox>
          <S.JustBox>
            <S.SubTitle>비밀번호</S.SubTitle>
            <S.InputBox
              placeholder="비밀번호를 입력해주세요."
              type="password"
              onChange={props.onChangePassInput}
              id="password"
            ></S.InputBox>
            <S.InputErr>{props.passErr}</S.InputErr>
          </S.JustBox>
          <S.SignUpButton
            onClick={props.onClickLogin}
            isActive={props.isActive}
          >
            로그인
          </S.SignUpButton>
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
