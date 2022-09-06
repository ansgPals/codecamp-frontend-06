import styled from "@emotion/styled";

export const Div = styled.div`
  position: relative;
`;

export const Select = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0.333rem 0.666rem;
  width: 100%;
  height: 100%;
  border: 0.066rem solid #6400ff;
  border-radius: 0.333rem;
`;

export const InnerName = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 100%;
  font-family: "SUIT";
  font-style: normal;
  font-size: 1rem;
  cursor: pointer;
  color: #6400ff;
`;

export const InnerIcon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 1.666rem;
  height: 0.8rem;
  user-select: none;
`;

export const OptionBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  z-index: 1;
  padding: 0.666rem;
  width: 100%;

  background: #ffffff;
  box-shadow: 0px 0.4666rem 1.666rem rgba(143, 0, 255, 0.1);
  border-radius: 0.333rem;
`;

export const Option = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 0.666rem;
  width: 100%;
  height: 100%;
  cursor: pointer;
  :hover {
    background: rgba(222, 207, 255, 0.38);
    border-radius: 0.333rem;
    color: #6400ff;
  }
  overflow: auto;
`;

export const Span = styled.span`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const ImgBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 1.133rem;
  height: 1.133rem;
`;

export const ValueBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
`;
