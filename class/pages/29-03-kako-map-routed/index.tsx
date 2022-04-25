import Head from "next/head";
import { useEffect } from "react";

declare const window: typeof globalThis & {
  kakao: any;
};
export default function KakaoMapPage() {
  useEffect(() => {
    // 스크립트 태그 받고, 기다리고, 실행
    const script = document.createElement("script"); // <script></script> 가 만들어짐
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=33ef8475c110df9774777d3f114027bb&autoload=false";
    document.head.appendChild(script);
    // html head태그에 내가만든 script라는 자식을 추가해줘

    script.onload = () => {
      // 스크립트가 로드가 되면 실행해줘

      window.kakao.maps.load(function () {
        // 카카오맵 로드되면 실행해줘
        const container = document.getElementById("map");
        // 지도를 담을 영역의 DOM 레퍼런스
        const options = {
          center: new kakao.maps.LatLng(33.450701, 126.570667),
          // 지도의 중심좌표.
          level: 3,
          // 지도의 레벨(확대, 축소 정도)
        };
        const map = new window.kakao.maps.Map(container, options);
        const markerPosition = new window.kakao.maps.LatLng(
          33.450701,
          126.570667
        );
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });
        marker.setMap(map);

        // 지도 생성 및 객체 리턴
      });
    };
  }, []);

  return (
    <div>
      {/* <Head>
        <script
          type="text/javascript"
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=33ef8475c110df9774777d3f114027bb"
        ></script>
      </Head> */}
      <div id="map" style={{ width: "500px", height: "400px" }}></div>
    </div>
  );
}
