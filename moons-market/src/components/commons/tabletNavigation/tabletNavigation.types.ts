import { IQuery } from "../../../commons/types/generated/types";

export interface INavigationUIProps {
  currentTitle: string;
  currentMenu: {
    title: string;
    name: string;
    page: string;
  }[];
  isSelected: string;
  onClickMenuTitle: () => void;
  onClickMenu: (el: { name: string; page: string }) => () => void;
  onClickNoShowTablet: () => void;
  onClickLogout: () => void;
  loginUserData: Pick<IQuery, "fetchLoginUser">;
}

export interface INavigationStylesProps {
  isSelected?: boolean;
  status: boolean;
}
