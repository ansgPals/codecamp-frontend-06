// 33ef8475c110df9774777d3f114027bb

import { useEffect } from "react";
declare const window: typeof global & {
  kakao: any;
};

export default function KakaoMap01Page() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=33ef8475c110df9774777d3f114027bb&autoload=false";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
        const options = {
          center: new window.kakao.maps.LatLng(37.485005, 126.896184), //지도의 중심좌표.
          level: 3,
        };
        const map = new window.kakao.maps.Map(container, options);

        const markerImage = new window.kakao.maps.MarkerImage(
          "/위치.png",
          new window.kakao.maps.Size(50, 50)
        );
        const markerPosition = new window.kakao.maps.LatLng(
          37.485005,
          126.896184
        );

        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
          image: markerImage,
        });

        marker.setMap(map);
        window.kakao.maps.event.addListener(
          map,
          "click",
          function (mouseEvent) {
            // 클릭한 위도, 경도 정보를 가져옵니다
            var latlng = mouseEvent.latLng;

            // 마커 위치를 클릭한 위치로 옮깁니다
            marker.setPosition(latlng);

            let message = "클릭한 위치의 위도는 " + latlng.getLat() + " 이고, ";
            message += "경도는 " + latlng.getLng() + " 입니다";

            let resultDiv = document.getElementById("clickLatlng");
            resultDiv.innerHTML = `${message}`;
          }
        );
      });
    };
  }, []);

  return (
    <>
      {/* <Head>
        <script
          type="text/javascript"
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=33ef8475c110df9774777d3f114027bb"
        ></script>
      </Head> */}
      <div id="map" style={{ width: "500px", height: "400px" }}></div>
      <div
        id="clickLatlng"
        style={{ backgroundColor: "white", marginTop: "20px", color: "green" }}
      ></div>
    </>
  );
}
