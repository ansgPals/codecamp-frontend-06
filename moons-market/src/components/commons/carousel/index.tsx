import styled from "@emotion/styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";
import { useState } from "react";
const ReactSlick = styled(Slider)`
  width: 100%;
  min-width: 80rem;
  height: 50.666rem;
`;
const BackGround = styled.div`
  background-color: green;
`;
const PositionRow = styled.div`
  display: flex;
  flex-direction: row;
  height: fit-content;
  align-items: center;
  position: absolute;
  z-index: 10;
  margin-top: 46.1333rem;
  margin-left: 24.9333rem;
`;
const PageNumBox = styled.div`
  width: 3.666rem;
  height: 1.8666;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 0.9333rem;
`;
const PageNum = styled.div`
  font-size: 1rem;
  color: white;
  text-align: center;
  line-height: 1.8666;
`;
interface IBackProps {
  backImage?: string;
  level?: string;
}
const SlickPage = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(${(props: IBackProps) => props.backImage});
  width: 100%;
  min-width: 80rem;
  height: 50.666rem;
  background-size: cover;
`;
const Title = styled.div`
  width: fit-content;
  margin-top: 1.333rem;
  margin-left: 24rem;
  color: white;
  font-size: 2.666rem;
  margin-bottom: 1.6rem;
`;
const SubTitle = styled.div`
  margin-left: 24rem;
  color: white;
  font-size: 1.666rem;
  width: 21.9333rem;
`;
const PauseButton = styled.div`
  height: 1.8666;
  width: 1.7333rem;
  background-color: rgba(0, 0, 0, 0.3);
  color: white;
  text-align: center;
  line-height: 1.8666;
  margin-left: 3.4rem;
  cursor: pointer;
`;

const Level = styled.div`
  width: 3.6rem;
  height: 2rem;
  background-color: ${(props: IBackProps) =>
    props.level === "초급"
      ? "#A76EFF"
      : props.level === "중급"
      ? "#6400FF"
      : props.level === "입문"
      ? "#ffe000"
      : "black"};
  border-radius: 0.333rem;
  color: white;
  line-height: 2rem;
  text-align: center;
  margin-top: 18.866rem;
  margin-left: 24rem;
`;

export default function WaitingCardSlider({
  data,
}: {
  data: Array<{
    img: string;
    title: string;
    subTitle: string;
    level: string;
  }>;
}) {
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
    autoplaySpeed: playCarousel ? 5000 : 600000,
    autoplay: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    afterChange: (pageNum: number) => setPageNum(pageNum + 1),
  };

  return (
    <BackGround>
      <PositionRow>
        <PageNumBox>
          <PageNum>
            {pageNum} / {data.length}
          </PageNum>
        </PageNumBox>
        <PauseButton onClick={onClickPlayCarousel}>| |</PauseButton>
      </PositionRow>
      <ReactSlick {...settings}>
        {data.map((el, i) => (
          <SlickPage key={i} backImage={el.img}>
            <div>
              {" "}
              <Level>{el.level}</Level>
              <Title>{el.title}</Title>
              <SubTitle>{el.subTitle}</SubTitle>
            </div>
          </SlickPage>
        ))}
      </ReactSlick>
    </BackGround>
  );
}
