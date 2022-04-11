import { ChangeEvent, MouseEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

//UI
export interface IBoardListUIProps {
  onClickGoBoard: (event: MouseEvent<HTMLButtonElement>) => void;
  GoWriteBoard: () => void;
  data?: Pick<IQuery, "fetchBoards">;
  fetchBoardsCount?: Pick<IQuery, "fetchBoardsCount">;
  onClickPageNumber: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickNextPage: () => void;
  onClickPrevPage: () => void;
  startPage: number;
  lastPage: number;
  pickPage: number;
  keyWord: string;
  onchangeSearch: (event: ChangeEvent<HTMLInputElement>) => void;
  inputRef: any;
}
//컨테이너
export interface IBoardList {
  onClickGoBoard: () => void;
}
