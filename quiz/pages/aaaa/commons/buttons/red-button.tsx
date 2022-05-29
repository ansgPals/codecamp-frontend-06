import styled from "@emotion/styled";
import { IButtonProps } from "./button.type";

const Button = styled.button`
  height: 29px;
  padding: 0px 10px;
  background-color: #ff0000;
  border-radius: 11px;
  border: none;
  font-size: 15px;
  color: white;
  cursor: pointer;
`;
const DisabledButton=styled.button`
    padding: 0px 10px;
  height: 29px;
  background-color: #E5E5E5;
  border-radius: 11px;
  border: none;
  font-size: 15px;
  color: white;


`

export default function RedButton(props: IButtonProps) {

  return (
    <>
    {props.disabled ? <DisabledButton disabled>{props.innerText}</DisabledButton>
    :   <Button>{props.innerText}</Button> 
    } 
   
     
    </>
  );
}
