import LayOutBanner from "./banner/inde";
import LayOutNavigation from "./navigation/inde";
import styled from "@emotion/styled";
import { ReactNode } from "react";
import { useRouter } from "next/router";

const Body = styled.div`
  width: 764px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
`;

const LayOutBox = styled.div`
  display: flex;
  flex-direction: row;
`;
const HIDDEN_PAGE = [`/boards/new`, `/boards/[boardId]/edit`];

interface ILayoutProps {
  children: ReactNode;
}
export default function LayOut(props: ILayoutProps) {
  const router = useRouter();
  const isHidden = HIDDEN_PAGE.includes(router.route);
  console.log(router + "엘렐렐레");
  return (
    <>
      <LayOutBox>
        <LayOutNavigation />
        <Box>
          {!isHidden && <LayOutBanner />}
          <Body>{props.children}</Body>
        </Box>
      </LayOutBox>
    </>
  );
}
