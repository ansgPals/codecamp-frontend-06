import { InputMaybe, Scalars } from "../../../commons/types/generated/types";

export interface ITodayItem {
  _id: string;
  name: string;
  remarks: string;
  price: number;
  images?: InputMaybe<Array<Scalars["String"]>>;
  seller: {
    name: string;
  };
}
export interface ITodayItemProps {
  el: ITodayItem;
}
