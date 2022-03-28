import BoardRoad from "../../../src/components/units/board/show/boardShow.container";
import { BoardBox } from "../../../src/components/units/board/show/boardShow.styles";
import BoardCommentPage from "./comment";

export default function BoardRoadPage() {
  return (
    <BoardBox>
      <BoardRoad />
      <BoardCommentPage />
    </BoardBox>
  );
}
