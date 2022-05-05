import { IQuery } from "../../../commons/types/generated/types";

export interface IProductDeatilUIProps {
  OnClickBasket: (el: any) => () => void;
  OnClickList: () => void;
  OnClickEdit: () => void;
  BasketCancle: () => void;
  BasketOk: () => void;
  OnClickDelete: () => void;
  DeleteCancle: () => void;
  DeletetOk: () => void;
  deleteIsOpen: boolean;
  basketModalIsOpen: boolean;
  data: Pick<IQuery, "fetchUseditem">;
  onClickPick: () => void;
  userInfo: {
    _id: string;
    name: string;
  };
  OnClickPayment: () => void;
  pickIdArr: string[];
}
