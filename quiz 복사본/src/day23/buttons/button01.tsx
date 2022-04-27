import styled from "@emotion/styled";

interface IButtonStyleProps {
  isActive: boolean;
}
const Button = styled.button`
  background-color: ${(props: IButtonStyleProps) => props.isActive && "yellow"};
`;
interface IButtonProps {
  isActive: boolean;
  title: string;
}
export default function Button01(props: IButtonProps) {
  return <Button isActive={props.isActive}>{props.title}</Button>;
}
