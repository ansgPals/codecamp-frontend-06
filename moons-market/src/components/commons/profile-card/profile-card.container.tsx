import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { IQuery } from "../../../commons/types/generated/types";
import { WhiteBox } from "../commonStyles/WhiteBox";

import * as S from "./profile-card.styles";
const FETCH_LOGIN_USER = gql`
  query fetchLoginUser {
    fetchLoginUser {
      id
    }
  }
`;
export default function ProfileCardComponent({
  userData,
  followedCount,
  followingCount,
}: {
  userData: {
    id?: string;
    blog?: string;
    description?: string;
    facebook?: string;
    gitHub?: string;
    instagram?: string;
    level?: string;
    name?: string;
    nickName?: string;
    phone?: string;
    url?: string;
    userId?: string;
  };
  followedCount?: number;
  followingCount?: number;
}) {
  const { data: loginUserData } = useQuery<Pick<IQuery, "fetchLoginUser">>(
    FETCH_LOGIN_USER,
    { variables: {} }
  );
  const [isAccount, setIsAccount] = useState(false);
  const [isMyData, setIsMyData] = useState(false);
  const router = useRouter();
  const myLevel =
    userData?.level === "ENTER"
      ? "입문자"
      : userData?.level === "NOVICE"
      ? "초급자"
      : userData?.level === "INTERMEDIATE"
      ? "실무자"
      : "마스터";
  const onClickProfileDetail = () => {
    router.push(`/mypage/dashboard/my-information/${userData?.userId}`);
  };
  const onClickMiniHomep = () => {
    alert("3차에 주희가 할 예정입니다.");
  };
  const onClickFollowBox = () => {
    if (!isMyData) return;
    router.push("/mypage/follow");
  };
  useEffect(() => {
    if (
      userData?.gitHub ||
      userData?.blog ||
      userData?.instagram ||
      userData?.facebook
    )
      setIsAccount(true);
    if (userData?.id === loginUserData?.fetchLoginUser?.id) {
      setIsMyData(true);
    } else {
      setIsMyData(false);
    }
  }, [userData, loginUserData]);

  return (
    <>
      <WhiteBox style={{ width: "80rem", minWidth: "80rem" }}>
        <S.PositionRow>
          <S.PositionColumn>
            <S.PositionRow>
              <S.NickNaem>{userData?.nickName}</S.NickNaem>
              <S.UserLevel level={myLevel}>{myLevel}</S.UserLevel>
            </S.PositionRow>

            <S.ImgGray
              src={
                userData?.url
                  ? `https://storage.googleapis.com/${userData?.url}`
                  : "/profile-card/aaa.png"
              }
            ></S.ImgGray>
          </S.PositionColumn>
          <S.PositionColumn style={{ marginLeft: "2rem" }}>
            <WhiteBox
              style={{
                width: "22.53rem",
                padding: "0rem 4rem",
                marginTop: "3.72rem",
                cursor: `${isMyData ? "pointer" : ""}`,
              }}
            >
              <S.PositionRow
                onClick={onClickFollowBox}
                style={{
                  justifyContent: "space-between",
                }}
              >
                <S.PositionColumn style={{ alignItems: "center" }}>
                  <S.FollowTitle>팔로워</S.FollowTitle>
                  <S.FollowNumber>{followedCount || 0}</S.FollowNumber>
                </S.PositionColumn>
                <S.GrayBar></S.GrayBar>
                <S.PositionColumn style={{ alignItems: "center" }}>
                  <S.FollowTitle>팔로잉</S.FollowTitle>
                  <S.FollowNumber>{followingCount || 0}</S.FollowNumber>
                </S.PositionColumn>
              </S.PositionRow>
            </WhiteBox>
            <WhiteBox
              style={{
                width: "22.53rem",
                padding: "1rem 1.333rem",
                marginTop: "1.333rem",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <S.Arrow></S.Arrow>
              <div style={{ fontFamily: "SUIT400" }}>
                {userData?.description ||
                  `코캠러에게 ${userData?.nickName}님을 소개해주세요!`}
              </div>
            </WhiteBox>
          </S.PositionColumn>
          <S.GrayBar
            style={{
              height: "3.2rem",
              marginTop: "8.2rem",
              marginRight: "1.4rem",
              marginLeft: "3.333rem",
            }}
          ></S.GrayBar>
          <S.PositionColumn
            style={{ width: "21.4666rem", marginLeft: "1.666rem" }}
          >
            {isMyData ? (
              <S.Iqon onClick={onClickProfileDetail}></S.Iqon>
            ) : (
              <S.GoMiniHompButton onClick={onClickMiniHomep}>
                미니홈피 방문하기 {">"}
              </S.GoMiniHompButton>
            )}
            <S.NickNaem
              style={{
                fontSize: "1.66rem",
                marginTop: "1.333rem",
                marginLeft: "0.9333rem",
              }}
            >
              {isMyData ? "나" : userData?.name + "님"}의 계정
            </S.NickNaem>
            <S.PositionRow style={{ marginTop: "1.333rem" }}>
              {isAccount ? (
                <S.PositionColumn>
                  {userData?.gitHub && (
                    <S.MediaTitleBox>
                      <S.Dot />
                      <S.MediaTitle>Github</S.MediaTitle>
                    </S.MediaTitleBox>
                  )}
                  {userData?.blog && (
                    <S.MediaTitleBox>
                      <S.Dot />
                      <S.MediaTitle>Blog</S.MediaTitle>
                    </S.MediaTitleBox>
                  )}
                  {userData?.instagram && (
                    <S.MediaTitleBox>
                      <S.Dot />
                      <S.MediaTitle>Insta</S.MediaTitle>
                    </S.MediaTitleBox>
                  )}
                  {userData?.facebook && (
                    <S.MediaTitleBox>
                      <S.Dot />
                      <S.MediaTitle>Fbook</S.MediaTitle>
                    </S.MediaTitleBox>
                  )}
                </S.PositionColumn>
              ) : (
                <S.NoAccountBox isMyData={isMyData}>
                  <S.NoAccountText isMyData={isMyData}>
                    {isMyData
                      ? `${userData?.nickName}님의 계정을 등록해주세요!`
                      : `등록된 계정이 없어요 :(`}
                  </S.NoAccountText>
                  {isMyData && (
                    <S.NoAccountButton onClick={onClickProfileDetail}>
                      계정 등록하기
                      <img src="/buttons/purple-arrow.png" />
                    </S.NoAccountButton>
                  )}
                </S.NoAccountBox>
              )}
              <S.PositionColumn>
                {userData?.gitHub && (
                  <S.UrlText href={userData?.gitHub}>
                    {userData?.gitHub}
                  </S.UrlText>
                )}
                {userData?.blog && (
                  <S.UrlText href={userData?.blog}>{userData?.blog}</S.UrlText>
                )}
                {userData?.instagram && (
                  <S.UrlText href={userData?.instagram}>
                    {userData?.instagram}
                  </S.UrlText>
                )}
                {userData?.facebook && (
                  <S.UrlText href={userData?.facebook}>
                    {userData?.facebook}
                  </S.UrlText>
                )}
              </S.PositionColumn>
            </S.PositionRow>
          </S.PositionColumn>
        </S.PositionRow>
      </WhiteBox>
    </>
  );
}
