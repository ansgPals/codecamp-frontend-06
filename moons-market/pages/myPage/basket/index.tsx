import { ConsoleSqlOutlined } from "@ant-design/icons";
import { gql, OperationVariables, useMutation, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { IQuery } from "../../../src/commons/types/generated/types";
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
export const ChongBox = styled.div`
  max-width: 1200px;
  min-width: 800px;
  width: 60vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 300px;
`;

export const Row = styled.div`
  max-width: 1200px;
  min-width: 800px;
  height: 60px;
  width: 60vw;
  padding: 0px 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const SubTitle = styled.div`
  font-size: 30px;
  color: #999999;
`;
export const RtBox = styled.div`
  font-size: 30px;
  color: orange;
  font-weight: bold;
`;
const PaymentButton = styled.button`
  height: 80px;
  width: 300px;
  font-size: 30px;
  background-color: orange;
  color: white;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  :hover {
    background-color: #ffbf75;
  }
  margin-bottom: 50px;
`;
export const CheckBox = styled.input`
  margin-right: 10px;
  width: 50px;
  height: 50px;
  cursor: pointer;
  border-radius: 20px;
`;
export const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
      userPoint {
        amount
      }
    }
  }
`;
export const CREATE_POINT_TRANSATION_OF_BUYING_AND_SELLING = gql`
  mutation createPointTransactionOfBuyingAndSelling($useritemId: ID!) {
    createPointTransactionOfBuyingAndSelling(useritemId: $useritemId) {
      _id
    }
  }
`;
export default function MyBasketPage() {
  const { data: userData } = useQuery<
    Pick<IQuery, "fetchUserLoggedIn">,
    OperationVariables
  >(FETCH_USER_LOGGED_IN, { variables: {} });
  const [createPointTransactionOfBuyingAndSelling] = useMutation(
    CREATE_POINT_TRANSATION_OF_BUYING_AND_SELLING
  );
  const [Allcheck, setAllCheck] = useState(true);
  const [basketItems, setBasketItems] = useState([]);
  const router = useRouter();
  const [buyingList, setBuyingList] = useState([]);
  const [buyingMoney, setBuyingMoney] = useState(0);
  useEffect(() => {
    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");
    setBasketItems(baskets);

    let newBuyingMoney = 0;
    const buyingList = [];
    baskets.map((el: any) => {
      newBuyingMoney += el.price;
      buyingList.push(el._id);
    });

    const setting = () => {
      setBuyingMoney(newBuyingMoney);
      setBuyingList(buyingList);
    };
    setting();
  }, []);

  const onChangeCheck = () => {
    setAllCheck((prev) => !prev);
  };

  const onClickPayment = async () => {
    if (userData?.fetchUserLoggedIn.userPoint.amount - buyingMoney < 0) {
      Modal.info({
        content: "잔여 포인트가 부족합니다. 충전페이지로 이동합니다.",
      });
      router.push(`/mypage/charge-point`);
      return;
    }

    try {
      const result = await Promise.all(
        buyingList.map(
          (el) =>
            el &&
            createPointTransactionOfBuyingAndSelling({
              variables: { useritemId: el },
            })
        )
      );
      console.log(result);
      Modal.info({ content: `상품이 구매되었어요!` });
    } catch (errors) {
      Modal.error({ content: errors.message });
    }
  };

  return (
    <>
      <Back>
        <Wrapper>
          <Title> 장바구니</Title>
          <BasketItem>
            {" "}
            {basketItems.map((el) => (
              <BasketItemPage
                el={el}
                key={el._id}
                buyingList={buyingList}
                setBuyingList={setBuyingList}
                setBuyingMoney={setBuyingMoney}
              />
            ))}
          </BasketItem>
          <ChongBox>
            <Row>
              <SubTitle>총 상품금액</SubTitle>
              <RtBox>{buyingMoney}원</RtBox>
            </Row>
            <Row>
              <SubTitle>내 포인트</SubTitle>
              <RtBox style={{ color: "black" }}>
                {userData?.fetchUserLoggedIn.userPoint.amount}원
              </RtBox>
            </Row>
            <Row>
              <SubTitle>구매후잔여포인트</SubTitle>
              <RtBox style={{ color: "black" }}>
                {userData?.fetchUserLoggedIn.userPoint.amount - buyingMoney}원
              </RtBox>
            </Row>
            <PaymentButton onClick={onClickPayment}>
              {buyingMoney}원 주문하기
            </PaymentButton>
          </ChongBox>
        </Wrapper>
      </Back>
    </>
  );
}
