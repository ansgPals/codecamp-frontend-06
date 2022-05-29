import styled from "@emotion/styled";
import { IButtonProps } from "./button.type";

const Button = styled.button`
  height: 29px;
  width: fit-content;
  padding: 0px 10px;
  background-color: #6400ff;
  border-radius: 11px;
  border: none;
  font-size: 15px;
  color: white;
  cursor: pointer;
`;

export default function PurpleButton(props: IButtonProps) {
  return (
    <>
      <Button>{props.innerText}</Button>
    </>
  );
}
