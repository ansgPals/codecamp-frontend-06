import styled from "@emotion/styled";
import Slider from "react-slick";

const Wrapper = styled.div`
  height: 240px;
  width: 764px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url("/보라.jpg");

  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;
  margin: 10px;
`;
const Carousel = styled(Slider)`
  height: 180px;
  width: 700px;
`;
const CarouselBox = styled.div`
  font-size: 50px;
  text-align: center;
  line-height: 180px;
  color: white;
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
              <CarouselBox> Carousel</CarouselBox>
            </div>
            <div>
              <CarouselBox> FrontEnd06 </CarouselBox>
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
