import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { IQuery } from "../../../commons/types/generated/types";
import NavigationUI from "./Navigation.presenter";

// title: 대메뉴, name: 소메뉴, page: 경로
const MENUS = [
  { title: "마이페이지", name: "대시보드", page: "/mypage/dashboard" },
  { title: "마이페이지", name: "미니홈피", page: "/mini-homepage" },
  { title: "마이페이지", name: "강의 노트", page: "/mypage/mynote" },
  { title: "마이페이지", name: "구매내역", page: "/payment" },
  { title: "커뮤니티", name: "미니홈피", page: "/community/mini-homepage" },
  { title: "커뮤니티", name: "Q&A", page: "/community/qnas" },
];

interface INavigation {
  loginUserData?: Pick<IQuery, "fetchLoginUser">;
}

export default function Navigation(props: INavigation) {
  const router = useRouter();
  const currentTitle = router.asPath.includes("community")
    ? "커뮤니티"
    : "마이페이지";
  const currentMenu = MENUS.filter((el) => el.title === currentTitle);
  const [isSelected, setIsSelected] = useState(router.asPath);
  const [limitModal, setLimitModal] = useState(false);

  useEffect(() => {
    const page = router.asPath;
    setIsSelected(page);
  }, []);

  const onClickMenuTitle = () => {
    router.push(currentMenu[0].page);
  };
  const onClickMenu = (el: { page: string }) => () => {
    router.push(el.page);
    setIsSelected(el.page);
  };

  return (
    <NavigationUI
      currentTitle={currentTitle}
      currentMenu={currentMenu}
      isSelected={isSelected}
      limitModal={limitModal}
      setLimitModal={setLimitModal}
      onClickMenuTitle={onClickMenuTitle}
      onClickMenu={onClickMenu}
      loginUserData={props.loginUserData}
    />
  );
}
