import styled from "@emotion/styled";

export const BackGround = styled.label`
  max-width: 1200px;
  min-width: 800px;
  width: 60vw;
  border-bottom: 1px solid #e8e7e7;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 20px;
  padding-bottom: 20px;
`;
export const Col = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
export const ProductCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  cursor: pointer;
  border-radius: 30px;
  :hover {
    -webkit-box-shadow: inset 2px 2px 88px -49px rgba(155, 255, 150, 1);
    -moz-box-shadow: inset 2px 2px 88px -49px rgba(155, 255, 150, 1);
    box-shadow: inset 2px 2px 88px -49px rgba(155, 255, 150, 1);
  }
`;
export const ImgBody = styled.div`
  padding: 10px;
  margin-right: 20px;
  width: 150px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 3px solid #aeddb5;
  border-radius: 30px;
`;
export const IMG = styled.img`
  width: 100%;
  height: 100%;
`;

export const TitleBox = styled.div`
  padding-left: 20px;
  width: 400px;
  max-height: 80px;
  font-size: 30px;
  font-weight: bold;
  line-height: 80px;
`;
export const RemarkBox = styled.div`
  padding-left: 20px;
  width: 200px;
  min-height: 50px;
  font-size: 16px;
`;
export const PriceBox = styled.div`
  text-align: center;
  width: 200px;
  font-size: 25px;
  font-weight: bold;
  color: #eea00f;
`;
export const Name = styled.div`
  color: #000000;
  text-align: center;
  width: 200px;

  font-size: 16px;
  height: 18px;
  margin-right: 10px;
  line-height: 20px;
`;
export const CheckBox = styled.input`
  margin-right: 10px;
  width: 50px;
  height: 50px;
  cursor: pointer;
  border-radius: 20px;
`;