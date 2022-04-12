import LayOutBanner from "./banner/inde";
import LayOutFooter from "./footer/inde";
import LayOutHeader from "./header/inde";
import LayOutNavigation from "./navigation/inde";
import styled from "@emotion/styled";
import { ReactNode } from "react";
import { useRouter } from "next/router";

const Body = styled.div`
  height: fit-content;
  width: 1920px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HIDDEN_PAGE = ["/", "/login/SignUp", "/login"];

interface ILayoutProps {
  children: ReactNode;
}
export default function LayOut(props: ILayoutProps) {
  const router = useRouter();
  const isHidden = HIDDEN_PAGE.includes(router.asPath);
  return (
    <>
      <LayOutHeader />
      {!isHidden && (
        <div>
          <LayOutBanner />
          <LayOutNavigation />
        </div>
      )}{" "}
      <Body>{props.children}</Body>
      <LayOutFooter />
    </>
  );
}
