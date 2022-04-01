import { ChangeEvent, MouseEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

//UI
export interface IBoardCommentUIProps {
  data?: Pick<IQuery, "fetchBoardComments">;
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassWord: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  ClickOKButton: () => void;
  writer: string;
  pass: string;
  contents: string;
  StarChange: (value: number) => void;
  value: number;
  CommentScrolling: () => void;
}

export interface IisEditProps {
  isEdit: boolean;
}
