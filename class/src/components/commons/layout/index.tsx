import LayOutBanner from "./banner/inde";
import LayOutFooter from "./footer/inde";
import LayOutHeader from "./header/inde";
import LayOutNavigation from "./navigation/inde";
import styled from "@emotion/styled";
import { ReactNode } from "react";
import { useRouter } from "next/router";

const Body = styled.div`
  min-height: 500px;
`;

const LayoutSideBar = styled.div`
  width: 100px;
  min-height: 500px;
  background-color: orange;
`;

const BodyWapper = styled.div`
  display: flex;
`;
const HIDDEN_HEADERS = ["/12-05-modal-refactoring"];

interface ILayoutProps {
  children: ReactNode;
}
export default function LayOut(props: ILayoutProps) {
  const router = useRouter();
  console.log(router);

  const isHIDDEN = HIDDEN_HEADERS.includes(router.asPath);
  // 히든배열안에 라우터에즈패치와 같은값이있나봐라. 결과값은 불린값임 ㅎㅎ

  return (
    <>
      {!isHIDDEN && <LayOutHeader />}
      {/* 해당주소가있으면 트루를 반환함. 그걸 느낌표붙혀서 펄스로 바꾼후 진행~ */}
      <LayOutBanner />
      <LayOutNavigation />
      <BodyWapper>
        <LayoutSideBar>여기는 사이드바입니다.!</LayoutSideBar>
        <Body>{props.children}</Body>
      </BodyWapper>
      <LayOutFooter />
    </>
  );
}
