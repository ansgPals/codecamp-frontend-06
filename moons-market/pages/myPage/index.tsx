import { gql, useMutation, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { Modal } from "antd";
import Head from "next/head";

export const Wrapper = styled.div`
  max-width: 1200px;
  min-width: 800px;
  width: 60vw;
  border-bottom: 1px solid #e8e7e7;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 20px;
  padding-bottom: 20px;
  font-size: 50px;
  margin-top: 100px;
`;
export const PaymentButton = styled.button``;
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
export default function MyPage() {
  const { data, refetch } = useQuery(FETCH_USER_LOGGED_IN, { variables: {} });
  const [createPointTransactionOfLoading] = useMutation(
    CREATE_POINT_TRANSACTION_OF_LOADING
  );
  // const router=useRouter
  const onClickPayment = async () => {
    const IMP = window.IMP; // 생략 가능
    IMP.init("imp49910675"); // 가맹점 식별코드
    IMP.request_pay(
      {
        pg: "html5_inicis",
        pay_method: "card", // 가상계좌하면 vbank
        name: "노르웨이 회전 의자",
        amount: 100,
        buyer_email: "gildong@gmail.com",
        buyer_name: "홍길동",
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
        m_redirect_url: `http://localhost:3000/myPage/basket`,
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

  return (
    <>
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
        내포인트 :
        {data?.fetchUserLoggedIn.userPoint.amount
          ? data?.fetchUserLoggedIn.userPoint.amount
          : 0}
        원
      </Wrapper>
      <PaymentButton onClick={onClickPayment}>결제하기</PaymentButton>
    </>
  );
}
