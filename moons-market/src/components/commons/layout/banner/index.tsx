import styled from "@emotion/styled";
import Slider from "react-slick";

const Wrapper = styled.div`
  background-color: #ddffb1;

  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 200px;
`;
const Carousel = styled(Slider)`
  height: 120px;
  width: 1200px;
`;
const CarouselBox = styled.div`
  font-size: 90px;
  text-align: center;
  line-height: 100px;
`;

export default function LayOutBanner() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <Wrapper>
        <div>
          <h2></h2>
          <Carousel {...settings}>
            <div>
              <CarouselBox>ㅇㅇㅇ</CarouselBox>
            </div>
            <div>
              <CarouselBox> I am CanOpenner</CarouselBox>
            </div>
            <div>
              <CarouselBox>MUN HYEMIN</CarouselBox>
            </div>
          </Carousel>
        </div>
      </Wrapper>
    </>
  );
}
