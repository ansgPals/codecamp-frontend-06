import styled from "@emotion/styled";
import { INavigationStylesProps } from "./tabletNavigation.types";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: fit-content;
  height: 100vh;
  background: #ffffff;
  padding: 2.466rem 3.866rem 4.8rem 2.8rem;
  box-shadow: 0 0.333rem 2.333rem rgba(23, 0, 58, 0.12);
  border-radius: 0px 2.666rem 0px 0px;
  position: fixed;
  z-index: 4;
  top: 0;
  left: 0;
  /* @media (min-width: 1250px) {
    display: none;
  } */
`;
export const MenuTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 1.4666rem;
  min-width: fit-content;
  height: 2.0666rem;
  font-family: "SUIT600";
  color: #6400ff;
  font-size: 1.333rem;
  list-style: none;
  cursor: pointer;
  user-select: none;
`;
export const Icon = styled.img`
  margin-left: 0.666rem;
  margin-right: 0.666rem;
  width: 1.6rem;
  height: 1.6rem;
`;

export const Span = styled.span`
  font-family: "SUIT";
  font-style: normal;
  font-weight: 600;
  font-size: 1.333rem;
  color: #6400ff;
`;

export const Title = styled.div`
  min-height: fit-content;
  font-family: "SUIT";
  font-style: normal;
  font-weight: 600;
  font-size: 1.333rem;
`;

export const MenuList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: fit-content;
  justify-content: flex-start;
`;

export const statusFalseMenuBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 2.866rem;
  min-width: 6.8rem;
`;

export const statusFalse = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0.3rem 0.466rem;
  margin-left: 0.333rem;
  background: #ff5151;
  border-radius: 0.4rem;
  color: #fff;
  min-width: fit-content;
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  height: 1.466rem;
  min-width: fit-content;
  line-height: 1.466rem;
  margin-bottom: 1.333rem;
  list-style: none;
  font-family: ${(props: INavigationStylesProps) =>
    !props.status ? "SUIT" : props.isSelected ? "SUIT700" : "SUIT"};
  color: ${(props: INavigationStylesProps) =>
    !props.status ? "#E5E5E5" : props.isSelected ? "#6400FF" : "#7C7C7C"};
  font-size: 1.066rem;
  cursor: pointer;
  user-select: none;
`;

export const LogoutBtn = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 7.866rem;
  height: 3.333rem;
  background: #ffffff;
  border: 0.0666rem solid #000000;
  border-radius: 0.333rem;
  box-sizing: border-box;
  font-size: 1.0666rem;
  cursor: pointer;
`;

export const LogoutImg = styled.img`
  padding-right: 0.333rem;
  width: 1.066rem;
  height: 1rem;
`;
