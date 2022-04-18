import LayOutBanner from "./banner/index";
import LayOutFooter from "./footer/index";
import LayOutHeader from "./header";
import LayOutNavigation from "./navigation/index";
import styled from "@emotion/styled";
import { ReactNode } from "react";
import { useRouter } from "next/router";

const Body = styled.div`
  /* height; */
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const LENDING_PAGE = ["/"];
const HIDDEN_PAGE = ["/", "/login/SignUp", "/login"];

interface ILayoutProps {
  children: ReactNode;
}
export default function LayOut(props: ILayoutProps) {
  const router = useRouter();
  const isHidden = HIDDEN_PAGE.includes(router.asPath);
  const isLending = LENDING_PAGE.includes(router.asPath);
  return (
    <>{!isLending &&
     ( <LayOutHeader />)}
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
