import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../src/commons/types/generated/types";

export const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;
const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function ImageUploadPreviewPage() {
  const [files, setFiles] = useState<(File | undefined)[]>([
    undefined,
    undefined,
    undefined,
  ]);

  const [imgUrls, setImgUrls] = useState(["", "", ""]);
  const [createBoard] = useMutation(CREATE_BOARD);
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const onChangfile =
    (number: number) => (event: ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (!file) {
        alert("파일이 없습니다.");
        return;
      }
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      // Blob 은 바이러니 라이오브젝트
      fileReader.onload = (data) => {
        if (typeof data.target?.result === "string") {
          const tempUrls = [...imgUrls];
          tempUrls[number] = data.target?.result;

          setImgUrls(tempUrls);

          const tempFiles = [...files];
          tempFiles[number] = file;
          setFiles(tempFiles);
        }
      };
    };
  const onClickSubmit = async () => {
    const results = await Promise.all(
      files.map(
        (el) => el && uploadFile({ variables: { file: el } })
        //  return el? uploadFile({ variables: { file: el } }) : undefined
      )
    );

    const resultUrls = results.map((el) =>
      el?.data ? el?.data?.uploadFile.url : ""
    );

    const result2 = await createBoard({
      variables: {
        createBoardInput: {
          writer: "훈이",
          password: "1234",
          title: "츄르를 촵촵",
          contents: "마시또",
          images: resultUrls,
        },
      },
    });
    console.log(result2.data.createBoard._id);
  };
  return (
    <div>
      <input type="file" onChange={onChangfile(0)} />
      <input type="file" onChange={onChangfile(1)} />
      <input type="file" onChange={onChangfile(2)} />

      <img src={imgUrls[0]} />
      <img src={imgUrls[1]} />
      <img src={imgUrls[2]} />

      <button onClick={onClickSubmit}>게시글등록하기</button>
    </div>
  );
}
