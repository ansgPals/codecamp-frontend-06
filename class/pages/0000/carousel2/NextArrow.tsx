import styled from "@emotion/styled";

interface NextArrowProps {
  style?: any;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}
const Next = styled.div`
  position: absolute;
  margin-top: 0px;
  width: 26px;
  height: 28px;
  border-radius: 0px 30px 30px 0px;
  padding-left: 7px;
  font-size: 20px;
  line-height: 27px;
  background-color: rgba(0, 0, 0, 0.3);
  margin-left: 285px;
  z-index: 5;
  bottom: 56px;
  color: white;
`;
export default function NextArrow({ style, onClick }: NextArrowProps) {
  return <Next onClick={onClick}>{">"}</Next>;
}
