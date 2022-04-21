import LayOutBanner from "./banner";
import LayOutFooter from "./footer";
import LayOutHeader from "./header";
import LayOutNavigation from "./navigation";
import LayOutSideBar from "./sideBar";
import { ReactNode } from "react";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  background-color: #d6e98b;
  display: flex;
  flex-direction: column;
  width: fit-content;
  height: fit-content;
`;
const BodyWrapper = styled.div`
  display: flex;
`;
const Body = styled.div`
  background-color: #f8f5ff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 800px;
  height: 1000px;
`;

export default function LayOut(props) {
  return (
    <>
      <Wrapper>
        <LayOutHeader />
        <LayOutBanner />
        <LayOutNavigation />
        <BodyWrapper>
          <LayOutSideBar />
          <Body>{props.children}</Body>
        </BodyWrapper>
        <LayOutFooter />
      </Wrapper>
    </>
  );
}
