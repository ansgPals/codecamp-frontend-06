import { Modal } from "antd";
import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAuth } from "../../commons/hocs/useAuth";
import { useRecoilState } from "recoil";
import { userInfoState } from "../../../commons/store";
import {
  IBoard,
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../commons/types/generated/types";
import {
  DELETE_USED_ITEM,
  FETCH_USEDITEM,
  FETCH_USEDITEMS_IPICKED,
  TOGGLE_USED_ITEM_PISK,
} from "./productDetail.query";
import ProductDetailUI from "./productDetail.presenter";
import { kakaoMap } from "../libraries/kakao-map";

export default function ProductDetailContainer() {
  useAuth();
  const [pickIdArr, setPickIdArr] = useState([]);
  const [basketModalIsOpen, setBasketModalIsOpen] = useState(false);
  const [deleteIsOpen, setDeleteIsOpen] = useState(false);
  const [userInfo] = useRecoilState(userInfoState);
  const [deleteUseditem] = useMutation(DELETE_USED_ITEM);
  const [toggleUseditemPick] = useMutation(TOGGLE_USED_ITEM_PISK);
  const router = useRouter();
  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USEDITEM, {
    variables: { useditemId: String(router.query.productId) },
  });
  const { data: pickData } = useQuery(FETCH_USEDITEMS_IPICKED, {
    variables: {
      search: "",
    },
  });
  (() => {
    console.warn = console.error = () => {};
  })();
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
  const onClickPick = () => {
    try {
      toggleUseditemPick({
        variables: {
          useditemId: router.query.productId,
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM,
            variables: { useditemId: String(router.query.productId) },
          },
          {
            query: FETCH_USEDITEMS_IPICKED,
            variables: { search: "" },
          },
        ],
      });
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

  const OnClickPayment = () => {
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
  useEffect(() => {
    if (data?.fetchUseditem.useditemAddress?.address?.[0]) {
      kakaoMap(data?.fetchUseditem.useditemAddress.address);
    }
    if (pickData?.fetchUseditemsIPicked) {
      const pickId = [];
      pickData.fetchUseditemsIPicked.map((el) => pickId.push(el._id));
      setPickIdArr(pickId);
    }
  }, [data, pickData]);
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
      onClickPick={onClickPick}
      pickIdArr={pickIdArr}
    />
  );
}
