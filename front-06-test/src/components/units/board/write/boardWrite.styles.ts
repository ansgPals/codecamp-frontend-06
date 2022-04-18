import styled from "@emotion/styled";
import { IButtonColorProps } from "./boardWrite.types";

export const BackGround = styled.div`
  width: 764px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  padding: 20px;
`;
export const MyTitle = styled.div`
  width: 684px;
  height: 60px;
  font-size: 18px;
  padding-left: 30px;
  line-height: 60px;
  border-bottom: #6400ff 1px solid;
  margin-bottom: 20px;
`;
export const Culumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MyBody = styled.div`
  width: 684px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const BackTop = styled.div`
  width: 684px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const MyErr = styled.div`
  color: red;
  font-size: 10px;
  min-height: 20px;
`;
export const MyName = styled.div`
  font-size: 14px;
  color: black;
  width: 80px;
  height: 50px;

  text-align: center;
  line-height: 50px;
`;
export const UserInfo = styled.div`
  width: 684px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`;
export const PutPass = styled.input`
  font-size: 16px;
  color: #c4c4c4;
  border: 1px solid #e5e5e5;
  border-radius: 5px;
  width: 242px;
  height: 40px;
`;

export const TitleBox = styled.div`
  width: 684px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  font-size: 14px;
  margin-bottom: 10px;
`;

export const PutTitle = styled.input`
  width: 604px;
  height: 40px;
  border: 1px solid #e5e5e5;
  border-radius: 5px;
`;
export const TextBox = styled.div`
  width: 684px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  font-size: 14px;
  margin-bottom: 10px;
`;

export const PutText = styled.textarea`
  font-size: 14px;
  width: 604px;
  height: 240px;
  border: 1px solid #e5e5e5;
  border-radius: 5px;
`;

export const PhotoBox = styled.div`
  width: 684px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 15px;
`;
export const GrayBoxBox = styled.div`
  margin-left: 5px;
  width: 300px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
export const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;
`;

export const InBox = styled.button`
  margin-right: 10px;
  width: 80px;
  height: 30px;
  border: none;
  background-color: ${(props: IButtonColorProps) =>
    props.isActive ? "#6400FF" : "#999999"};
  color: black;
  font-size: 12px;
  border-radius: 30px;
  color: white;
  cursor: pointer;
`;

export const ExitButton = styled.button`
  border: none;
  margin-left: 10px;
  width: 80px;
  height: 30px;
  border-radius: 30px;
  background-color: #999999;
  font-size: 12px;
  color: white;
  cursor: pointer;
`;
