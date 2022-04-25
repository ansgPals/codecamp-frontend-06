import styled from "@emotion/styled";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { todayProductState } from "../../../../commons/store";
import TodayProductItemPage from "../../../units/todayProduct/todayProductItem";

const Back = styled.div`
  margin-top: 300px;
  width: 150px;
  margin-left: 20px;
  border: 3px #1dc84d solid;
  background-color: white;
  border-radius: 30px;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0.9;
`;
const Title = styled.div`
  margin-top: 3px;
  width: 50px;
  height: 50px;
  line-height: 60px;
  font-size: 20px;
  text-align: center;

  border-bottom: 1px #bdbdbd solid;
`;
const BasketItem = styled.div`
  width: 500px;
  font-size: 35px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
const Delete = styled.button`
  background-color: white;
  border: 3px #dfffd0 solid;
  margin-bottom: 20px;
  cursor: pointer;
`;

export default function TodayProductPage() {
  const [todayProduct, setTodayProduct] = useRecoilState(todayProductState);

  useEffect(() => {
    const todayProduct = JSON.parse(
      localStorage.getItem("todayProduct") || "[]"
    );
    setTodayProduct(todayProduct);
  }, []);
  let myTodayProduct = [];
  if (todayProduct[0]) {
    myTodayProduct = todayProduct.slice(0, 4);
  }

  const onClickTest = () => {
    localStorage.setItem("todayProduct", JSON.stringify([]));
    setTodayProduct([]);
  };
  console.log("와랄라" + myTodayProduct);
  return (
    <Back>
      <Title>today</Title>
      <BasketItem>
        {" "}
        {myTodayProduct?.map((el) => (
          <TodayProductItemPage el={el} key={el._id} />
        ))}
      </BasketItem>
      <Delete onClick={onClickTest}>전부 지우기</Delete>
    </Back>
  );
}
