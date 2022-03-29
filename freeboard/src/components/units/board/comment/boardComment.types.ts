import { ChangeEvent, MouseEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

//UI
export interface IBoardCommentUIProps {
  data?: Pick<IQuery, "fetchBoardComments">;
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassWord: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  ClickOKButton: () => void;
  // DeleteComment: (event: MouseEvent<HTMLButtonElement>) => void;
  editCommentIcon: (event: MouseEvent<HTMLButtonElement>) => void;
  isEdit: boolean;
  UpDateComment: () => void;
  onChangeEditContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeEditPassWord: (event: ChangeEvent<HTMLInputElement>) => void;
  commentId: string;
  writer: string;
  pass: string;
  contents: string;
  handleChange: (value: number) => void;
  value: number;
  editHandleChange: (value: number) => void;
  editValue: number;
  CloseEdit: () => void;
  editContents: string;
}

export interface IisEditProps {
  isEdit: boolean;
}

export interface IMyUpDate {
  contents?: string;
  rating?: number;
}

export interface IMyVariables {
  updateBoardCommentInput: IMyUpDate;
  password: string;
  boardCommentId: string;
}
