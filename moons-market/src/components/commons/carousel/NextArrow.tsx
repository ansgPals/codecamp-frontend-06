import styled from "@emotion/styled";
import { MouseEventHandler } from "react";

interface NextArrowProps {
  style?: any;
  onClick?: MouseEventHandler<HTMLDivElement>;
}
const Next = styled.div`
  position: absolute;
  width: 1.7333rem;
  height: 1.8666rem;
  border-radius: 0rem 2rem 2rem 0rem;
  padding-left: 0.4666rem;
  font-size: 1.333rem;
  line-height: 1.8rem;
  background-color: rgba(0, 0, 0, 0.3);
  margin-left: 34.1333rem;
  z-index: 5;
  margin-top: -4.5333rem;
  color: white;
  cursor: pointer;
`;
export default function NextArrow({ style, onClick }: NextArrowProps) {
  return <Next onClick={onClick}>{">"}</Next>;
}
