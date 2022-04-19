import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import {
  IBoard,
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../src/commons/types/generated/types";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
      contents
    }
  }
`;
const Back = styled.div`
  display: flex;
  flex-direction: row;
`;
const Left = styled.div`
  margin: 20px;
`;
const Right = styled.div`
  background-color: azure;
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 12px;
`;
const Product = styled.div`
  font-size: 10px;
`;
const List = styled.div`
  cursor: pointer;
`;
export const TodayDate = () => {
  const newDate = new Date();
  const yyyy = newDate.getFullYear();
  const mm = String(newDate.getMonth() + 1).padStart(2, "0");
  const dd = String(newDate.getDate()).padStart(2, "0");
  return `${yyyy}.${mm}.${dd}`;
};

export default function QuizPage() {
  const [basketItems, setBasketItems] = useState([]);
  let date = TodayDate();
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );

  const onClickBasket = (el: IBoard) => () => {
    // 기존 장바구니 가져오기
    const baskets = JSON.parse(
      localStorage.getItem(JSON.stringify(date)) || "[]"
    );

    // 이미 담겼는지 확인하기
    const temp = baskets.filter((basketEl: IBoard) => basketEl._id === el._id);
    if (temp.length > 0) {
      return;
    }

    //    const newBaskets= baskets.filter((basketEl: IBoard) => basketEl._id !== el._id);

    const { __typename, ...newEl } = el;
    baskets.push(newEl);
    localStorage.setItem(JSON.stringify(date), JSON.stringify(baskets));
    setBasketItems(baskets);
  };

  useEffect(() => {
    const baskets = JSON.parse(
      localStorage.getItem(JSON.stringify(date)) || "[]"
    );
    setBasketItems(baskets);
  }, []);

  return (
    <Back>
      <Left>
        {" "}
        <div>상품목록</div>
        {data?.fetchBoards.map((el: IBoard) => (
          <List key={el._id} onClick={onClickBasket(el)}>
            <span>{el.title}</span>
            <span>{el.writer}</span>
          </List>
        ))}
      </Left>
      <Right>
        <div>오늘본 상품</div>
        {basketItems.map((el: IBoard) => (
          <div key={el._id}>
            <Product>{el.title}</Product>
          </div>
        ))}
      </Right>
    </Back>
  );
}
