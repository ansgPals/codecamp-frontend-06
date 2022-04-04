import styled from "@emotion/styled";
import Slider from "react-slick";
import React from "react";
import { Box } from "@material-ui/core";

export const Back = styled.div`
  width: 1000px;
  height: 200px;
  background-color: lightsalmon;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const BackBox = styled.div`
  width: 1000px;
  height: 200px;
  background-color: lightsalmon;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Carasel = styled(Slider)`
  display: flex;
  flex-direction: row;
  width: 300px;
  height: 150px;
  background-color: yellow;
  margin: 100px;
`;
export const Img1 = styled.div`
  background-image: url(/씨티.jpeg);
  width: 280px;
  height: 200px;
  background-size: cover;
`;
export const Img2 = styled.div`
  background-image: url(/호그와트.jpeg);
  width: 280px;
  height: 200px;
  background-size: cover;
`;
export const Img3 = styled.div`
  background-image: url(/호그.jpeg);
  width: 280px;
  height: 200px;
  background-size: cover;
`;
export const Img4 = styled.div`
  background-image: url(/와트.jpeg);
  width: 280px;
  height: 200px;
  background-size: cover;
`;
export const Img5 = styled.div`
  background-image: url(/씨티.jpeg);
  width: 280px;
  height: 200px;
  background-size: cover;
`;
export const Img6 = styled.div`
  background-image: url(/씨티.jpeg);
  width: 280px;
  height: 200px;
  background-size: cover;
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
      <Back>
        <BackBox>
          <h2> 캐러세에엘 </h2>
          <Carasel {...settings}>
            <Img1>
              <div>1</div>
            </Img1>
            <Img2>
              <div>2</div>
            </Img2>
            <Img3>
              <div>3</div>
            </Img3>
            <Img4>
              <div>4</div>
            </Img4>
            <Img5>
              <div>5</div>
            </Img5>
            <Img6>
              <div>6</div>
            </Img6>
          </Carasel>
        </BackBox>
      </Back>
    </>
  );
}
