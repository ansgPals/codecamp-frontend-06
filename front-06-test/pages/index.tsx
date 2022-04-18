import styled from "@emotion/styled";
import BoardList from "../src/components/units/board/list/boardList.container";

const Wrapper = styled.div`
  width: 764px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function Home() {
  return (
    <Wrapper>
      <BoardList />
    </Wrapper>
  );
}
