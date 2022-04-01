import styled from "@emotion/styled";

export const BackGround = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const CommentBox = styled.div`
  border-top: #bdbdbd 1px solid;
  padding: 10px 0px;
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
  height: 1000px;
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 1300px;
  min-height: 800px;
  margin: 100px;
`;
