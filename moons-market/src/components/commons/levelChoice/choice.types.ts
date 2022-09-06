import { Dispatch, SetStateAction } from "react";

export interface IChoiceStylesProps {
  isChoice?: boolean;
}

export interface IChoiceProps {
  title: string;
  checkArr: Array<boolean>;
  index: number;
  setCheckArr: Dispatch<SetStateAction<any>>;
}
