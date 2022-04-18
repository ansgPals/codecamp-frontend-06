import { gql, useMutation } from "@apollo/client";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../commons/store";
import { IMutation } from "../../../../commons/types/generated/types";
const Wrapper = styled.div`
  height: 70px;
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  background-color: #21ca4b;
`;
const Goangsss = styled.button`
  font-size: 50px;
  color: #d6ffe2;
  height: 60px;
  width: 300px;
  font-weight: bold;
  text-align: center;
  line-height: 60px;
  border: none;
  background-color: #23b841;
  margin-left: 50px;
  cursor: pointer;
  font-style: italic;
`;
const Log = styled.div`
  font-size: 50px;
  color: #d6ffe2;
  height: 60px;
  width: 300px;
  font-weight: bold;
  text-align: center;
  line-height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const LoginButton = styled.button`
  width: 100px;
  height: 40px;
  font-size: 20px;
  line-height: 30px;
  margin-right: 15px;
  border-radius: 25px;
  border: 0px;
  font-weight: bolder;
  color: #23b841;
  background-color: #ffffff;
  cursor: pointer;
`;
const SignUpButton = styled.button`
  width: 100px;
  height: 40px;
  font-size: 20px;
  line-height: 30px;
  border-radius: 25px;
  border: 0px;
  font-weight: bolder;
  color: #23b841;
  background-color: #ffffff;
  cursor: pointer;
`;
const LOGOUT_USER = gql`
  mutation logoutUser {
    logoutUser
  }
`;

export default function LayOutHeader() {
  const [accessToken] = useRecoilState(accessTokenState);
  const [logoutUser] = useMutation<Pick<IMutation, "logoutUser">>(LOGOUT_USER);
  const router = useRouter();

  const onClickLogin = () => {
    router.push(`/login`);
  };
  const onClickSignUp = () => {
    router.push(`/login/SignUp`);
  };
  const onClickTitle = () => {
    router.push(`/boards`);
  };
  const onClickLogout = async () => {
    await logoutUser();
  };
  return (
    <Wrapper>
      <Goangsss onClick={onClickTitle}>MOONSMARKET</Goangsss>
      {!accessToken ? (
        <Log>
          <LoginButton onClick={onClickLogin}>로그인</LoginButton>
          <SignUpButton onClick={onClickSignUp}>회원가입</SignUpButton>
        </Log>
      ) : (
        <Log>
          <LoginButton>마이페이지</LoginButton>
          <LoginButton onClick={onClickLogout}>로그아웃</LoginButton>
        </Log>
      )}
    </Wrapper>
  );
}
