import { ChangeEvent, MouseEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

//UI
export interface IBoardCommentUIProps {
  data?: Pick<IQuery, "fetchBoardComments">;
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassWord: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  ClickOKButton: () => void;
  DeleteComment: () => void;
  editCommentIcon: (event: MouseEvent<HTMLButtonElement>) => void;
  isEdit: boolean;
  UpDateComment: () => void;
  onChangeEditContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeEditPassWord: (event: ChangeEvent<HTMLInputElement>) => void;
  commentId: string;
  writer: string;
  pass: string;
  contents: string;
  StarChange: (value: number) => void;
  value: number;
  editStarChange: (value: number) => void;
  editValue: number;
  CloseEdit: () => void;
  editContents: string;
  DeletePassWord: (event: MouseEvent<HTMLButtonElement>) => void;
  deleteOpen: boolean;
  onChangeDeletePass: (event: ChangeEvent<HTMLInputElement>) => void;
  DeleteModal : ()=>
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
