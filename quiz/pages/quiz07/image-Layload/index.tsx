// import { useEffect, useRef, useState } from "react";

// export default function ImagePreloadPage() {
//   const [imgTag, setImgTag] = useState<HTMLImageElement>();
//   const divRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const img = new Image();
//     img.src =
//       "http://dlselwkdlsadmin.cafe24.com/wp-content/uploads/2018/01/w02_07_03-1.jpg";
//     img.onload = () => {
//       setImgTag(img);
//     };
//   }, []);

//   const onClickPreload = () => {
//     if (imgTag) divRef.current?.appendChild(imgTag);
//     // document.getElementById("aaa")?.appendChild(imgTag)
//   };

//   return (
//     <div>
//       <div ref={divRef} />
//       <button onClick={onClickPreload}>프리로드</button>
//       {/* 육안상 이게 빠르다. 모든코드에 다 프리로드를 거는것은 코드 낭비이지만 랜딩페이지 같은곳의 사진 파일이 크다면 이걸 적용 해보면 좋을 듯하다. */}
//     </div>
//   );
// }

import ReactDOM from "react-dom";
import LazyLoad from "react-lazyload";

export default function AppPage() {
  return (
    <div className="list">
      <LazyLoad height={200}>
        <img src="/씨티.jpeg" />{" "}
      </LazyLoad>
      <LazyLoad height={200} once></LazyLoad>
      <img src="/씨티.jpeg" /> <LazyLoad height={200} offset={100}></LazyLoad>
      <img src="/씨티.jpeg" />{" "}
      <img src="http://dlselwkdlsadmin.cafe24.com/wp-content/uploads/2018/01/w02_07_03-1.jpg" />{" "}
      <img src="/씨티.jpeg" />{" "}
      <img src="http://dlselwkdlsadmin.cafe24.com/wp-content/uploads/2018/01/w02_07_03-1.jpg" />{" "}
      <img src="/씨티.jpeg" />{" "}
      <img src="http://dlselwkdlsadmin.cafe24.com/wp-content/uploads/2018/01/w02_07_03-1.jpg" />{" "}
      <img src="/씨티.jpeg" />{" "}
      <LazyLoad>
        <img src="/씨티.jpeg" /> <img src="/씨티.jpeg" />{" "}
        <img src="/씨티.jpeg" /> <img src="/씨티.jpeg" />{" "}
        <img src="/씨티.jpeg" />{" "}
      </LazyLoad>
    </div>
  );
}
