import styled from "@emotion/styled";
import BoardList from "../../../src/components/units/board/list/boardList.container";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export default function BoardListPage() {
  return (
    <Wrapper>
      <BoardList />
    </Wrapper>
  );
}
