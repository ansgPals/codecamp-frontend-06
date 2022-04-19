import styled from "@emotion/styled";
import { useRouter } from "next/router";

const Wrapper = styled.div`
  height: 60px;
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border-bottom: 3px #52c83a solid;
  border-top: 3px #52c83a solid;
`;
const Navi1 = styled.div`
  font-size: 25px;
  margin-left: 70px;
  margin-right: 50px;
  color: #0aaf25;
  cursor: pointer;
  width: 200px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  font-weight: bold;
  :hover{
    color : #49d260;
  }
`;

export default function LayOutNavigation() {
  const router = useRouter();
  const GOGO = (event: any) => {
    router.push(`/${event.target.id}`);
  };
  return (
    <Wrapper>
      <Navi1 id={"boards"} onClick={GOGO}>
        게시물 목록
      </Navi1>
      <Navi1 id={"usedItem"} onClick={GOGO}>
        마켓
      </Navi1>
    </Wrapper>
  );
}
