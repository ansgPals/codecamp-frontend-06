import { IQuery } from "../../../../commons/types/generated/types";

//UI
export interface IBoardRoadUIProps {
  data?: any;
}
//컨테이너
export interface INewBoardConProps {
  isEdit: boolean;
  //     data : Pick<IMutation, "createBoard">
  data: Pick<IQuery, "fetchBoard">;
}
