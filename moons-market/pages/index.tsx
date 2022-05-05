import styled from "@emotion/styled";
import { useRouter } from "next/router";

const Main = styled.div`
  height: 90vh;
  width: 100vw;
  background-image: url("/랜딩.webp");
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: fit-content;
`;
const Title = styled.div`
  font-size: 80px;
  color: white;

  font-weight: bold;
  text-align: center;
  font-style: italic;
`;
const SubTitle = styled.div`
  font-size: 30px;
  color: white;
  text-align: center;
  padding-top: 30px;
`;
const BodyBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
`;
const Start = styled.button`
  height: 100px;
  width: 400px;
  border-radius: 60px;
  background-color: #ffffff;
  font-size: 50px;
  font-weight: 800;
  color: #00c614;
  border: 3px dotted;
  cursor: pointer;
  :hover {
    background-color: #f5ff6a;
  }
`;
export default function Home() {
  const router = useRouter();

  const onClickInit = () => {
    router.push("/usedItem");
  };

  return (
    <Main>
      <TitleBox>
        <Title>MOONSMARKET</Title>
        <SubTitle>우리의 바람을 담은 중고물품거래의 새로운바람!</SubTitle>
      </TitleBox>
      <BodyBox>
        <Start onClick={onClickInit}> 시작하기 </Start>
      </BodyBox>
    </Main>
  );
}
