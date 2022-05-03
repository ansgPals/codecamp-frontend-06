import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";

export const BackGround = styled.div`
  width: 1200px;
  height: 500px;
border: 1px solid #BDBDBD;
margin: 100px;
border-radius: 15px;
`
export const Wrapper = styled.div`
height: 300px;
  width: 1200px;
  border-bottom: 1px solid #e8e7e7;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 50px;

`;
export const ProfileBack = styled.div`
  height: 300px;
  width: 300px;
  background-image: url('/동글.png');
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ProfileImageBox=styled.div`
  height: 200px;
  width: 200px;
  border-radius: 150px;
  background-image: url('/사진없음.png');
  background-size: cover;
`
export const ProfileImage=styled.image`
  object-fit: cover;
`
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
    <BackGround>
      <Wrapper>
<ProfileBack><ProfileImageBox>
  <ProfileImage src={`https://storage.googleapis.com/${ data?.fetchUserLoggedIn.picture}`} />
  </ProfileImageBox></ProfileBack>

      </Wrapper>
      <PaymentButton >        내포인트 :
        {data?.fetchUserLoggedIn.userPoint.amount
          ? data?.fetchUserLoggedIn.userPoint.amount
          : 0}
        원결제하기</PaymentButton>
      </BackGround>
    </>
  );
}
