import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";


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
      picture
    }
  }
`;


export default function MyPage() {
  const { data} = useQuery(FETCH_USER_LOGGED_IN, { variables: {} });


  return (
    <>
      <Wrapper>
        내포인트 :
        {data?.fetchUserLoggedIn.userPoint.amount
          ? data?.fetchUserLoggedIn.userPoint.amount
          : 0}
        원
      </Wrapper>
      <PaymentButton >결제하기</PaymentButton>
    </>
  );
}
