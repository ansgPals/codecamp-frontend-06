import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { ReactNode, useState } from "react";
import Navigation from "../navigation/Navigation.container";
import UserLayoutHeaderPage from "./userLayoutHeader";
import Comment from "../../units/community/qna/comment/Comment";
import WaitingCardSlider from "../../../components/commons/carousel";
import TabletNavigation from "../tabletNavigation/tabletNavigation.container";
import { gql, useQuery } from "@apollo/client";
import { IQuery } from "../../../commons/types/generated/types";
import FooterPage from "./userLayoutFooter";

export const FETCH_LOGIN_USER = gql`
  query fetchLoginUser {
    fetchLoginUser {
      id
      name
      userId
      nickName
      url
      status
    }
  }
`;

interface IBodyProps {
  isLecturePage?: boolean;
  isChangeBackground?: boolean;
  isRoute?: boolean;
  payment?: boolean;
  showTabelt?: boolean;
  showFollow?: boolean;
}

const Body = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: ${(props: IBodyProps) =>
    props.isLecturePage
      ? "0px"
      : props.payment || props.showTabelt || props.showFollow
      ? "5.333rem 0"
      : "5.333rem 24rem 5.333rem 6.533rem"};
  width: 100vw;
  min-width: 80rem;
  margin: auto;
  background-color: ${(props: IBodyProps) =>
    props.isChangeBackground ? "#F7F9FB" : "#fff"};
  @media (max-width: 1250px) {
    padding: 5.333rem 0;
    ${(props: IBodyProps) => props.isLecturePage && { padding: 0 }}
  }
`;

const Inner = styled.div`
  min-width: 80rem;
  margin: auto;
`;

const CommentBody = styled.div`
  width: 100vw;
  margin: auto;
  min-width: 80rem;
`;

const InnerBody = styled.div`
  display: flex;
  flex-direction: row;
`;

interface ChildrenProps {
  children: ReactNode;
}

const carouselData = [
  {
    img: "/main/carouselimg.png",
    title: "미니 홈페이지 만들기",
    level: "입문",
    subTitle: "내 손으로 추억의 미니 홈페이지를 만들어 보세요.",
  },
  {
    img: "/main/carouselimg.png",
    title: "고양이 츄르 만들기",
    level: "입문",
    subTitle: "내 손으로 고양이의 츄르를 만들어 보세요.",
  },
  {
    img: "/main/carouselimg.png",
    title: "미니 잔디 만들기",
    level: "입문",
    subTitle: "내 손으로 자연의 잔디를 만들어 보세요.",
  },
];

export default function UserLayoutPage(props: ChildrenProps) {
  const router = useRouter();
  const [showTabelt, setShowTablet] = useState(false);
  const changeBackground = ["/community/qnas/qnas-write"];
  // const showHeaderTitle = [
  //   "/community/qnas",
  //   "/community/qnas/qnas-write",
  //   `/community/qnas/${router.query.id}`,
  //   "/community/mini-homepage",
  // ];
  // const showHeaderTitle = "community";
  const showMyPage = [
    "/mypage/dashboard",
    "/payment",
    "/mypage/mynote",
    "/mypage/follow",
    `/mypage/mynote/${router.query.courseId}`,
    `/mypage/mynote/mynote-detail/${router.query.noteId}`,
    `/mypage/dashboard/my-information/${router.query.id}`,
    `/mypage/dashboard/secession/${router.query.id}`,
    `/mypage/dashboard/secession`,
  ];
  const showFollow = router.asPath.includes("follow");
  const showQnAComment = [`/community/qnas/${router.query.id}`];
  const isChangeBackground = changeBackground.includes(router.asPath);
  // const isShowHeaderTitle = showHeaderTitle.includes(router.asPath);
  const isShowQnAComment = showQnAComment.includes(router.asPath);
  const isLecturePage = router.asPath.includes("lectures");
  const isMyPage = showMyPage.includes(router.asPath);
  // const isMyPage = router.asPath.includes("mypage" || "payment");
  const isCommunity = router.asPath.includes("community");
  const isRoute = router.asPath === "/";
  const isMain = router.asPath.includes("main");
  const paymentDetail = router.asPath.includes(`/payment/${router.query.id}`);
  const isShowLoginSignUp =
    router.asPath.includes("login") || router.asPath.includes("sign-up");
  const payment = router.asPath.includes("payment");
  const { data: loginUserData } =
    useQuery<Pick<IQuery, "fetchLoginUser">>(FETCH_LOGIN_USER);

  const onClickShowTablet = () => {
    setShowTablet(true);
  };

  const onClickNoShowTablet = () => {
    setShowTablet(false);
  };

  return (
    <>
      {!isShowLoginSignUp && (
        <>
          <UserLayoutHeaderPage
            isRoute={isRoute || isMain}
            onClickShowTablet={onClickShowTablet}
            loginUserData={loginUserData}
          />
          {(isRoute || isMain || paymentDetail) && (
            <>
              {isRoute && <WaitingCardSlider data={carouselData} />}
              {paymentDetail && (
                <div style={{ marginTop: "5.333rem" }}>
                  <Inner>{props.children}</Inner>
                </div>
              )}
              {!paymentDetail && <Inner>{props.children}</Inner>}
            </>
          )}
          <Body
            isChangeBackground={isChangeBackground}
            isLecturePage={isLecturePage}
            payment={payment}
            showTabelt={showTabelt}
            showFollow={showFollow}
          >
            {(!isRoute || !isMain) && (
              <>
                {(isCommunity || isMyPage || isLecturePage) && (
                  <InnerBody>
                    {!isLecturePage && !showFollow && (
                      <div
                        style={
                          isCommunity
                            ? { marginTop: "11rem" }
                            : { marginTop: "0px" }
                        }
                      >
                        <Navigation loginUserData={loginUserData} />
                      </div>
                    )}
                    <Inner>{props.children}</Inner>
                  </InnerBody>
                )}
                {showTabelt && (
                  <>
                    <TabletNavigation
                      onClickNoShowTablet={onClickNoShowTablet}
                      setShowTablet={setShowTablet}
                      loginUserData={loginUserData}
                    />
                    {/* <Inner>{props.children}</Inner> */}
                  </>
                )}
              </>
            )}
          </Body>
          {isShowQnAComment && (
            <CommentBody>
              <Comment />
            </CommentBody>
          )}
          <FooterPage />
        </>
      )}
      {isShowLoginSignUp && <>{props.children}</>}
    </>
  );
}
