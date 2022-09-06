import { Dispatch, SetStateAction } from "react";

export interface ISelectStyleProps {
  isShow: boolean;
}

export interface ISelectProps {
  arr: Array<any>;
  title: string;
  setState: Dispatch<SetStateAction<any>>;
  borderColor?: string;
  width?: string;
  height?: string;
  color?: string;
  disabled?: boolean;
  backgroundColor?: string;
  margin?: string;
  padding?: string;
  opacity?: string;
  value?: string;
  reset?: boolean;
  font?: string;
  borderColorNone?: string;
}

export interface IQnADetailSelectProps {
  arr: Array<any>;
  title: string;
  userId: string;
  lectureId: string;
  subCategory: string;
  setState?: Dispatch<SetStateAction<any>>;
  width?: string;
  height?: string;
  margin?: string;
  padding?: string;
}
