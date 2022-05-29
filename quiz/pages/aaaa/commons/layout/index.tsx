import LayOutHeader from "./header/inde";
import LayOutNavigation from "./navigation/inde";
import styled from "@emotion/styled";
import { ReactNode } from "react";

const Body = styled.div`
  min-height: 500px;
  width: calc(100% - 300px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
`;

const BodyWapper = styled.div`
  display: flex;
`;

interface ILayoutProps {
  children: ReactNode;
}
export default function LayOut(props: ILayoutProps) {
  return (
    <>
      <LayOutHeader />
      <BodyWapper>
        <LayOutNavigation />
        <Body>{props.children}</Body>
      </BodyWapper>
    </>
  );
}
