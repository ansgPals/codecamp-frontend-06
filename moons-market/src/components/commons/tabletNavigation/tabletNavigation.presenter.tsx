import { Fragment } from "react";
import * as S from "./tabletNavigation.styles";
import { INavigationUIProps } from "./tabletNavigation.types";

export default function NavigationUI(props: INavigationUIProps) {
  return (
    <>
      <S.Wrapper>
        <div>
          <S.MenuTitle onClick={props.onClickNoShowTablet}>
            <S.Span>{"<"}</S.Span>
            <S.Icon
              src={
                props.currentTitle === "커뮤니티"
                  ? "/userLayout/comunity.png"
                  : "/userLayout/Home.png"
              }
            ></S.Icon>
            <S.Title>{props.currentTitle}</S.Title>
          </S.MenuTitle>
          <S.MenuList>
            {props.currentMenu.map((el) => (
              <Fragment key={el.page}>
                {el.name === "미니홈피" &&
                props.loginUserData?.fetchLoginUser.status === false ? (
                  <S.statusFalseMenuBox>
                    <S.Menu
                      // isSelected={props.isSelected === el.page}
                      // onClick={props.onClickMenu(el)}
                      status={false}
                    >
                      {el.name} <S.statusFalse>정지</S.statusFalse>
                    </S.Menu>
                  </S.statusFalseMenuBox>
                ) : (
                  <S.Menu
                    isSelected={props.isSelected === el.page}
                    onClick={
                      el.name === "미니홈피"
                        ? () => {
                            alert("3차");
                          }
                        : props.onClickMenu(el)
                    }
                    status={true}
                  >
                    {el.name}
                  </S.Menu>
                )}
              </Fragment>
            ))}
          </S.MenuList>
        </div>
        <S.LogoutBtn onClick={props.onClickLogout}>
          <S.LogoutImg src="/userLayout/logout.png" />
          로그아웃
        </S.LogoutBtn>
      </S.Wrapper>
    </>
  );
}
