import { firebaseApp } from "../../_app";
import { addDoc, collection, getFirestore } from "firebase/firestore/lite";
import styled from "@emotion/styled";
import { ChangeEvent, useState } from "react";

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
export default function MyFireBaseWrite() {
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const subMit = async () => {
    const board = collection(getFirestore(firebaseApp), "board");
    await addDoc(board, {
      writer: writer,
      title: title,
      contents: contents,
    });
  };
  const onchangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
  };
  const onchangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const onchangeContents = (event: ChangeEvent<HTMLInputElement>) => {
    setContents(event.target.value);
  };
  return (
    <>
      <JustBox>
        <Carrot></Carrot>
        <JustInput
          type={"text"}
          onChange={onchangeWriter}
          placeholder="작성자"
        />
        <JustInput type={"text"} onChange={onchangeTitle} placeholder="제목" />
        <JustInput
          type={"text"}
          onChange={onchangeContents}
          placeholder="내용"
        />

        <JustButton onClick={subMit}>글 등록하기</JustButton>
      </JustBox>
    </>
  );
}
