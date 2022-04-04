import styled from "@emotion/styled";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

const Main = styled.div`
  height: 1000px;
  width: 1920px;
  background-image: url("/배경.jpg");
  background-size: contain;
  display: flex;
  flex-direction: column;
`;
const Title = styled.div`
  font-size: 70px;

  color: #fddee8;
  height: 300px;
  width: 1920px;
  font-weight: bold;
  text-align: center;
  line-height: 300px;
  padding-right: 250px;
`;
const BodyBox = styled.div`
  margin-left: 1100px;
  height: 500px;
  width: 500px;
  margin-top: 130px;
  margin-right: 100px;
  display: flex;

  flex-direction: column;

  justify-content: center;
  align-items: center;
`;
const Start = styled.button`
  height: 100px;
  width: 400px;
  border-radius: 60px;
  background-color: #f39a51;
  font-size: 50px;
  font-weight: 800;
  color: white;
  border: 3px dotted;
  cursor: pointer;
  :hover {
    color: #f5ff6a;
  }
`;
export default function Home() {
  const router = useRouter();

  const onClickInit = () => {
    router.push("/boards");
  };

  return (
    <Main>
      <Title>GOANGSSS</Title>
      <BodyBox>
        <Start onClick={onClickInit}> 고앵쓰 입장 </Start>
      </BodyBox>
    </Main>
  );
}
