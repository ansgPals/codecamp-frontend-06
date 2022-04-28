import { gql, useMutation, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { Modal } from "antd";
import Head from "next/head";
import { useState } from "react";
export const Back = styled.div`
  margin: 100px 100px;
  margin-top: 200px;
  border: 12px solid greenyellow;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
`;

export const Wrapper = styled.div`
  max-width: 1200px;
  min-width: 800px;
  min-height: 800px;
  width: 60vw;
  border-bottom: 1px solid #e8e7e7;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;
  padding-bottom: 20px;
  font-size: 50px;
`;
export const PointBox = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 800px;

  padding: 50px;
`;
export const Point = styled.div`
  width: 200px;
  height: 80px;
  margin-right: 10px;
  margin-bottom: 10px;
  text-align: center;
  border: 2px solid orange;
  border-radius: 10px;
  cursor: pointer;
`;
export const PickPoint = styled.div`
  width: 200px;
  height: 80px;
  margin-right: 10px;
  margin-bottom: 10px;
  text-align: center;
  border: 2px solid orange;
  border-radius: 10px;
  cursor: pointer;
  background-color: #ffe0a7;
`;
export const PaymentButton = styled.button`
  width: 400px;
  height: 180px;
  margin-bottom: 200px;
  font-size: 50px;
  border-radius: 20px;
  border: 13px #8ee599 solid;
  background-color: white;
  cursor: pointer;
  :hover {
    background-color: #f7ffe0;
  }
`;
const FETCH_USER_LOGGED_IN = gql`
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
const CREATE_POINT_TRANSACTION_OF_LOADING = gql`
  mutation createPointTransactionOfLoading($impUid: ID!) {
    createPointTransactionOfLoading(impUid: $impUid) {
      amount
    }
  }
`;
declare const window: typeof globalThis & {
  IMP: any;
};
export default function ChargePointPage() {
  const [amount, setAmount] = useState(0);
  const { data, refetch } = useQuery(FETCH_USER_LOGGED_IN, { variables: {} });
  const [createPointTransactionOfLoading] = useMutation(
    CREATE_POINT_TRANSACTION_OF_LOADING
  );
  const pointArr = [5, 10, 15, 100, 200, 300];
  // const router=useRouter
  const onClickPayment = async () => {
    const IMP = window.IMP; // 생략 가능
    IMP.init("imp49910675"); // 가맹점 식별코드
    IMP.request_pay(
      {
        pg: "html5_inicis",
        pay_method: "card", // 가상계좌하면 vbank
        name: "문스마켓충천하기",
        amount: Number(amount),
        buyer_email: "gildong@gmail.com",
        buyer_name: "홍길동",
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
        m_redirect_url: `http://localhost:3000/myPage/charge-point`,
      },
      async (rsp: any) => {
        // callback
        if (rsp.success) {
          const impUid = rsp.imp_uid;
          const result = await createPointTransactionOfLoading({
            variables: { impUid },
          });
          Modal.info({ content: "결제가 성공되었어요!" });
          console.log(result);
          refetch({});
        } else {
          alert("결제실패");
        }
      }
    );
  };
  const onClickPoint = (el) => () => {
    setAmount(el);
  };

  return (
    <Back>
      <Head>
        {/* <!-- jQuery --> */}
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        {/* <!-- iamport.payment.js --> */}
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>

      <Wrapper>
        <PointBox>
          {pointArr.map((el, index) =>
            amount === el ? (
              <PickPoint key={index} onClick={onClickPoint(el)}>
                {el}MP
              </PickPoint>
            ) : (
              <Point key={index} onClick={onClickPoint(el)}>
                {el}MP
              </Point>
            )
          )}
        </PointBox>
        내포인트 :
        {data?.fetchUserLoggedIn.userPoint.amount
          ? data?.fetchUserLoggedIn.userPoint.amount
          : 0}
        MP + 충전포인트 : {amount}MP{""} ={" "}
        {data?.fetchUserLoggedIn.userPoint.amount + amount}MP
      </Wrapper>
      <PaymentButton onClick={onClickPayment}>
        {amount}원 {"  "}결제하기
      </PaymentButton>
    </Back>
  );
}
