import {
  FieldValues,
  FormState,
  UseFormGetValues,
  UseFormHandleSubmit,
} from "react-hook-form";

export interface INewProductUIProps {
  Exit: () => void;
  PutOk: (data: any) => Promise<void>;
  onChangeFileUrls: (fileUrl: string, index: number) => void;
  register: any;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  formState: FormState<FieldValues>;
  isEdit: boolean;
  fileUrls: string[];
  data: any;
  EditOk: (editD: any) => Promise<void>;
  onChangeContents: (value: string) => void;
  getValues: UseFormGetValues<FieldValues>;
  clickPostNumber: (data: any) => void;
  onModalOpen: () => void;
  modalOpen: boolean;
  onClickPostNumber: () => void;
  add: string;
}

export interface INewProductContainerProps {
  isEdit: boolean;
  data?: any;
}
