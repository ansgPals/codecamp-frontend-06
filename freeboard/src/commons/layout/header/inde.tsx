import styled from "@emotion/styled";
import { useRouter } from "next/router";

const Wrapper = styled.div`
  height: 70px;
  width: 1920px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  background-color: #f1a3b6;
`;
const Goangsss = styled.button`
  font-size: 50px;
  color: #fddee8;
  height: 60px;
  width: 300px;
  font-weight: bold;
  text-align: center;
  line-height: 60px;
  border: none;
  background-color: #f1a3b6;
  margin-left: 50px;
  cursor: pointer;
`;
const Log = styled.div`
  font-size: 50px;
  color: #fddee8;
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
  color: blueviolet;
  background-color: #f8f5d6;
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
  color: blueviolet;
  background-color: #f8f5d6;
  cursor: pointer;
`;

export default function LayOutHeader() {
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
  return (
    <Wrapper>
      <Goangsss onClick={onClickTitle}>GOANGSSS</Goangsss>
      <Log>
        <LoginButton onClick={onClickLogin}>로그인</LoginButton>
        <SignUpButton onClick={onClickSignUp}>회원가입</SignUpButton>
      </Log>
    </Wrapper>
  );
}
