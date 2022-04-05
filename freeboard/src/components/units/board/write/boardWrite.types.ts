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
  onChangePass: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeText: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  EditOk: () => void;
  PutOk: () => void;
  isActive: boolean;
  onChangeYoutube: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickPostNumber: () => void;
  onModalOpen: () => void;
  modalOpen: boolean;
  onOkModalOpen: () => void;
  okModalOpen: boolean;
  clickPostNumber: (data: any) => void;
  onChangeAddressDetail: (event: ChangeEvent<HTMLInputElement>) => void;
  boardAddress: IboardAddress;
  inputsErr: IinputsErr;
  Exit: () => void;
  noEditModal: boolean;
  EditModalOpen: () => void;
  pass: string;
}

export interface IboardAddress {
  zipcode: string;
  address: string;
  addressDetail: string;
}
export interface IinputsErr {
  nameErr: string;
  passErr: string;
  titleErr: string;
  textErr: string;
}
//컨테이너
export interface INewBoardConProps {
  isEdit: boolean;
  data: any;
}
export interface IUpDateBoardInput {
  title?: string;
  contents?: string;
  youtubeUrl?: string;
  boardAddress?: { addressDetail?: string; address?: string; zipcode?: string };
}

export interface IMyVariables {
  boardId: any;
  password: string;
  updateBoardInput: IUpDateBoardInput;
}
