import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import BasketItemPage from "../../../src/components/units/basket/basketItem";

const Back = styled.div`
  margin-top: 150px;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 1200px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
const Title = styled.div`
  max-width: 1200px;
  min-width: 800px;
  width: 60vw;
  height: 60px;
  border-bottom: orange 1px solid;
  padding-left: 20px;
  font-weight: bold;
  color: #25d125;
  font-size: 35px;
`;
const BasketItem = styled.div`
  width: 500px;
  font-size: 35px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 30px;
`;

export default function MyBasketPage() {
  const [basketItems, setBasketItems] = useState([]);

  useEffect(() => {
    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");
    setBasketItems(baskets);
    console.log(baskets);
  }, []);

  return (
    <>
      <Back>
        <Wrapper>
          <Title>장바구니</Title>
          <BasketItem>
            {" "}
            {basketItems.map((el) => (
              <BasketItemPage el={el} key={el._id} />
            ))}
          </BasketItem>
        </Wrapper>
      </Back>
    </>
  );
}
