import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { ProfileNoImg } from "../../../../commons/libraries/utils";
import { sideBarNumber } from "../../../../commons/store";
import { IMutation, IQuery } from "../../../../commons/types/generated/types";
import { LOG_OUT } from "./header.querys";

import * as s from "./header.styles";

interface IUserLayoutHeaderProps {
  isRoute?: boolean;
  onClickShowTablet?: () => void;
  loginUserData?: Pick<IQuery, "fetchLoginUser">;
}

export default function UserLayoutHeaderPage(props: IUserLayoutHeaderProps) {
  const router = useRouter();
  const [, setShowMenuTitle] = useRecoilState(sideBarNumber);
  const [showProfile, setShowProfile] = useState(false);

  const [logOut] = useMutation<Pick<IMutation, "logOut">>(LOG_OUT);

  const onClickMovePage = (page: string) => () => {
    if (page === "/community/mini-homepage") {
      alert("미니홈피 3차라서 qna리스트로 이동합니다.");
      router.push("/community/qnas/");
      setShowMenuTitle(0);
      setShowProfile(false);
    } else {
      router.push(`${page}`);
      setShowMenuTitle(0);
      setShowProfile(false);
    }
  };

  const onClickMoveMain = () => {
    router.push("/");
  };

  const onClickShowProfileInfo = () => {
    setShowProfile(!showProfile);
  };

  const onClickLogout = async () => {
    try {
      await logOut();
      setShowProfile(false);
      alert("로그아웃 되었습니다.");
      router.push("/");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <s.Wrapper isRoute={props.isRoute}>
        <s.LogoAndTabeltBox>
          {props.loginUserData && !props.isRoute && (
            <s.HeaderTabletBox onClick={props.onClickShowTablet}>
              <s.HeaderTablet src="/userLayout/tablet.png" />
            </s.HeaderTabletBox>
          )}
          <s.HeaderLogo onClick={onClickMoveMain}>
            <s.Logo
              src={
                props.isRoute
                  ? "/userLayout/RoutLogo.png"
                  : "/userLayout/userLayoutLogo.png"
              }
            />
          </s.HeaderLogo>
        </s.LogoAndTabeltBox>
        <s.InfoBox>
          {props.loginUserData && (
            <s.SpanDiv onClick={onClickMovePage("/mypage/dashboard")}>
              <s.Span isRoute={props.isRoute}>마이페이지</s.Span>
            </s.SpanDiv>
          )}
          <s.SpanDiv
            onClick={onClickMovePage(
              props.loginUserData
                ? props.loginUserData?.fetchLoginUser.status === false
                  ? "/community/qnas/"
                  : "/community/mini-homepage"
                : "/login"
            )}
          >
            <s.Span isRoute={props.isRoute}>
              {props.loginUserData ? "커뮤니티" : "로그인"}
            </s.Span>
          </s.SpanDiv>
          {props.loginUserData && (
            <>
              {" "}
              <s.ProfileImgBox>
                <s.Img
                  src={`https://storage.googleapis.com/${props.loginUserData?.fetchLoginUser?.url}`}
                  onError={ProfileNoImg}
                  onClick={onClickShowProfileInfo}
                />
                {showProfile && (
                  <s.ProfileInfoBox>
                    <s.ProfileUpItem>
                      {props.loginUserData?.fetchLoginUser.nickName}님
                    </s.ProfileUpItem>
                    <s.ProfileItemBox>
                      <s.ProfileItem
                        onClick={() => {
                          alert("3차입니다.");
                          setShowProfile(false);
                        }}
                      >
                        미니홈피
                      </s.ProfileItem>
                      <s.ProfileItem
                        onClick={onClickMovePage("/mypage/dashboard")}
                      >
                        대시보드
                      </s.ProfileItem>
                    </s.ProfileItemBox>
                    <s.ProfileDownItem onClick={onClickLogout}>
                      로그아웃
                    </s.ProfileDownItem>
                  </s.ProfileInfoBox>
                )}
              </s.ProfileImgBox>
            </>
          )}
        </s.InfoBox>
      </s.Wrapper>
      <></>
    </>
  );
}
