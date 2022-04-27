import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
import styled from "@emotion/styled";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../../src/commons/types/generated/types";

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
const FormBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export default function ImageUploadPreviewPage() {
  const { register, handleSubmit } = useForm({
    mode: "onChange",
  });

  const [file1, setFile1] = useState<File>();

  const [imgUrl, setImgUrl] = useState("");
  const [createBoard] = useMutation(CREATE_BOARD);
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const onChengfile = (event: ChangeEvent<HTMLInputElement>) => {
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
        console.log(data.target?.result);
        setImgUrl(data.target?.result);
        setFile1(file);
      }
    };
  };
  const onClickSubmit = async (data) => {
    const result1 = await uploadFile({ variables: { file: file1 } });
    const imgUrl = result1.data?.uploadFile.url;
    const result2 = await createBoard({
      variables: {
        createBoardInput: {
          writer: data.writer,
          password: data.password,
          title: data.title,
          contents: data.contents,
          images: [imgUrl],
        },
      },
    });
  };
  return (
    <div>
      <input type="file" onChange={onChengfile} />
      <img src={imgUrl} />

      <form onSubmit={handleSubmit(onClickSubmit)}>
        <FormBox>
          작성자: <input type="text" {...register("writer")} />
          <br />
          비밀번호: <input type="password" {...register("password")} />
          <br />
          제목: <input type="text" {...register("title")} />
          <br />
          내용: <input type="text" {...register("contents")} />
          <br />
          <button>등록하기</button>
        </FormBox>
      </form>
    </div>
  );
}
