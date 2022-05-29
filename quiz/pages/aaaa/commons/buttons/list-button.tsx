import styled from "@emotion/styled";
import { IButtonProps } from "./button.type";

const Button = styled.button`
  width: 47px;
  height: 29px;
  border: 1px solid black;
  background-color: white;
  border-radius: 11px;
  font-size: 15px;
  cursor: pointer;
`;

export default function ListButton(props: IButtonProps) {
  return (
    <>
      <Button>{props.innerText}</Button>
    </>
  );
}
