import styled from "@emotion/styled";
import exp from "constants";
import { IisEditProps } from "./boardComment.types";

export const BackGround = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const CommentBox = styled.div`
  border-top: #bdbdbd 1px solid;
  padding: 30px 0px;
`;
export const CommentEditBox = styled.div`
  display: ${(props: IisEditProps) => (props.isEdit ? "" : "none")};
  border-top: #bdbdbd 1px solid;
  padding: 30px 0px;
`;
export const CommentTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 15px 0px;
`;
export const CommentIcon = styled.div`
  background-image: url("/freeboard/프로필.png");
  width: 20px;
  height: 20px;
  background-size: cover;
  margin-right: 12px;
`;
export const Title = styled.div`
  font-size: 18px;
`;
export const CommentTopBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 15px 0px;
`;
export const NameInput = styled.input`
  width: 180px;
  height: 52px;
  font-size: 16px;
  padding: 10px;
  color: #828282;
  margin-right: 30px;
  border: #bdbdbd 1px solid;
`;
export const PassWordInput = styled.input`
  width: 180px;
  height: 52px;
  font-size: 16px;
  padding: 10px;
  color: #828282;
  border: #bdbdbd 1px solid;
`;
export const Star = styled.div`
  margin-left: 15px;
  line-height: 52px;
`;

export const CommentContents = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #bdbdbd;
  width: 1200px;
`;
export const CommentInPut = styled.textarea`
  border: none;
  width: 1190px;
  min-height: 120px;
  padding: 10px;
  font-size: 16px;
  color: #828282;
`;
export const ContentsFootBox = styled.div`
  border-top: #bdbdbd 1px solid;
  width: 1200px;
  height: 50px;
  display: flex;
  flex-direction: row;
`;
export const TextLimit = styled.div`
  width: 1080px;
  padding: 10px;
  color: #bdbdbd;
  font-size: 16px;
  text-align: start;
  line-height: 30px;
`;
export const OKButton = styled.div`
  background-color: black;
  width: 120px;
  color: white;
  font-size: 16px;
  text-align: center;
  line-height: 50px;
  cursor: pointer;
  :hover {
    background-color: gray;
  }
`;
export const CommentListBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 1200px;
  min-height: 800px;
`;

export const ListProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-bottom: #bdbdbd solid 1px;
  margin-top: 20px;
  width: 1200px;
  height: 111px;
`;

export const ListProfile = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
`;
export const Photo = styled.div`
  background-image: url("/freeboard/프로필.png");
  width: 40px;
  height: 40px;
  margin: 10px;
  background-size: cover;
`;
export const ListContents = styled.div`
  width: 1000px;
  height: 70px;
  padding: 10px;
  display: flex;
  flex-direction: column;
`;
export const CommentButton = styled.div`
  width: 140px;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: end;
`;
export const EditButton = styled.button`
  margin-right: 15px;
  background-image: url("/freeboard/연필.png");
  background-size: cover;
  background-color: white;
  width: 18px;
  height: 18px;
  border: none;
  cursor: pointer;
`;
export const DeleteButton = styled.button`
  margin-right: 15px;
  background-image: url("/freeboard/엑스.png");
  background-size: cover;
  background-color: white;
  width: 18px;
  height: 18px;
  border: none;
  cursor: pointer;
`;
export const DeleteButton2 = styled.button`
  margin-right: 15px;
  background-image: url("/freeboard/엑스.png");
  background-size: cover;
  width: 20px;
  height: 20px;
  border: none;
  cursor: pointer;
  margin-left: 1050px;
  background-color: white;
`;
export const NameStar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  height: 30px;
`;
export const ListStar = styled.div`
  margin-left: 20px;
  line-height: 16px;
`;
export const ListName = styled.div`
  margin-bottom: 5px;
  font-size: 16px;
`;
export const ListComment = styled.div`
  font-size: 16px;
  color: #4f4f4f;
`;
export const ListDate = styled.div`
  width: 1200px;
  height: 30px;
  padding-left: 70px;
  margin-bottom: 10px;
  font-size: 12px;
  line-height: 30px;
  color: #bdbdbd;
`;
