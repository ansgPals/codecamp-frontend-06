// import ReactQuill from "react-quill"; // ES6
import "react-quill/dist/quill.snow.css"; // ES6
import dynamic from "next/dynamic";
// ssr=서버사이드랜더링
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function WedEditerPage() {
  // 웹에디터의 온체인지는 리액트퀼 자체엤는 온체인지임 html과 다른 온체인지이다.
  const onChangeContents = (value) => {
    console.log(value);
  };

  const onClickSubmit = () => {};

  return (
    <div>
      제목:
      <input type="text" />
      <br />
      비밀번호:
      <input type="password" />
      <br />
      작성자:
      <input type="text" />
      <br />
      내용:
      {typeof window !== "undefined" && (
        <ReactQuill onChange={onChangeContents} />
      )}
      <br />
      <button onClick={onClickSubmit}>등록하기</button>
    </div>
  );
}
