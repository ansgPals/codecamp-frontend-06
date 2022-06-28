import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { ITodayItemProps } from "./todayProduct.types";

export const BackGround = styled.div`
  margin: 10px 0px;
  width: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  :hover {
    -webkit-box-shadow: inset 2px 2px 88px -49px rgba(155, 255, 150, 1);
    -moz-box-shadow: inset 2px 2px 88px -49px rgba(155, 255, 150, 1);
    box-shadow: inset 2px 2px 88px -49px rgba(155, 255, 150, 1);
  }
`;

export const ImgBody = styled.div`
  padding: 2px;
  width: 80px;
  height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 3px solid #aeddb5;
  border-radius: 10px;
`;
export const IMG = styled.img`
  border-radius: 10px;
  width: 100%;
  height: 100%;
`;

export const TitleBox = styled.div`
  width: 100px;
  text-align: center;
  font-size: 15px;
  border-bottom: #ffce09 solid 1px;
`;

export const Name = styled.div`
  width: 200px;
  font-size: 20px;
  font-weight: bold;
`;
export default function TodayProductItemPage(props: ITodayItemProps) {
  const router = useRouter();
  const onClickProduct = () => {
    router.push(`/usedItem/${props.el._id}`);
  };
  return (
    <>
      <BackGround onClick={onClickProduct}>
        <ImgBody>
          {props.el.images[0] ? (
            <IMG
              style={{ objectFit: "cover" }}
              src={`https://storage.googleapis.com/${props.el.images[0]}`}
            />
          ) : (
            <IMG style={{ objectFit: "cover" }} src={"/noimg.png"} />
          )}
        </ImgBody>

        <TitleBox>{props.el.name.slice(0, 6)}...</TitleBox>
      </BackGround>
    </>
  );
}
