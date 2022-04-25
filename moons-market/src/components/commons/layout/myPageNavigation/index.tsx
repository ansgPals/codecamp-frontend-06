import styled from "@emotion/styled";
import { useRouter } from "next/router";
import Toolbar from "@mui/material/Toolbar";
const Wrapper = styled.div`
  width: 100vw;
  height: 80px;
  display: flex;
  background-color: #dcffdf;
  position: fixed;
  border-bottom: 1px #dcffdf solid;
`;
const Navi1 = styled.div`
  font-size: 35px;
  margin-left: 70px;
  margin-right: 50px;
  background-color: white;
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
const Navi2 = styled.div`
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

export default function LayOutMyPageNavigation() {
  const router = useRouter();
  const GOGO = (event: any) => {
    router.push(`/${event.target.id}`);
  };
  return (
    <Wrapper>
      <Toolbar>
        <Navi1 id={"myPage"} onClick={GOGO}>
          마이페이지
        </Navi1>
        <Navi2 id={"myPage/basket"} onClick={GOGO}>
          장바구니
        </Navi2>
      </Toolbar>
    </Wrapper>
  );
}
