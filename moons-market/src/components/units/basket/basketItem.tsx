import * as S from "./basketItem.styles";
import { useRouter } from "next/router";
import { useState } from "react";
import { IBasketItemProps } from "./basket.types";

export default function BasketItemPage(props: IBasketItemProps) {
  const [check, setCheck] = useState(true);
  const router = useRouter();
  const onClickProduct = () => {
    router.push(`/usedItem/${props.el._id}`);
  };

  const onChangeBuying = () => {
    setCheck((prev) => !prev);
    if (!check) {
      props.setBuyingMoney((prev) => prev + props.el.price);
      const temp = props.buyingList;
      temp.push(props.el._id);
      props.setBuyingList(temp);
    } else {
      props.setBuyingMoney((prev) => prev - props.el.price);
      const tempId = props.buyingList.indexOf(props.el._id);
      const temp = [...props.buyingList];
      temp.splice(tempId, 1);
      props.setBuyingList(temp);
    }
  };
  return (
    <>
      <S.BackGround>
        <S.CheckBox
          type="checkbox"
          defaultChecked
          onChange={onChangeBuying}
        ></S.CheckBox>
        <S.ImgBody>
          {props.el.images[0] ? (
            <S.IMG
              style={{ objectFit: "cover" }}
              src={`https://storage.googleapis.com/${props.el.images[0]}`}
            />
          ) : (
            <S.IMG style={{ objectFit: "cover" }} src={"/noimg.png"} />
          )}
        </S.ImgBody>
        <S.ProductCol onClick={onClickProduct}>
          <S.TitleBox>{props.el.name}</S.TitleBox>
          <S.RemarkBox>{props.el.remarks}</S.RemarkBox>
        </S.ProductCol>
        <S.Col>
          <S.PriceBox> {props.el.price}원</S.PriceBox>
          <S.Name>
            판매자명 :{"  "}
            {props.el.seller.name}
          </S.Name>
        </S.Col>
      </S.BackGround>
    </>
  );
}
