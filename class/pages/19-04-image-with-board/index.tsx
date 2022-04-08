// import axios from 'axios'
import { useMutation, gql } from "@apollo/client";
import { Modal } from "antd";
import { ChangeEvent, useRef, useState } from "react";
import { checkFileValidation } from "../../src/commons/libraries/validation";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../src/commons/types/generated/types";

const CRATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
      images
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

export default function GraphqlMutationPage() {
  const [myWriter, setMyWriter] = useState("");
  const [myTitle, setMyTitle] = useState("");
  const [myContents, setMyContents] = useState("");
  const [myPassWord, setMyPassWord] = useState("");
  const [data, setData] = useState("");
  const [callApi] = useMutation(CRATE_BOARD);
  const fileRef = useRef<HTMLInputElement>(null);
  const [imgUrl, setImgUrl] = useState<string | undefined>("");
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const CallGraphqlApi = async () => {
    const result = await callApi({
      variables: {
        createBoardInput: {
          writer: myWriter,
          password: myPassWord,
          title: myTitle,
          contents: myContents,
          images: imgUrl,
        },
      },
    });
    setData(result.data.createBoard.message);
  };
  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setMyWriter(event.target.value);
  };
  const onChangePassWord = (event: ChangeEvent<HTMLInputElement>) => {
    setMyPassWord(event.target.value);
  };
  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setMyTitle(event.target.value);
  };

  const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
    setMyContents(event.target.value);
  };
  const OnChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    console.log(file);
    // ---------검증-----
    const isValid = checkFileValidation(file);
    if (!isValid) return;

    try {
      const result = await uploadFile({ variables: { file } });
      console.log(result.data?.uploadFile.url);
      setImgUrl(result.data?.uploadFile.url);
    } catch (error: any) {
      Modal.error({ content: error.massage });
    }
  };
  const OnClickImg = () => {
    fileRef.current?.click();
  };

  return (
    <>
      {/* <div>{data}</div> */}
      작성자 :<input type={"text"} onChange={onChangeWriter} />
      <br />
      비밀번호 :<input type={"text"} onChange={onChangePassWord} />
      <br />
      제목 :<input type={"text"} onChange={onChangeTitle} />
      <br />
      내용 :<input type={"text"} onChange={onChangeContents} />
      <div>
        <div>이미지업로드 연습하기</div>
        <div
          style={{
            width: "150px",
            height: "150px",
            backgroundColor: "pink",
            fontSize: "30px",
            cursor: "pointer",
          }}
          onClick={OnClickImg}
        >
          이미지 선택
        </div>
        <input
          style={{ display: "none" }}
          type="file"
          onChange={OnChangeFile}
          ref={fileRef}
        />
        {/* multiple하면 여러개 담을 수 있음 */}

        <img src={`https://storage.googleapis.com/${imgUrl}`} />
      </div>
      <button onClick={CallGraphqlApi}> Graphql API 요청하기</button>
    </>
  );
}
