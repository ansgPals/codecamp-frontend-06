import { useRouter } from "next/router";
import { useEffect } from "react";
import * as s from "./footer.styles";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function FooterPage() {
  useEffect(() => {
    //  먼저 만들어주기
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=c45b57c60e36a494c3491eb508bb9172&autoload=false";
    document.head.appendChild(script);

    //  script가 로드가 되면 안에 있는 거 실행시켜
    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
        const options = {
          // 지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(
            37.484892346669064,
            126.89653480580691
          ), // 지도의 중심좌표.
          level: 3, // 지도의 레벨(확대, 축소 정도)
        };

        const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴

        const imageSrc = "/userLayout/mapMarker.png";
        const imageSize = new window.kakao.maps.Size(64, 69); // 마커이미지의 크기입니다
        const imageOption = { offset: new window.kakao.maps.Point(27, 69) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

        // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
        const markerImage = new window.kakao.maps.MarkerImage(
          imageSrc,
          imageSize,
          imageOption
        );
        const markerPosition = new window.kakao.maps.LatLng(
          37.484892346669064,
          126.89653480580691
        ); // 마커가 표시될 위치입니다

        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
          image: markerImage, // 마커이미지 설정
        });

        marker.setMap(map);

        const content =
          '<div class ="label"><span class="left"></span><span><img src="/userLayout/Code.camp.png" class="center" style="margin-top: 0.266rem"/></span><span class="right"></span></div>';

        const position = new window.kakao.maps.LatLng(
          37.484892346669064,
          126.89653480580691
        );

        const customOverlay = new window.kakao.maps.CustomOverlay({
          position: position,
          content: content,
        });

        customOverlay.setMap(map);
      });
    };
  }, []);

  const router = useRouter();

  const onClickMovePage = (page: string) => () => {
    router.push(page);
  };

  return (
    <>
      <s.Wrraper>
        {" "}
        <s.FooterBody>
          <s.Logo src="/userLayout/footerLogo.png" />
          <s.InnerWrapper>
            <s.FooterBodyLeft>
              <s.Site style={{ marginBottom: "1.4rem" }}>
                <s.SiteTitle style={{ marginRight: "1.733rem" }}>
                  Family site
                </s.SiteTitle>
                <s.SiteBody style={{ marginRight: "1.4rem" }}>
                  커리큘럼 소개
                </s.SiteBody>
                <s.SiteBody>FAQ</s.SiteBody>
              </s.Site>
              <s.Site style={{ marginBottom: "2rem" }}>
                <s.SiteTitle style={{ marginRight: "2rem" }}>
                  Operating
                </s.SiteTitle>
                <s.SiteBody style={{ marginRight: "1.4rem" }}>
                  <s.Span>운영 시간</s.Span> AM 09:30 ~ PM:06:30
                </s.SiteBody>
              </s.Site>
              <s.Site>
                <s.SiteBody style={{ marginBottom: "0.1rem" }}>
                  <s.Span>(주)딩코</s.Span>
                  {"\u00a0"} | {"\u00a0"}
                  <s.Span>대표</s.Span>
                  {"\u00a0"} 안우엽
                </s.SiteBody>
              </s.Site>
              <s.Site>
                <s.SiteBody style={{ marginBottom: "0.1rem" }}>
                  <s.Span>이메일</s.Span> {"\u00a0"} support@codebootcamp.co.kr
                </s.SiteBody>
              </s.Site>
              <s.Site>
                <s.SiteBody style={{ marginBottom: "0.1rem" }}>
                  <s.Span>사업자번호</s.Span> {"\u00a0"} 717-81-02373
                </s.SiteBody>
              </s.Site>
              <s.Site>
                <s.SiteBody style={{ marginBottom: "0.933rem" }}>
                  <s.Span>통신 판매업 신고 번호</s.Span> {"\u00a0"} 제
                  2022-서울구로-1278호
                </s.SiteBody>
              </s.Site>
              <s.Site>Copyright © 2022. Dingco Co., Ltd.</s.Site>
            </s.FooterBodyLeft>
            <s.FooterBodyRight>
              <s.Site style={{ marginBottom: "1.4rem" }}>
                <s.SiteTitle style={{ marginRight: "2.666rem" }}>
                  Site map
                </s.SiteTitle>
                <s.SiteBody
                  style={{ marginRight: "1.4rem", cursor: "pointer" }}
                  onClick={onClickMovePage("/mypage/dashboard")}
                >
                  마이페이지
                </s.SiteBody>
                <s.SiteBody
                  onClick={onClickMovePage("/community/qnas")}
                  style={{ cursor: "pointer" }}
                >
                  커뮤니티
                </s.SiteBody>
              </s.Site>
              <s.Site style={{ marginBottom: "1.4rem" }}>
                <s.SiteTitle style={{ marginRight: "2.066rem" }}>
                  Follows up
                </s.SiteTitle>
                <s.SiteBody style={{ marginRight: "2.666rem" }}>
                  <s.Img src="/userLayout/Facebook.png" />
                </s.SiteBody>
                <s.SiteBody style={{ marginRight: "2.666rem" }}>
                  <s.Img src="/userLayout/Instagram.png" />
                </s.SiteBody>
                <s.SiteBody>
                  <s.Img src="/userLayout/Youtube.png" />
                </s.SiteBody>
              </s.Site>
              <s.Site style={{ marginBottom: "2rem" }}>
                <s.SiteTitle style={{ marginRight: "3.266rem" }}>
                  Address
                </s.SiteTitle>
                <s.SiteBody style={{ marginRight: "1.333rem" }}>
                  <s.Span>도로명 주소</s.Span>
                </s.SiteBody>
                <s.SiteBody>
                  서울특별시 구로구 디지털로 300(구로동),
                  <br /> 패스트파이브 구로점 13층
                </s.SiteBody>
              </s.Site>
              <s.Site style={{ marginBottom: "2rem" }}>
                <s.SiteBody
                  style={{
                    marginRight: "1.333rem",
                    marginLeft: "8rem",
                    width: "5.333rem",
                  }}
                >
                  <s.Span>지번 주소</s.Span>
                </s.SiteBody>
                <s.SiteBody>
                  서울특별시 구로구 구로동 188-25 지밸리
                  <br /> 비즈플라자, 패스트파이브 구로점 13층
                </s.SiteBody>
              </s.Site>
            </s.FooterBodyRight>
          </s.InnerWrapper>
        </s.FooterBody>
        <s.MapDiv>
          {/* <s.MapImg src="/userLayout/map.png" /> */}
          <s.Map id="map"></s.Map>
          {/* <s.MarkImg src="/userLayout/marker.png" /> */}
        </s.MapDiv>
      </s.Wrraper>
    </>
  );
}
