import styled from "@emotion/styled";

interface IToggleProps {
  toggle: boolean;
}
const ToggleBtn = styled.button`
  width: 2.2rem;
  height: 1.4rem;
  border-radius: 0.7rem;
  border: 0.06666rem solid
    ${(props: IToggleProps) => (!props.toggle ? "#C4C4C4" : "#6400FF")};
  cursor: pointer;
  background-color: transparent;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease-in-out;
`;
const Circle = styled.div`
  background-color: ${(props: IToggleProps) =>
    !props.toggle ? "#C4C4C4" : "#6400FF"};
  width: 0.8666rem;
  height: 0.8666rem;
  border-radius: 50%;
  position: absolute;
  line-height: 1.4rem;
  left: 8%;
  transform: ${(props: IToggleProps) =>
    props.toggle ? "translate(0.8rem, 0)" : "none"};
  transition: ${(props: IToggleProps) =>
    props.toggle ? "all 0.5s ease-in-out" : "all 0.5s ease-in-out"};
`;

export default function ToggleComponent({
  toggle,
  onClickEvent,
}: {
  toggle: boolean;
  onClickEvent?: (...args: any) => void;
}) {
  return (
    <div style={{ cursor: "pointer", width: "", height: "" }}>
      <ToggleBtn
        onClick={(onClickEvent && onClickEvent) || undefined}
        toggle={toggle}
        type="button"
      >
        <Circle toggle={toggle} />
      </ToggleBtn>
    </div>
  );
}
