import styled from "@emotion/styled";

export const PaginationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: fit-content;
  max-width: 20rem;
  height: 2.2rem;
  user-select: none;
`;
export const NumberWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: fit-content;
  max-width: 13.333rem;
`;
interface IbuttonProps {
  isPicked: boolean;
}
export const NumberButton = styled.div`
  padding: 0.0666rem;
  font-size: 1.666rem;
  width: 3.333rem;

  min-height: 2.2rem;
  color: ${(props: IbuttonProps) => (props.isPicked ? "#6400FF" : "#C4C4C4")};
  font-family: ${(props: IbuttonProps) =>
    props.isPicked ? "SUIT900" : "SUIT700"};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 2.2rem;
  cursor: pointer;
`;

export const Arrow = styled.img`
  width: 0.666rem;
  height: 1rem;
  background-size: cover;
  border: none;
  cursor: pointer;
`;
