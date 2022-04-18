import { SmileFilled } from "@ant-design/icons";
import styled from "@emotion/styled";

export const Back = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BackGround = styled.div`
  width: 764px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
`;

export const ProFilePhoto = styled(SmileFilled)`
  margin-right: 10px;
  color: #6400ff;
  width: 20px;
  height: 20px;
  line-height: 20px;
`;

export const TitleBox = styled.div`
  margin-top: 20px;
  margin-bottom: 10px;
  width: 684px;
  font-size: 18px;
  height: 60px;
  line-height: 60px;
  padding-left: 30px;
  border-bottom: #e5e5e5 1px solid;
`;
export const Row = styled.div`
  margin-top: 15px;
  margin-bottom: 30px;
  width: 684px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`;
export const Name = styled.div`
  line-height: 30px;
  width: 60px;
  text-align: center;
  height: 50px;
  font-size: 14px;
  font-weight: bold;
`;
export const ImageBox = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
`;
export const IMG = styled.img`
  margin: 0px 10px;
  width: 220px;
  height: 125px;
`;
export const DetailBox = styled.div`
  padding-left: 30px;
  width: 564px;
  min-height: 200px;
`;
export const MyButtonP = styled.button`
  border: none;
  margin-left: 10px;
  width: 80px;
  height: 30px;
  border-radius: 30px;
  background-color: #6400ff;
  font-size: 12px;
  color: white;
  cursor: pointer;
`;

export const MyButton = styled.button`
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
export const ButtonBox = styled.div`
  margin-top: 20px;
  width: 1200px;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
