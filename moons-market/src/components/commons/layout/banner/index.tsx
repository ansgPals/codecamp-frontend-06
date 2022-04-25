import styled from "@emotion/styled";
import Slider from "react-slick";

const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Carousel = styled(Slider)`
  height: 120px;
  width: 1200px;
  display: flex;
`;
const MyBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url("/랜딩.webp");
  background-size: cover;
`;
const CarouselBox = styled.div`
  font-size: 90px;
  color: white;
  text-align: center;
  line-height: 100px;
`;

export default function LayOutBanner() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <Wrapper>
        <div>
          <Carousel {...settings}>
            <MyBox>
              <CarouselBox>ㅇㅇㅇ</CarouselBox>
            </MyBox>
            <MyBox>
              <CarouselBox> I am CanOpenner</CarouselBox>
            </MyBox>
            <MyBox>
              <CarouselBox>MUN HYEMIN</CarouselBox>
            </MyBox>
          </Carousel>
        </div>
      </Wrapper>
    </>
  );
}
