import { Modal } from "antd";
import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { useAuth } from "../../commons/hocs/useAuth";
import { useRecoilState } from "recoil";
import { userInfoState } from "../../../commons/store";
import {
  IBoard,
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../commons/types/generated/types";
import { DELETE_USED_ITEM, FETCH_USEDITEM } from "./productDetail.query";
import ProductDetailUI from "./productDetail.presenter";

export default function ProductDetailContainer() {
  useAuth();
  const [basketModalIsOpen, setBasketModalIsOpen] = useState(false);
  const [deleteIsOpen, setDeleteIsOpen] = useState(false);

  const [userInfo] = useRecoilState(userInfoState);
  const [deleteUseditem] = useMutation(DELETE_USED_ITEM);
  console.log("리코일" + userInfo._id);
  const router = useRouter();
  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USEDITEM, {
    variables: { useditemId: String(router.query.productId) },
  });

  const DeletetOk = () => {
    try {
      deleteUseditem({
        variables: {
          useditemId: router.query.productId,
        },
      });
      Modal.info({ content: "상품이 삭제되었습니다!!" });
      router.push(`/usedItem`);
    } catch (error) {
      alert(error);
    }
  };

  const DeleteCancle = () => {
    setDeleteIsOpen(false);
  };

  const OnClickDelete = () => {
    setDeleteIsOpen(true);
  };

  const showBasketModal = () => {
    setBasketModalIsOpen(true);
  };

  const BasketOk = () => {
    router.push(`/myPage/basket`);
  };

  const BasketCancle = () => {
    setBasketModalIsOpen(false);
  };

  const OnClickEdit = () => {
    router.push(`/usedItem/${router.query.productId}/edit`);
  };

  const OnClickList = () => {
    router.push("/usedItem");
  };
 
  const  OnClickPayment = () => {
    router.push(`/usedItem/${router.query.productId}/payment`);
  };
  const OnClickBasket = (el: IBoard) => () => {
    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");
    const temp = baskets.filter((basketEl: IBoard) => basketEl._id === el._id);

    if (temp.length > 0) {
      Modal.info({ content: "이미 담으신 물품입니다!" });
      return;
    }
    const { __typename, ...newEl } = el;

    baskets.push(newEl);
    localStorage.setItem("baskets", JSON.stringify(baskets));
    showBasketModal();
  };
  return (
    <ProductDetailUI
      OnClickBasket={OnClickBasket}
      OnClickList={OnClickList}
      OnClickEdit={OnClickEdit}
      BasketCancle={BasketCancle}
      BasketOk={BasketOk}
      OnClickDelete={OnClickDelete}
      DeleteCancle={DeleteCancle}
      DeletetOk={DeletetOk}
      deleteIsOpen={deleteIsOpen}
      basketModalIsOpen={basketModalIsOpen}
      data={data}
      userInfo={userInfo}
      OnClickPayment={OnClickPayment}
    />
  );
}
