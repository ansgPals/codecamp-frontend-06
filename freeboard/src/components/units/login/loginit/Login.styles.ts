import styled from "@emotion/styled";
import { IButtonProps } from "./Login.presenter";

export const Back = styled.div`
  padding: 100px;
  width: 1500px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BackGround = styled.div`
  box-shadow: 0px 10px 50px #fddee8;
  width: 1200px;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;
  background-color: white;
`;
export const Goangsss = styled.div`
  font-size: 70px;
  color: #fddee8;
  height: 80px;
  width: 1920px;
  font-weight: bold;
  text-align: center;
  line-height: 200px;
`;
export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 28px;
  height: 60px;
  font-weight: bolder;
`;
export const JustBox = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;
`;
export const SubTitle = styled.div`
  padding: 0px 10px;
  width: 384px;
  height: 25px;
  align-items: center;
  font-size: 16px;
`;
export const InputBox = styled.input`
  width: 384px;
  height: 64px;
  align-items: center;
  border-radius: 16px;
  font-size: 16px;
  padding: 0px 10px;
  border: #fddee8 12px solid;
`;
export const InputErr = styled.div`
  padding: 0px 10px;
  width: 384px;
  height: 20px;
  min-height: 20px;
  align-items: center;
  font-size: 14px;
  color: red;
`;
export const SignUpButton = styled.button`
  width: 384px;
  height: 64px;
  align-items: center;
  border-radius: 16px;
  font-size: 20px;
  padding: 0px 10px;
  border: 1px solid pink;
  background-color: ${(props: IButtonProps) =>
    props.isActive ? "pink" : "#b3a4af"};
  font-weight: bold;
  cursor: pointer;
  :hover {
    background-color: ${(props: IButtonProps) =>
      props.isActive ? "#ffffde" : "#b3a4af"};
  }
`;
export const FooterBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 384px;
  height: 64px;
`;

export const FooterButton = styled.button`
  cursor: pointer;
  width: 120px;
  background-color: white;
  border: none;
  font-size: 16px;
  :hover {
    color: pink;
  }
`;

export const FooterButton2 = styled.button`
  cursor: pointer;
  width: 120px;
  background-color: white;
  border-top: none;
  border-bottom: none;
  font-size: 16px;
  :hover {
    color: pink;
  }
`;
