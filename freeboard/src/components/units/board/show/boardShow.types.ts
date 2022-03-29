import { IQuery } from "../../../../commons/types/generated/types";

//UI
export interface IBoardRoadUIProps {
  data?: any;
  OnClickList: () => void;
  OnClickEdit: () => void;
  OnClickDelete: () => void;
  LikeButton: () => void;
  DisLikeButton: () => void;
}
//컨테이너
export interface INewBoardConProps {
  isEdit: boolean;
  //     data : Pick<IMutation, "createBoard">
  data: Pick<IQuery, "fetchBoard">;
}
