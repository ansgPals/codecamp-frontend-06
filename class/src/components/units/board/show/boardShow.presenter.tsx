import * as MyStyle from "./boardShow.styles";
import { IBoardRoadUIProps } from "./boardShow.types";
import PageMoveButton from "../buttons/button.pagemove";

export default function BoardRoadUI(props: IBoardRoadUIProps) {
  return (
    <>
      <MyStyle.Back>
        <MyStyle.BackGround>
          <PageMoveButton />
          <MyStyle.TitleBox>{props.data?.fetchBoard.title}</MyStyle.TitleBox>
          <MyStyle.DetailBox>
            {props.data?.fetchBoard.contents}
          </MyStyle.DetailBox>
        </MyStyle.BackGround>
      </MyStyle.Back>
    </>
  );
}
