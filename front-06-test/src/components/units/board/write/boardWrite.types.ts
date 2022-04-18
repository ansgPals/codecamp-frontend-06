import { ChangeEvent } from "react";

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
  onModalOpen: () => void;
  modalOpen: boolean;
  onOkModalOpen: () => void;
  okModalOpen: boolean;
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
  onClickExit: () => void;
}

export interface IinputsErr {
  writer: String;
  password: String;
  title: String;
  contents: String;
}
//컨테이너
export interface INewBoardConProps {
  data?: any;
  isEdit: boolean;
  // data: any;
}
export interface IUpDateBoardInput {
  title?: string;
  contents?: string;
  images?: string[];
}

export interface IMyVariables {
  boardId: any;
  password: string;
  updateBoardInput: IUpDateBoardInput;
}
