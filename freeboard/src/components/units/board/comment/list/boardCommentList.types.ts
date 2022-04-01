import { ChangeEvent, MouseEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";



export interface ICommentList{

editStarChange: (value: number) => void;
editValue: number;
CloseEdit: () => void;
editContents: string;
DeletePassWord: (event: MouseEvent<HTMLButtonElement>) => void;
deleteOpen: boolean;
onChangeDeletePass: (event: ChangeEvent<HTMLInputElement>) => void;
DeleteModal : ()=>
DeleteComment: ()=> Promise<void>;
editCommentIcon: (event: MouseEvent<HTMLButtonElement>) => void;
isEdit: boolean;
UpDateComment: () => void;
onChangeEditContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
onChangeEditPassWord: (event: ChangeEvent<HTMLInputElement>) => void;
commentId: string;
el : any
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