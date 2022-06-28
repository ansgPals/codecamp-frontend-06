import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

export const BackGround = styled.div`
  width: 1200px;

  border: 10px solid #ffc772;

  border-radius: 15px;
  margin-top: 200px;
  margin-bottom: 100px;
`;
export const Wrapper = styled.div`
  padding: 100px 0px 0px 0px;
  height: 800px;

  width: 1200px;
  border-bottom: 1px solid #e8e7e7;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 50px;
`;
export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;
export const ProfileBack = styled.div`
  margin-left: 200px;
  height: 300px;
  width: 300px;
  background-image: url("/circle.png");
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const ProfileImageBox = styled.div`
  height: 200px;
  width: 200px;
  border-radius: 150px;
  background-image: url("/noimg.png");
  background-size: cover;
`;
export const ProfileImage = styled.img`
  height: 200px;
  width: 200px;
  border-radius: 150px;
  object-fit: cover;
`;
export const RightBox = styled.div`
  margin-top: 100px;
  width: 600px;
  height: 100px;
  margin-left: 100px;
`;

export const Name = styled.div`
  font-size: 40px;
`;

export const Email = styled.div`
  font-size: 30px;
  color: #bdbdbd;
`;

export const Point = styled.div`
  font-size: 30px;
  color: #000000;
`;
export const GoCharge = styled.button`
  background-color: white;
  font-size: 25px;
  margin-left: 20px;
  cursor: pointer;
  border: 5px #ffc392 solid;
  border-radius: 15px;
`;
export const EditButton = styled.button`
  background-color: #60d639;
  width: 500px;
  height: 100px;
  font-size: 30px;
  margin-top: 150px;
  border-radius: 10px;
  font-weight: 500;
  color: white;
  border: none;
  cursor: pointer;
`;

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
  const { data } = useQuery(FETCH_USER_LOGGED_IN, { variables: {} });
  const router = useRouter();
  const onClickGoCharge = () => {
    router.push("/myPage/charge-point");
  };
  const onClickEditButton = () => {
    router.push(`/myPage/profile-edit`);
  };
  return (
    <>
      <BackGround>
        <Wrapper>
          <Row>
            <ProfileBack>
              <ProfileImageBox>
                <ProfileImage
                  src={`https://storage.googleapis.com/${data?.fetchUserLoggedIn.picture}`}
                />
              </ProfileImageBox>
            </ProfileBack>
            <RightBox>
              <Name>{data?.fetchUserLoggedIn.name} 님</Name>
              <Email>{data?.fetchUserLoggedIn.email}</Email>
              <Point>
                POINT :{" "}
                {data?.fetchUserLoggedIn.userPoint.amount
                  ? data?.fetchUserLoggedIn.userPoint.amount
                  : 0}{" "}
                MP<GoCharge onClick={onClickGoCharge}>충전</GoCharge>
              </Point>
            </RightBox>
          </Row>
          <EditButton onClick={onClickEditButton}>내정보 수정하기</EditButton>
        </Wrapper>
      </BackGround>
    </>
  );
}
