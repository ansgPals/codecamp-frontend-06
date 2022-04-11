import { ChangeEvent } from "react";
import { IMutation } from "../../../../commons/types/generated/types";
//스타일
export interface IButtonColorProps {
  isActive: boolean;
}
//UI
export interface INewBoardUIProps {
  isEdit: boolean;
  data?: any;
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
  onChangeInputs: (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => void;

  onChangeFileUrls: (fileUrl: string, index: number) => void;
  fileUrls: string[];
}

export interface IboardAddress {
  zipcode: string;
  address: string;
  addressDetail: string;
}
export interface IinputsErr {
  writer: String;
  password: String;
  title: String;
  contents: String;
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
  images?: string[];
}

export interface IMyVariables {
  boardId: any;
  password: string;
  updateBoardInput: IUpDateBoardInput;
}
