import LayOutFooter from "./footer/index";
import LayOutHeader from "./header";
import LayOutNavigation from "./navigation/index";
import styled from "@emotion/styled";
import { ReactNode } from "react";
import { useRouter } from "next/router";
import LayOutMyPageNavigation from "./myPageNavigation";
import TodayProductPage from "./todayProduct";
import { useRecoilState } from "recoil";
import { todayProductState } from "../../../commons/store";

const Body = styled.div`
  width: 99vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
`;
const LENDING_PAGE = ["/"];
const MY_PAGE = [
  "/myPage",
  "/myPage/basket",
  "/myPage/zzim",
  "/myPage/charge-point",
];

interface ILayoutProps {
  children: ReactNode;
}
export default function LayOut(props: ILayoutProps) {
  const [todayProduct] = useRecoilState(todayProductState);

  const router = useRouter();
  const isMyPage = MY_PAGE.includes(router.asPath);
  const isLending = LENDING_PAGE.includes(router.asPath);
  return (
    <>
      {!isLending && (
        <div>
          <LayOutHeader />
          {isMyPage ? <LayOutMyPageNavigation /> : <LayOutNavigation />}
        </div>
      )}
      <Row>
        {!isLending && todayProduct[0] && <TodayProductPage />}
        <Body>{props.children}</Body>
      </Row>
      <LayOutFooter />
    </>
  );
}
