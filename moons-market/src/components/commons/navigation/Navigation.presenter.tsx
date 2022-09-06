import { useRouter } from "next/router";
import { Fragment } from "react";
import CommunityLimitModalComponent from "../userModal/community-limit-modal/community-limit-modal";
import * as S from "./Navigation.styles";
import { INavigationUIProps } from "./Navigation.types";

export default function NavigationUI(props: INavigationUIProps) {
  const router = useRouter();
  return (
    <>
      <S.BackGround>
        <S.Wrapper>
          <S.MenuTitle onClick={props.onClickMenuTitle}>
            <S.Icon
              src={
                props.currentTitle === "커뮤니티"
                  ? "/userLayout/comunity.png"
                  : "/userLayout/Home.png"
              }
            ></S.Icon>
            {props.currentTitle}
          </S.MenuTitle>
          <S.MenuList>
            {props.currentMenu.map((el) => (
              <Fragment key={el.page}>
                {el.name === "미니홈피" &&
                props.loginUserData?.fetchLoginUser.status === false ? (
                  <>
                    <S.statusFalseMenuBox>
                      <S.Menu
                        status={props.loginUserData?.fetchLoginUser.status}
                        onClick={() => {
                          props.setLimitModal(true);
                        }}
                      >
                        {el.name} <S.statusFalse>정지</S.statusFalse>
                      </S.Menu>
                    </S.statusFalseMenuBox>
                    {props.limitModal && (
                      <CommunityLimitModalComponent
                        setIsModalOpen={props.setLimitModal}
                      />
                    )}
                  </>
                ) : (
                  <S.Menu
                    isSelected={router.asPath.includes(el.page)}
                    onClick={
                      el.name === "미니홈피"
                        ? () => {
                            alert("3차");
                          }
                        : props.onClickMenu(el)
                    }
                  >
                    {el.name}
                  </S.Menu>
                )}
              </Fragment>
            ))}
          </S.MenuList>
        </S.Wrapper>
      </S.BackGround>
    </>
  );
}
