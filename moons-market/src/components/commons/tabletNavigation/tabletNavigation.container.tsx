import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { Dispatch, SetStateAction, useState } from "react";
import { IMutation, IQuery } from "../../../commons/types/generated/types";
import NavigationUI from "./tabletNavigation.presenter";
import { LOGOUT } from "./tabletNavigation.querys";

// title: 대메뉴, name: 소메뉴, page: 경로
const MENUS = [
  { title: "마이페이지", name: "대시보드", page: "/mypage/dashboard" },
  { title: "마이페이지", name: "미니홈피", page: "/mini-homepage" },
  { title: "마이페이지", name: "강의 노트", page: "/mypage/mynote" },
  { title: "마이페이지", name: "구매내역", page: "/payment" },
  { title: "커뮤니티", name: "미니홈피", page: "/community/mini-homepage" },
  { title: "커뮤니티", name: "Q&A", page: "/community/qnas" },
];

interface ITabletNavigationProps {
  onClickNoShowTablet: () => void;
  setShowTablet: Dispatch<SetStateAction<boolean>>;
  loginUserData: Pick<IQuery, "fetchLoginUser">;
}

export default function TabletNavigation(props: ITabletNavigationProps) {
  const router = useRouter();
  const currentTitle = router.asPath.includes("community")
    ? "커뮤니티"
    : "마이페이지";
  const currentMenu = MENUS.filter((el) => el.title === currentTitle);
  const [isSelected, setIsSelected] = useState(router.asPath);
  const onClickMenuTitle = () => {
    router.push(currentMenu[0].page);
  };
  const onClickMenu = (el: { page: string }) => () => {
    router.push(el.page);
    setIsSelected(el.page);
  };

  const [logOut] = useMutation<Pick<IMutation, "logOut">>(LOGOUT);

  const onClickLogout = async () => {
    try {
      await logOut();
      props.setShowTablet(false);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <NavigationUI
      currentTitle={currentTitle}
      currentMenu={currentMenu}
      isSelected={isSelected}
      onClickMenuTitle={onClickMenuTitle}
      onClickMenu={onClickMenu}
      onClickNoShowTablet={props.onClickNoShowTablet}
      onClickLogout={onClickLogout}
      loginUserData={props.loginUserData}
    />
  );
}
