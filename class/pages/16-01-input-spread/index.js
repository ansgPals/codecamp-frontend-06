// import axios from 'axios'
import { useState } from "react";
import { useMutation, gql } from "@apollo/client";

const CRATE_BOARD = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  // const [myWriter, setMyWriter] = useState("");
  // const [myTitle, setMyTitle] = useState("");
  // const [myContents, setMyContents] = useState("");

  const [inputs, setInputs] = useState({
    writer: "",
    contents: "",
    title: "",
  });

  const [data, setData] = useState("");
  const [callApi] = useMutation(CRATE_BOARD);

  const CallGraphqlApi = async () => {
    const result = await callApi({
      variables: {
        // writer: inputs.writer,
        // title: inputs.title,
        // contents: inputs.Contents
        ...inputs,
      },
    });
    console.log(result);
    console.log(result.data.createBoard.message);
    setData(result.data.createBoard.message);
  };
  // const onChangeWriter = (event) => {
  //   // setInputs.writer(event.target.value);
  //   setInputs({
  //     // writer: event.target.value,
  //     // title: inputs.title,
  //     // contents: inputs.contents,
  //     ...inputs,
  //    [event.target.id] : event.target.value,
  //   });
  // };
  // const onChangeTitle = (event) => {
  //   // setMyTitle(event.target.value);
  //   setInputs({ ...inputs, [event.target.id]: event.target.value,});
  // };

  // const onChangeContents = (event) => {
  //   // setMyContents(event.target.value);
  //   setInputs({...inputs, [event.target.id] : event.target.value,});
  // };

  const onChangeInput = (event) => {
    setInputs({ ...inputs, [event.target.id]: event.target.value });
  };

  return (
    <>
      작성자 :<input type={"text"} id="writer " onChange={onChangeInput} />
      <br />
      제목 :<input type={"text"} id="title" onChange={onChangeInput} />
      <br />
      내용 :<input type={"text"} id="contents" onChange={onChangeInput} />
      <button onClick={CallGraphqlApi}> Graphql API 요청하기</button>
    </>
  );
}
