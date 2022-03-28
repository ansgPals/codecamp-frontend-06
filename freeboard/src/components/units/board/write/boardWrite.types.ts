import { ChangeEvent } from "react";
import { IMutation } from "../../../../commons/types/generated/types";
//스타일
export interface IButtonColorProps {
  isActive: boolean;
}
//UI
export interface INewBoardUIProps {
  isEdit: boolean;
  onChangeName: (event: ChangeEvent<HTMLInputElement>) => void;
  data?: any;
  nameErr: string;
  onChangePass: (event: ChangeEvent<HTMLInputElement>) => void;
  passErr: string;
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  titleErr: string;
  onChangeText: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  textErr: string;
  onChangeAddress: (event: ChangeEvent<HTMLInputElement>) => void;
  addressErr: string;
  EditOk: () => void;
  PutOk: () => void;
  isActive: boolean;
}
//컨테이너
export interface INewBoardConProps {
  isEdit: boolean;
  data: any;
}
export interface IUpDateBoardInput {
  title?: string;
  contents?: string;
}

export interface IMyVariables {
  boardId: any;
  password: string;
  updateBoardInput: IUpDateBoardInput;
}
