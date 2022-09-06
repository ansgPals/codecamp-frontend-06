import styled from "@emotion/styled";
import { MouseEventHandler } from "react";

interface NextArrowProps {
  style?: any;
  onClick?: MouseEventHandler<HTMLDivElement>;
}
const Prev = styled.div`
  position: absolute;
  margin-top: 46.1333rem;
  width: 1.7333rem;
  height: 1.866rem;
  border-radius: 2rem 0rem 0rem 2rem;
  padding-left: 0.4666rem;
  font-size: 1.333rem;
  line-height: 1.8rem;
  background-color: rgba(0, 0, 0, 0.3);
  margin-left: 29.7333rem;
  z-index: 10;

  color: white;
  cursor: pointer;
`;
export default function PrevArrow({ style, onClick }: NextArrowProps) {
  return <Prev onClick={onClick}>{"<"}</Prev>;
}
