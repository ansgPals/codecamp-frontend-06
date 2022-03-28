import { MouseEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

//UI
export interface IBoardListUIProps {
  onClickGoBoard: (event: MouseEvent<HTMLButtonElement>) => void;
  GoWriteBoard: () => void;
  data?: Pick<IQuery, "fetchBoards">;
}
//컨테이너
export interface IBoardList {
  onClickGoBoard: () => void;
}
