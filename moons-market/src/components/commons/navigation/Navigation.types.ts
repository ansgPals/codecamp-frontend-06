import { Dispatch, SetStateAction } from "react";
import { IQuery } from "../../../commons/types/generated/types";

export interface INavigationUIProps {
  currentTitle: string;
  currentMenu: {
    title: string;
    name: string;
    page: string;
  }[];
  isSelected: string;
  limitModal: boolean;
  setLimitModal: Dispatch<SetStateAction<boolean>>;
  onClickMenuTitle: () => void;
  onClickMenu: (el: { name: string; page: string }) => () => void;
  loginUserData?: Pick<IQuery, "fetchLoginUser">;
}

export interface INavigationStylesProps {
  isSelected?: boolean;
  status?: boolean;
}
