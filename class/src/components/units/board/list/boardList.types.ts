import { ChangeEvent, MouseEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

//UI
export interface IBoardListUIProps {
  onClickGoBoard: (id: string, index: number) => () => void;
  numberOfPageData: number;
  data?: Pick<IQuery, "fetchBoards">;
  fetchBoardsCount?: Pick<IQuery, "fetchBoardsCount">;

  onchangeSearch: (event: ChangeEvent<HTMLInputElement>) => void;
  inputRef: any;
  onClickSerch: () => void;
  refetch: any;
  dataCount: number;
  setPickPage: any;
  startPage: number;
  setStartPage: any;
  pickPage: number;
}
//컨테이너
export interface IBoardList {
  onClickGoBoard: () => void;
}
