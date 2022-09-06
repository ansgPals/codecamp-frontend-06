import styled from "@emotion/styled";
import { ISelectStyleProps } from "./select.type";

export const Div = styled.div`
  position: relative;
  width: 100%;
`;

export const Select = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0.333rem 0.666rem;
  margin-bottom: 5px;
  width: 100%;
  height: 100%;
  /* border: ${(props: ISelectStyleProps) =>
    props.isShow ? "1px solid #6400ff" : "none"}; */
  border-radius: 0.333rem;
  &:focus {
    border: 0.066rem solid;
    background-color: white;
  }
  overflow: auto;
`;

export const InnerName = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 100%;
  font-family: "SUIT";
  font-style: normal;
  font-size: 1.333rem;
  cursor: pointer;
  white-space: nowrap;
  overflow: auto;
  text-overflow: ellipsis;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const InnerIcon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left: 0.666rem;
  width: 2.066rem;
  height: 1rem;
  user-select: none;
`;

export const OptionBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: 0.0666rem;
  z-index: 1;
  padding: 0.666rem;
  width: 100%;
  margin-bottom: 0.333rem;
  background: #ffffff;
  border: 0.0666rem solid #6400ff;
  box-shadow: 0px 0.466rem 1.666rem rgba(143, 0, 255, 0.1);
  border-radius: 0.333rem;
`;

export const Option = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.266rem 0.333rem;
  width: 100%;
  /* height: 1.8rem; */
  cursor: pointer;
  :hover {
    background: rgba(222, 207, 255, 0.38);
    border-radius: 0.333rem;
    color: #6400ff;
  }
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: "SUIT";
  font-style: normal;
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
