import styled from "@emotion/styled";

export const PaginationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 280px;
  height: 33px;
`;
export const NumberWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 200px;
`;
interface IbuttonProps {
  isPicked: boolean;
}
export const NumberButton = styled.div`
  padding: 1px;
  width: 40px;
  min-height: 33px;
  color: ${(props: IbuttonProps) => (props.isPicked ? "black" : "#C4C4C4")};
  font-weight: 700;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 33px;
  cursor: pointer;
`;

export const Arrow = styled.img`
  width: 9px;
  height: 9px;
  background-size: cover;
  border: none;
`;
export const DoubleArrow = styled.img`
  width: 13px;
  height: 9px;
`;
