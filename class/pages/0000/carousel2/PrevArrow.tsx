import styled from "@emotion/styled";

interface NextArrowProps {
  style?: any;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}
const Prev = styled.div`
  margin-top: 451px;
  width: 26px;
  height: 28px;
  border-radius: 30px 0px 0px 30px;
  padding-left: 7px;
  font-size: 20px;
  line-height: 25px;
  background-color: rgba(0, 0, 0, 0.3);
  margin-left: 221px;
  color: white;
  position: absolute;
  z-index: 3;
  margin-left: 221px;
`;
export default function PrevArrow({ style, onClick }: NextArrowProps) {
  return <Prev onClick={onClick}>{"<"}</Prev>;
}
