import styled from "@emotion/styled";
export const BoardBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Back = styled.div`
  padding: 100px;
  width: 1500px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BackGround = styled.div`
  box-shadow: 0px 4px 20px;
  width: 1200px;
  padding: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;
  background-color: white;
`;
export const TopBack = styled.div`
  width: 1000px;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: solid #bdbdbd 1px;
`;
export const TopLeft = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const ProFilePhoto = styled.div`
  width: 47px;
  height: 47px;
  margin-right: 20px;
  background-image: url("/freeboard/프로필.png");
  background-size: cover;
`;
export const NameDate = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
export const Name = styled.div`
  font-size: 24px;
  height: 26px;
`;
export const Date = styled.div`
  font-size: 16px;
  height: 18px;
  color: #828282;
`;
export const TopRight = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const YellowItem1 = styled.div`
  background-image: url("/freeboard/map.png");
  background-size: cover;

  width: 27px;
  height: 27px;
  margin-right: 20px;
`;
export const YellowItem2 = styled.div`
  background-image: url("/freeboard/첨부.png");
  background-size: cover;

  width: 27px;
  height: 27px;
`;
export const ResponseDataBox = styled.div`
  width: 1000px;
  min-height: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TitleBox = styled.div`
  width: 1000px;
  height: 100px;
  font-size: 36px;
  font-weight: bold;
`;
export const ImageBox = styled.div`
  width: 996px;
  height: 480px;
  background-color: #bdbdbd;
`;
export const DetailBox = styled.div`
  margin-top: 50px;
  width: 996px;
  min-height: 200px;
`;
export const YoutubeBox = styled.div`
  margin-top: 50px;
  width: 486px;
  height: 240px;
  background-color: brown;
`;
export const LikeUnLikeBox = styled.div`
  width: 1000px;
  height: 200px;
  padding-top: 120px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const LikeBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const GoodBox = styled.button`
  width: 30px;
  height: 30px;
  background-image: url("/freeboard/오오.png");
  color: orange;
  border: 0ch;
  background-color: white;
  background-size: cover;
  cursor: pointer;
`;
export const LikeNumber = styled.div`
  font-size: 18px;
  color: orange;
`;

export const UnLikeBox = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
`;
export const BadBox = styled.button`
  width: 30px;
  height: 30px;
  background-image: url("/freeboard/우우.png");
  border: 0ch;
  background-color: white;
  background-size: cover;
  margin-left: 20px;
  cursor: pointer;
`;
export const UnLikeNumber = styled.div`
  font-size: 18px;
  color: #828282;
  margin-left: 20px;
`;
export const MyButton = styled.button`
  width: 179px;
  height: 52px;
  margin-right: 15px;
  margin-left: 15px;
  cursor: pointer;
`;
export const ButtonBox = styled.div`
  width: 1200px;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
