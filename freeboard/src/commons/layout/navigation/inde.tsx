import styled from "@emotion/styled";
import { useRouter } from "next/router";

const Wrapper = styled.div`
  height: 64px;
  width: 1920px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #f1a3b6;
`;
const Navi1 = styled.div`
  font-size: 25px;
  margin-left: 70px;
  margin-right: 50px;
  color: white;
  cursor: pointer;
  width: 200px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  border-radius: 15px;
  border: 1px solid #f7f7f7;
  background-color: #fc8099;
  font-weight: 600;
`;

export default function LayOutNavigation() {
  const router = useRouter();
  const GOGO = (event) => {
    router.push(`/${event.target.id}`);
  };
  return (
    <Wrapper>
      <Navi1 id={"boards"} onClick={GOGO}>
        게시물 목록
      </Navi1>
      <Navi1 id={"boards/new"} onClick={GOGO}>
        글쓰기
      </Navi1>
    </Wrapper>
  );
}
