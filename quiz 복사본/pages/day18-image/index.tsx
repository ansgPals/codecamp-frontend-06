import styled from "@emotion/styled";
import { useRef, useState } from "react";
import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../src/commons/types/generated/types";
import { LikeOutlined } from "@ant-design/icons";

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
export const IMG = styled.img`
  margin-top: 20px;
  height: 500px;
  width: fit-content;
`;
export const Like = styled.button`
  height: 50px;
  width: 50px;
`;

export const Carrot = styled.div`
  background-image: url("/quiz/ca.png");
  width: 160px;
  height: 160px;
  background-size: cover;
  margin-bottom: 50px;
`;

export const JustBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px;
  height: 100%;
  width: 1200px;
  background-color: yellowgreen;
`;
export const JustInput = styled.input`
  width: 900px;
  height: 100px;
  font-size: 30px;
  border-radius: 30px;
  text-align: center;
  margin-top: 20px;
`;
export const JustButton = styled.button`
  margin-top: 30px;
  width: 500px;
  height: 80px;
  border-radius: 10px;
  font-size: 40px;
  color: white;
  background-color: orange;
  cursor: pointer;
  :hover {
    color: #bdbdbd;
    background-color: yellow;
    border: 5px dotted orange;
  }
`;

export default function ProductsWritePage() {
  const [myWriter, setMyWriter] = useState("");
  const [myTitle, setMyTitle] = useState("");
  const [myContents, setMyContents] = useState("");
  const [myPassWord, setMyPassWord] = useState("");
  const [img, setImg] = useState<string | undefined>("");
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);
  const imgRef = useRef(null);

  const [createBoard] = useMutation(CRATE_BOARD);

  const PutWriter = (event) => {
    setMyWriter(event.target.value);
  };
  const PutTitle = (event) => {
    setMyTitle(event.target.value);
  };
  const PutContents = (event) => {
    setMyContents(event.target.value);
  };
  const PutPassWord = (event) => {
    setMyPassWord(event.target.value);
  };
  const onChangeimg = async (event) => {
    const file = event.target.files?.[0];
    const imgFile = await uploadFile({ variables: { file } });
    setImg(imgFile.data?.uploadFile.url);
  };
  const REFClick = () => {
    imgRef.current?.click();
  };

  const ButtonClick = async () => {
    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer: myWriter,
            password: myPassWord,
            title: myTitle,
            contents: myContents,
            images: img,
          },
        },
      });
      alert("글이 등록되었어용!");
    } catch (error) {
      console.log();
    }
  };
  return (
    <>
      <JustBox>
        <Carrot></Carrot>
        <JustInput
          type={"text"}
          onChange={PutWriter}
          placeholder="성함을 적어주세요"
        />
        <JustInput
          type={"text"}
          onChange={PutTitle}
          placeholder="판매하실 물건의 이름을 입력하세요"
        />
        <JustInput
          type={"text"}
          onChange={PutContents}
          placeholder="판매하실 물건의 특징을 설명하세요"
        />
        <JustInput
          type={"text"}
          onChange={PutPassWord}
          placeholder="비밀번호를입력하세요"
        />
        <Like onClick={REFClick}>
          <LikeOutlined />
        </Like>
        <input
          type="file"
          onChange={onChangeimg}
          style={{ display: "none" }}
          ref={imgRef}
        />
        <JustButton onClick={ButtonClick}>글 등록하기</JustButton>
        {img && <IMG src={`https://storage.googleapis.com/${img}`} />}
      </JustBox>
    </>
  );
}
