import { InputMaybe, Scalars } from "../../../commons/types/generated/types";

export interface IZzimItem {
  _id: string;
  name: string;
  remarks: string;
  price: number;
  images?: InputMaybe<Array<Scalars["String"]>>;
  seller: {
    name: string;
  };
}
export interface IZzimItemProps {
  el: IZzimItem;
}
