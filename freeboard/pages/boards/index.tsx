import BestBoard from "../../src/components/units/board/Best/BestBoard.container";
import BoardList from "../../src/components/units/board/list/boardList.container";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export default function BoardListPage() {
  return (
    <Wrapper>
      <BestBoard />
      <BoardList />
    </Wrapper>
  );
}
