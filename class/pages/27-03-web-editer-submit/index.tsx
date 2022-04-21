// import ReactQuill from "react-quill"; // ES6
// import "react-quill/dist/quill.snow.css"; // ES6
// import dynamic from "next/dynamic";
// import { useForm } from "react-hook-form";
// import { gql, useMutation } from "@apollo/client";
// import { useRouter } from "next/router";
// import { Modal } from "antd";

// const CREATE_BOARD = gql`
//   mutation createBoard($createBoardInput: CreateBoardInput!) {
//     createBoard(createBoardInput: $createBoardInput) {
//       _id
//       writer
//       title
//       contents
//     }
//   }
// `;

// // ssr=서버사이드랜더링

// const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

// export default function WedEditerHookFormSubmitPage() {
//   const [createBoard] = useMutation(CREATE_BOARD);
//   const router = useRouter();
//   const { register, handleSubmit, setValue, trigger } = useForm({
//     mode: "onChange",
//   });

//   // 웹에디터의 온체인지는 리액트퀼 자체엤는 온체인지임 html과 다른 온체인지이다.
//   const onChangeContents = (value: any) => {
//     console.log(value);
//     setValue("contents", value === "<p><br></p>" ? "" : value);
//     trigger("contents");
//     // 온체인지 됐다고 리액트폼에 알려주는 기능
//   };

//   // 레지스터로 등록하지 않고 강제로 값을 넣어주는 방법
//   const onClickSubmit = async (data: any) => {
//     // if (!(data.writer && data.title && data.password && data.contents)) {
//     //   alert("모두 입력해주세요");
//     //   return;
//     // }
//     try {
//       const result = await createBoard({
//         variables: {
//           createBoardInput: {
//             writer: data.writer,
//             title: data.title,
//             contents: data.contents,
//             password: data.password,
//           },
//         },
//       });
//       router.push(`27-04-web-editor-detail/${result.data.createBoard._id}`);
//     } catch (error: any) {
//       Modal.error({ content: error.message });
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit(onClickSubmit)}></form>
//       내용:
//       <input type="text" {...register("writer")} />
//       <br />
//       비밀번호:
//       <input type="password" {...register("password")} />
//       <br />
//       제목:
//       <input type="text" {...register("title")} />
//       <br />
//       내용:
//       {typeof window !== "undefined" && (
//         <ReactQuill onChange={onChangeContents} />
//       )}
//       <br />
//       <button onClick={onClickSubmit}>등록하기</button>
//     </div>
//   );
// }
// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { useForm } from "react-hook-form";
import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

export default function WebEditorPage() {
  const router = useRouter();
  const [createBoard] = useMutation(CREATE_BOARD);

  const { register, handleSubmit, setValue, trigger } = useForm({
    mode: "onChange",
  });
  const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

  const onChangeContents = (value: string) => {
    console.log(value);

    // register로 등록하지 않고 강제로 값을 넣어주는 기능!
    setValue("contents", value === "<p><br></p>" ? "" : value);

    // onChange 됐다고 react-hook-form에 알려주는 기능
    trigger("contents");
  };

  const onClickSubmit = async (data) => {
    if (!data.writer && !data.password && !data.title && !data.contents) {
      Modal.warning({ content: "모두 입력해주세요!" });
      return;
    }

    // 뮤테이션
    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer: data.writer,
            password: data.password,
            title: data.title,
            contents: data.contents,
          },
        },
      });
      router.push(`/27-04-web-editor-detail/${result.data.createBoard._id}`);
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      작성자: <input type="text" {...register("writer")} />
      <br />
      비밀번호: <input type="password" {...register("password")} />
      <br />
      제목: <input type="text" {...register("title")} />
      <br />
      내용: <ReactQuill onChange={onChangeContents} />
      <br />
      <button>등록하기</button>
    </form>
  );
}
