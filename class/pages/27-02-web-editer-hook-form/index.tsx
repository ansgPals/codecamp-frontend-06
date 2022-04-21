// import ReactQuill from "react-quill"; // ES6
import "react-quill/dist/quill.snow.css"; // ES6
import dynamic from "next/dynamic";
import { useForm } from "react-hook-form";

// ssr=서버사이드랜더링

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function WedEditerHookFormPage() {
  const { register, handleSubmit, setValue, trigger } = useForm({
    mode: "onChange",
  });

  // 웹에디터의 온체인지는 리액트퀼 자체엤는 온체인지임 html과 다른 온체인지이다.
  const onChangeContents = (value) => {
    console.log(value);
    setValue("contents", value === "<p><br></p>" ? "" : value);
    trigger("contents");
    // 온체인지 됐다고 리액트폼에 알려주는 기능
  };

  // 레지스터로 등록하지 않고 강제로 값을 넣어주는 방법
  const onClickSubmit = () => {};

  return (
    <div>
      <form onSubmit={handleSubmit(onClickSubmit)}></form>
      내용:
      <input type="text" {...register("writer")} />
      <br />
      비밀번호:
      <input type="password" {...register("password")} />
      <br />
      제목:
      <input type="text" {...register("title")} />
      <br />
      내용:
      {typeof window !== "undefined" && (
        <ReactQuill onChange={onChangeContents} />
      )}
      <br />
      <button>등록하기</button>
    </div>
  );
}
