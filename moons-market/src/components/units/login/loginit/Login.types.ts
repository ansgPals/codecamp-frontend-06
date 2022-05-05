import {
    FieldValues,
    FormState,
    UseFormHandleSubmit,
    UseFormRegister,
  } from "react-hook-form";

export interface IFormValues {
    email?: string;
    password?: string;
  }
  export interface ILogInPropsUI {
    inputRef: any;
  
    onClickSignUp: () => void;
    register: UseFormRegister<FieldValues>;
    handleSubmit: UseFormHandleSubmit<FieldValues>;
    formState: FormState<FieldValues>;
    onClickSubmit: (data: IFormValues) => void;
  }
  export interface IButtonProps {
    isActive: boolean;
  }