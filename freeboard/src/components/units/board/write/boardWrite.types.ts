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
  EditOk: () => void;
  PutOk: () => void;
  isActive: boolean;
  onChangeYoutube: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickPostNumber: () => void;
  onModalOpen: () => void;
  modalOpen: boolean;
  clickPostNumber: (data: any) => void;
  onChangeAddressDetail: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeAddressCode: (event: ChangeEvent<HTMLInputElement>) => void;
  addressCode: string;
  address: string;
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
