import { MouseEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

//UI
export interface IBestBoardUIProps {
  data?: Pick<IQuery, "fetchBoardsOfTheBest">;
  onClickBest: (event: any) => void;
  onClickJoahyo: (event: any) => void;
  catFect: string;
}
//컨테이너
export interface IBestBoard {}
