import styled from "@emotion/styled";
import { useRouter } from "next/router";
import Toolbar from "@mui/material/Toolbar";
const Wrapper = styled.div`
  width: 100vw;
  height: 70px;
  display: flex;
  background-color: #dcffdf;
  position: fixed;
  border-bottom: 1px #dcffdf solid;
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
  :hover {
    color: #49d260;
  }
`;

export default function LayOutNavigation() {
  const router = useRouter();
  const GOGO = (event: any) => {
    router.push(`/${event.target.id}`);
  };
  return (
    <Wrapper>
      <Toolbar>
        <Navi1 id={"usedItem/"} onClick={GOGO}>
          마켓
        </Navi1>
        <Navi1 id={"usedItem/newProduct"} onClick={GOGO}>
          판매등록하기
        </Navi1>
      </Toolbar>
    </Wrapper>
  );
}
