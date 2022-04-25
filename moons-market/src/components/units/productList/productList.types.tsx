import { ChangeEvent, MouseEvent } from "react";
import { IQuery } from "../../../commons/types/generated/types";

export interface IProductListUI {
  CommentScrolling: () => void;
  onClickGoProduct: (el) => (event: MouseEvent<HTMLDivElement>) => void;
  data: Pick<IQuery, "fetchUseditems">;
  keyWord: string;
  onchangeSearch: (event: ChangeEvent<HTMLInputElement>) => void;
}
