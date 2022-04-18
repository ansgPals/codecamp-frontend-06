import styled from "@emotion/styled";
import { UseFormRegisterReturn } from "react-hook-form";

const Input = styled.input`
  font-size: 19px;
`;
interface IInputProps {
  type: "text" | "password";
  register: UseFormRegisterReturn;
}
export default function Input01(props: IInputProps) {
  return <Input type={props.type} {...props.register} />;
}
