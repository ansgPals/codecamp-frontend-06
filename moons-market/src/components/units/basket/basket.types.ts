import { InputMaybe, Scalars } from "../../../commons/types/generated/types";

export interface IBasketItem {
  _id: string;
  name: string;
  remarks: string;
  price: number;
  images?: InputMaybe<Array<Scalars["String"]>>;
  seller: {
    name: string;
  };
}
export interface IBasketItemProps {
  el: IBasketItem;
}
