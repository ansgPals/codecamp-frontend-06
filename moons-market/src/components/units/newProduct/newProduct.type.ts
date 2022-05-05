import { KeyboardEventHandler, MouseEventHandler } from "react";
import {
  FieldValues,
  FormState,
  UseFormGetValues,
  UseFormHandleSubmit,
} from "react-hook-form";
import { IQuery } from "../../../commons/types/generated/types";


export interface INewProductUIProps {
  Exit: () => void;
  PutOk: (data: any) => Promise<void>;
  onChangeFileUrls: (fileUrl: string, index: number) => void;
  register: any;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  formState: FormState<FieldValues>;
  isEdit: boolean;
  fileUrls: string[];
  data?: Pick<IQuery,'fetchUseditem'>;
  EditOk: (editD: any) => Promise<void>;
  onChangeContents: (value: string) => void;
  getValues: UseFormGetValues<FieldValues>;
  clickPostNumber: (data: any) => void;
  onModalOpen: () => void;
  modalOpen: boolean;
  onClickPostNumber: () => void;
  add: string;
  onKeyUpHash:KeyboardEventHandler<HTMLInputElement>
  hashArr:string[]
  onClickTag:(el:string)=>MouseEventHandler<HTMLDivElement>
}

export interface INewProductContainerProps {
  isEdit: boolean;
  data?: any;
}

export interface IFormValues {
  name?: string;
  remarks?: string;
  contents?: string;
  price?: number;
  addressDetail?: string;
}
export interface IEditValues {
  name?: string;
  remarks?: string;
  contents?: string;
  price?: number;
  addressDetail?: string;
}

export interface ImyUpdateUseditemInput {
  name?: string;
  remarks?: string;
  price?: number;
  contents?: string;
  images?: string[];
  useditemAddress?: {
    addressDetail?: string;
    address?: string;
  };
  tags?: string[];
}