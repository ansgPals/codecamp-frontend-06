import * as S from "../SignUp/SignUp.styles";
import { ISignUpPropsUI } from "./SignUp.types";




export default function SignUpPresenter(props: ISignUpPropsUI) {
  return (
    <>
      <S.BackGround>
        <S.Back>
          <S.Goangsss> MOONSMARKET </S.Goangsss>
          <S.Title>회원가입</S.Title>
          <form onSubmit={props.handleSubmit(props.onClickSignUp)}>
          <S.JustBox>
            <S.SubTitle>이메일</S.SubTitle>
            <S.InputBox
              placeholder="이메일을 입력해주세요."
              type="text"
              ref={props.inputRef}
              {...props.register('email')}
            ></S.InputBox>
            <S.InputErr>{props.formState.errors.email?.message}</S.InputErr>
          </S.JustBox>
          <S.JustBox>
            <S.SubTitle>이름</S.SubTitle>
            <S.InputBox
              placeholder="이름을 입력해주세요."
              type="text"
              {...props.register('name')}
            ></S.InputBox>
            <S.InputErr>{props.formState.errors.name?.message}</S.InputErr>
          </S.JustBox>
          <S.JustBox>
            <S.SubTitle>비밀번호</S.SubTitle>
            <S.InputBox
              placeholder="비밀번호를 입력해주세요."
              type="password"
              {...props.register('password')}
            ></S.InputBox>
            <S.InputErr>{props.formState.errors.password?.message}</S.InputErr>
          </S.JustBox>
          <S.JustBox>
            <S.SubTitle>비밀번호확인</S.SubTitle>
            <S.InputBox
              placeholder="비밀번호확인을 입력해주세요."
              type="password"
              {...props.register('passwordOk')}
            ></S.InputBox>
            <S.InputErr>{props.formState.errors.passwordOk?.message}</S.InputErr>
          </S.JustBox>
          <S.SignUpButton
            isActive={props.formState.isValid}
          >
            회원가입하기
          </S.SignUpButton>
          </form>
        </S.Back>
      </S.BackGround>
    </>
  );
}
