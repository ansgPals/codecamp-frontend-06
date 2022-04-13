import styled from "@emotion/styled";
import Slider from "react-slick";

const Wrapper = styled.div`
  height: 400px;
  width: 1920px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url("/고앵.png");
  background-size: unset;
  background-repeat: no-repeat;
  background-position: bottom;
  background-color: #afa9ff;
  border-radius: 200px;
`;
const Carousel = styled(Slider)`
  height: 300px;
  width: 1200px;
`;
const CarouselBox = styled.div`
  font-size: 90px;
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
              <CarouselBox> I am ZipSA</CarouselBox>
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
