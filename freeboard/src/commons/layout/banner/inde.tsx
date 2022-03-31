import styled from "@emotion/styled";
import Slider from "react-slick";

const Wrapper = styled.div`
  height: 400px;
  width: 1920px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(/freeboard/씨티.jpeg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;
`;
const Carousel = styled(Slider)`
  height: 300px;
  width: 1200px;
`;
const CarouselBox = styled.div`
  font-size: 70px;
  text-align: center;
  color: white;
  line-height: 300px;
`;
export default function LayOutBanner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
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
              <CarouselBox>호롤롤롤로</CarouselBox>
            </div>
            <div>
              <CarouselBox>호롤롤롤로</CarouselBox>
            </div>
            <div>
              <CarouselBox>꺄르르르르륵</CarouselBox>
            </div>
          </Carousel>
        </div>
      </Wrapper>
    </>
  );
}
