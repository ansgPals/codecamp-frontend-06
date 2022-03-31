import LayOutBanner from "./banner/inde";
import LayOutFooter from "./footer/inde";
import LayOutHeader from "./header/inde";
import LayOutNavigation from "./navigation/inde";
import styled from "@emotion/styled";
import { ReactNode } from "react";

const Body = styled.div`
  height: fit-content;
  width: 1920px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

interface ILayoutProps {
  children: ReactNode;
}
export default function LayOut(props: ILayoutProps) {
  return (
    <>
      <LayOutHeader />
      <LayOutBanner />
      <LayOutNavigation />
      <Body>{props.children}</Body>
      <LayOutFooter />
    </>
  );
}
