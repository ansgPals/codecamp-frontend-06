import styled from "@emotion/styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";
import { useState } from "react";
const ReactSlick = styled(Slider)`
  width: 100%;
  height: 536px;
  background-color: aqua;
`;
const BackGround = styled.div`
  background-color: green;
`;
const PositionRow = styled.div`
  display: flex;
  flex-direction: row;
  height: fit-content;
  align-items: center;
  position: fixed;
  z-index: 10;
  margin-top: 451px;
  margin-left: 157px;
`;
const PageNumBox = styled.div`
  width: 55px;
  height: 28px;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 14px;
`;
const PageNum = styled.div`
  font-size: 15px;
  color: white;
  text-align: center;
  line-height: 28px;
`;
interface IBackProps {
  backImage: string;
}
const MyMY = styled.div`
  background-image: url(${(props: IBackProps) => props.backImage});
  width: 1000px;
  height: 536px;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  padding-bottom: 40px !important;
`;
const Title = styled.div`
  width: fit-content;
  margin-top: 186px;
  margin-left: 212px;
  color: white;
  font-size: 40px;
  margin-bottom: 24px;
`;
const SubTitle = styled.div`
  margin-left: 212px;
  color: white;
  font-size: 25px;
  width: 329px;
`;
const PauseButton = styled.div`
  height: 28px;
  width: 28px;
  background-color: rgba(0, 0, 0, 0.3);
  color: white;
  text-align: center;
  line-height: 28px;
  margin-left: 40px;
  cursor: pointer;
`;

export default function WaitingCardSlider() {
  const data = [
    {
      img: "/배경.jpg",
      title: "미니 홈페이지 만들기",
      subTitle: "내 손으로 추억의 미니 홈페이지를 만들어 보세요.",
    },
    {
      img: "/고앵.png",
      title: "고양이 츄르 만들기",
      subTitle: "내 손으로 고양이의 츄르를 만들어 보세요.",
    },
    {
      img: "/랜딩.webp",
      title: "미니 잔디 만들기",
      subTitle: "내 손으로 자연의 잔디를 만들어 보세요.",
    },
  ];
  const [pageNum, setPageNum] = useState(1);
  const [playCarousel, setPlayCarousel] = useState<boolean>(true);
  const onClickPlayCarousel = () => {
    setPlayCarousel((prev) => !prev);
  };

  const settings = {
    centerMode: false,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplaySpeed: playCarousel ? 1000 : 600000,
    autoplay: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    afterChange: (pageNum: number) => setPageNum(pageNum + 1),
    pauseOnHover: true,
  };
  console.log(pageNum);

  console.log(playCarousel);
  return (
    <BackGround>
      <PositionRow>
        <PageNumBox>
          <PageNum>{pageNum} / 5</PageNum>
        </PageNumBox>
        <PauseButton onClick={onClickPlayCarousel}>| |</PauseButton>
      </PositionRow>
      <ReactSlick {...settings}>
        {data.map((el, i) => (
          <MyMY key={i} backImage={el.img}>
            <Title>{el.title}</Title>
            <SubTitle>{el.subTitle}</SubTitle>
          </MyMY>
        ))}
      </ReactSlick>
    </BackGround>
  );
}
