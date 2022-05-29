import styled from "@emotion/styled";

interface IToggleProps {
  toggle: boolean;
}
const ToggleBtn = styled.button`
  width: 23px;
  height: 14px;
  border-radius: 13px;
  border: 1.5px solid
    ${(props: IToggleProps) => (!props.toggle ? "#C4C4C4" : "#6400FF")};
  cursor: pointer;
  background-color: none;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease-in-out;
`;
const Circle = styled.div`
  background-color: ${(props: IToggleProps) =>
    !props.toggle ? "#C4C4C4" : "#6400FF"};
  width: 8px;
  height: 8px;
  border-radius: 13px;
  position: absolute;
  left: 5%;
  transform: ${(props: IToggleProps) =>
    props.toggle ? "translate(10px, 0)" : "none"};
  transition: ${(props: IToggleProps) =>
    props.toggle ? "all 0.5s ease-in-out" : "all 0.5s ease-in-out"};
`;

export default function Toggle(props) {
  return (
    <div>
      <ToggleBtn toggle={props.toggle}>
        <Circle toggle={props.toggle} />
      </ToggleBtn>
    </div>
  );
}
