import styled from "@emotion/styled";
import { IButtonColorProps } from "./boardWrite.types";

export const BackGround = styled.div`
  box-shadow: 0px 4px 20px;
  width: 1200px;
  padding: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;
`;
export const MyTitle = styled.div`
  width: 174px;
  height: 53px;
  font-size: 36px;
  margin-bottom: 50px;
`;

export const MyBody = styled.div`
  width: 1000px;
  height: 1500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const BackTop = styled.div`
  height: 90px;
  width: 1000px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const TopLt = styled.div`
  height: 90px;
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
export const MyErr = styled.div`
  color: red;
`;
export const MyName = styled.div`
  font-size: 16px;
  color: black;
  width: 45;
  height: 24;
`;
export const PutName = styled.input`
  font-size: 16px;
  color: #c4c4c4;
  border: 1px solid #bdbdbd;
  width: 486px;
  height: 52px;
  margin-top: 12px;
`;

export const TopRt = styled.div`
  height: 90px;
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
export const PutPass = styled.input`
  font-size: 16px;
  color: #c4c4c4;
  border: 1px solid #bdbdbd;
  width: 486px;
  height: 52px;
  margin-top: 12px;
`;

export const TitleBox = styled.div`
  height: 130px;
  width: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const PutTitle = styled.input`
  font-size: 16px;
  color: #c4c4c4;
  border: 1px solid #bdbdbd;
  width: 1000px;
  height: 52px;
  margin-top: 12px;
`;
export const TextBox = styled.div`
  height: 500px;
  width: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const PutText = styled.textarea`
  font-size: 16px;
  color: #c4c4c4;
  border: 1px solid #bdbdbd;
  width: 1000px;
  height: 400px;
  margin-top: 12px;
`;
export const AddBox = styled.div`
  height: 300px;
  width: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
export const AddTop = styled.div`
  height: 52px;
  width: 300px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const SurchPut = styled.input`
  font-size: 16px;
  color: #bdbdbd;
  border: 1px solid #bdbdbd;
  width: 77px;
  height: 52px;
  margin-top: 12px;
`;
export const SurchPush = styled.button`
  font-size: 16px;
  color: white;
  background-color: black;
  width: 124px;
  height: 52px;
  margin-top: 12px;
  margin-left: 12px;
`;
export const JustBox = styled.input`
  border: 1px solid #bdbdbd;
  width: 996px;
  height: 52px;
  margin-top: 12px;
`;
export const YouTubeBox = styled.div`
  height: 130px;
  width: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
export const CopyYouTube = styled.input`
  font-size: 16px;
  color: #c4c4c4;
  border: 1px solid #bdbdbd;
  width: 996px;
  height: 52px;
  margin-top: 12px;
`;

export const PhotoBox = styled.div`
  height: 200px;
  width: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
export const GrayBoxBox = styled.div`
  height: 100px;
  width: 1000px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
// export const GrayBox = styled.button`
//   height: 78px;
//   width: 78px;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   background-color: #bdbdbd;
//   margin-right: 20px;
//   cursor: pointer;
// `;
// export const IMG1 = styled.img`
//   margin-right: 20px;

//   height: 78px;
//   width: 78px;
// `;
// export const MyPlus = styled.div`
//   font-size: 12px;
//   color: #4f4f4f;
// `;
// export const MyUpload = styled.div`
//   font-size: 12px;
//   color: #4f4f4f;
// `;

export const MainBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
export const MySelect = styled.div`
  display: flex;
  flex-direction: row;
`;

export const MainSelect1 = styled.input``;
export const MainSelect2 = styled.input``;

export const InBox = styled.button`
  height: 52px;
  width: 179px;
  background-color: ${(props: IButtonColorProps) =>
    props.isActive ? "#ffd600" : "none"};
  color: black;
  font-size: 16px;
  cursor: pointer;
`;
