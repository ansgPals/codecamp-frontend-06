import { useState } from "react";
import { IBoard } from "../../../../src/commons/types/generated/types";

interface IItemProps {
  data?: any;
  index: number;
  el: IBoard;
}
export default function BoardItems(props: IItemProps) {
  const [isAlready, setIsAlready] = useState(false);

  const onClickBasket = (el: IBoard) => () => {
    // 기존 장바구니 가져오기
    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");

    // 이미 담겼는지 확인하기
    const temp = baskets.filter((basketEl: IBoard) => basketEl._id === el._id);
    if (temp.length > 0) {
      alert("이미 담으신물품입니다!");
      return;
    }

    const { __typename, ...newEl } = el;
    baskets.push(newEl);
    localStorage.setItem("baskets", JSON.stringify(baskets));
    setIsAlready(true);
  };

  const onClickDelete = (el: IBoard) => () => {
    // 기존 장바구니 가져오기
    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");

    const newBaskets = baskets.filter(
      (basketEl: IBoard) => basketEl._id !== el._id
    );
    setIsAlready(false);
    localStorage.setItem("baskets", JSON.stringify(newBaskets));
  };
  return (
    <div>
      {" "}
      <div key={props.el._id}>
        <span>{props.el.title}</span>
        <span>{props.el.writer}</span>
        {isAlready ? (
          <button onClick={onClickDelete(props.el)}>담기취소</button>
        ) : (
          <button onClick={onClickBasket(props.el)}>장바구니담기</button>
        )}
      </div>
    </div>
  );
}
