import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { IBasketItemProps } from "./basket.types";

export const BackGround = styled.div`
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
  width: 400px;
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
export default function BasketItemPage(props: IBasketItemProps) {
  const router = useRouter();
  const onClickProduct = () => {
    router.push(`/usedItem/${props.el._id}`);
  };
  return (
    <>
      <BackGround>
        <ImgBody>
          {props.el.images[0] ? (
            <IMG
              style={{ objectFit: "cover" }}
              src={`https://storage.googleapis.com/${props.el.images[0]}`}
            />
          ) : (
            <IMG style={{ objectFit: "cover" }} src={"/사진없음.png"} />
          )}
        </ImgBody>
        <ProductCol onClick={onClickProduct}>
          <TitleBox>{props.el.name}</TitleBox>
          <RemarkBox>{props.el.remarks}</RemarkBox>
        </ProductCol>
        <Col>
          <PriceBox> {props.el.price}원</PriceBox>
          <Name>
            판매자명 :{"  "}
            {props.el.seller.name}
          </Name>
        </Col>
      </BackGround>
    </>
  );
}
