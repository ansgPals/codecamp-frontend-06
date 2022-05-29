import styled from "@emotion/styled";
import { useState } from "react";
interface IBackProps {
  backImage?: string;
  isChange?: boolean;
  num?: number;
}
const CarouselBack = styled.div`
  width: 400vw;
  height: 536px;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  transition: ${(props: IBackProps) =>
    props.num === 0 ? "" : "all 1s ease-in-out"};
  transform: ${(props: IBackProps) => `translateX(-${props.num}00vw)`};
`;
const PositionCol = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  background-image: url(${(props: IBackProps) => props.backImage});
  background-size: cover;
  float: left;
`;
const Title = styled.div`
  font-size: 40px;
  font-weight: 700;
  color: white;
`;
const SubTitle = styled.div`
  width: 349px;
  height: 536px;
  font-size: 25px;
  font-weight: 500;
  color: white;
`;
const ButtonBox = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 139px;
  height: 30px;
  border: 3px solid black;
  cursor: pointer;
  background-color: aqua;
`;

export default function CarouselPage() {
  const [num, setNum] = useState(0);
  const ImageUrlArr = ["/랜딩.webp", "/고앵.png", "/배경.jpg"];

  if (num < 3) {
    setInterval(() => {
      setNum(num + 1);
    }, 3000);
  }

  if (num === 3 || num > 3) {
    setNum(0);
  }

  console.log(num);

  const onClickNextButton = () => {
    setNum(num + 1);
  };

  const ImageUrl = ImageUrlArr[num];
  return (
    <div style={{ overflow: " hidden" }}>
      <CarouselBack num={num}>
        <PositionCol backImage={ImageUrlArr[0]}>
          <Title>미니홈페이지 만들기</Title>
          <SubTitle>내 손으로 추억의 미니 홈페이지를 만들어 보세요.</SubTitle>
          <ButtonBox onClick={onClickNextButton}></ButtonBox>
        </PositionCol>
        <PositionCol backImage={ImageUrlArr[1]}>
          <Title>미니홈페이지 만들기</Title>
          <SubTitle>내 손으로 추억의 미니 홈페이지를 만들어 보세요.</SubTitle>
          <ButtonBox onClick={onClickNextButton}></ButtonBox>
        </PositionCol>
        <PositionCol backImage={ImageUrlArr[2]}>
          <Title>미니홈페이지 만들기</Title>
          <SubTitle>내 손으로 추억의 미니 홈페이지를 만들어 보세요.</SubTitle>
          <ButtonBox onClick={onClickNextButton}></ButtonBox>
        </PositionCol>
        <PositionCol backImage={ImageUrlArr[0]}>
          <Title>미니홈페이지 만들기</Title>
          <SubTitle>내 손으로 추억의 미니 홈페이지를 만들어 보세요.</SubTitle>
          <ButtonBox onClick={onClickNextButton}></ButtonBox>
        </PositionCol>
      </CarouselBack>
    </div>
  );
}
