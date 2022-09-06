import styled from "@emotion/styled";
import { INavigationStylesProps } from "./Navigation.types";

export const BackGround = styled.div`
  width: 14.8rem;
  height: 18.7333rem;
  background: linear-gradient(90deg, #6400ff 36.26%, #8000ff 102.7%);
  box-shadow: 0 0.2rem 1.333rem rgba(23, 0, 58, 0.1);
  border-radius: 0.666rem;
  position: sticky;
  top: 5.333rem;
  margin-right: 2.666rem;
  @media (max-width: 1700px) {
    display: none;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  width: 14.8rem;
  height: 18.1333rem;
  top: 0.6rem;
  background: #ffffff;
  padding: 2.0666rem 2.0666rem;
`;
export const MenuTitle = styled.h1`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 1.4666rem;
  height: 2.0666rem;
  font-family: "SUIT600";
  color: #6400ff;
  font-size: 1.666rem;
  list-style: none;
  cursor: pointer;
  user-select: none;
`;
export const Icon = styled.img`
  margin-right: 0.666rem;
  width: 1.6rem;
  height: 1.6rem;
`;
export const MenuList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const statusFalseMenuBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 2.8666rem;
`;

export const statusFalse = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0.2rem 0.4666rem;
  margin-left: 0.333rem;
  background: #ff5151;
  border-radius: 0.4rem;
  color: #fff;
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 1.4666rem;
  line-height: 1.4666rem;
  margin-bottom: 1.333rem;
  list-style: none;
  font-family: ${(props: INavigationStylesProps) =>
    !props.status ? "SUIT" : props.isSelected ? "SUIT700" : "SUIT"};
  color: ${(props: INavigationStylesProps) =>
    props.status
      ? props.isSelected
        ? "#6400FF"
        : "#7C7C7C"
      : props.status !== undefined
      ? "#E5E5E5"
      : props.isSelected
      ? "#6400FF"
      : "#7C7C7C"};
  font-size: 1.2rem;
  cursor: pointer;
  user-select: none;
`;
