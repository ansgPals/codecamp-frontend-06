import { useRouter } from "next/router";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import NewBoardUI from "./boardWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./boardWrite.queries";
import { ChangeEvent } from "react";
import {
  IMyVariables,
  INewBoardConProps,
  IUpDateBoardInput,
} from "./boardWrite.types";
import { Content } from "antd/lib/layout/layout";
import {
  IMutation,
  IMutationCreateBoardArgs,
  IMutationUpdateBoardArgs,
} from "../../../../commons/types/generated/types";

export default function NewBoard(props: INewBoardConProps) {
  // 여기는 자바스크립트 쓰는곳!
  const [isActive, setIsActive] = useState(false);
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [address, setAddress] = useState("");
  const [youTube, setYouTube] = useState("");

  const [nameErr, setNameErr] = useState("");
  const [passErr, setPassErr] = useState("");
  const [titleErr, setTitleErr] = useState("");
  const [textErr, setTextErr] = useState("");

  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);
  const [updateBoard] = useMutation<
    Pick<IMutation, "updateBoard">,
    IMutationUpdateBoardArgs
  >(UPDATE_BOARD);
  const router = useRouter();

  const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
    if (
      (props.isEdit === true && pass !== "") ||
      (event.target.value !== "" && pass !== "" && title !== "" && text !== "")
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
    if (event.target.value !== "") {
      setNameErr("");
    }
  };
  const onChangePass = (event: ChangeEvent<HTMLInputElement>) => {
    setPass(event.target.value);
    if (
      (props.isEdit === true && event.target.value !== "") ||
      (name !== "" && event.target.value !== "" && title !== "" && text !== "")
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
    if (event.target.value !== "") {
      setPassErr("");
    }
  };

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
    if (
      (props.isEdit === true && pass !== "") ||
      (name !== "" && pass !== "" && event.target.value !== "" && text !== "")
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
    if (event.target.value !== "") {
      setTitleErr("");
    }
  };

  const onChangeText = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
    if (
      (props.isEdit === true && pass !== "") ||
      (name !== "" && pass !== "" && title !== "" && event.target.value !== "")
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
    if (event.target.value !== "") {
      setTextErr("");
    }
  };

  const onChangeAddress = (event: ChangeEvent<HTMLInputElement>) => {
    setAddress(event.target.value);
  };

  const onChangeYoutube = (event: ChangeEvent<HTMLInputElement>) => {
    setYouTube(event.target.value);
  };

  const PutOk = async () => {
    if (name === "") {
      setNameErr("이름을 입력하세요");
    }
    if (pass === "") {
      setPassErr("비밀번호를 입력하세요.");
    }
    if (title === "") {
      setTitleErr("내용를 입력하세요.");
    }

    if (text === "") {
      setTextErr("내용을 입력하세요.");
    }

    if (name !== "" && pass !== "" && title !== "" && text !== "") {
      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              writer: name,
              password: pass,
              title: title,
              contents: text,
              youtubeUrl: youTube,
            },
          },
        });
        console.log(result.data?.createBoard._id);
        alert("게시물등록완료");
        // let IDpass = result.data?.createBoard._id;
        router.push(`/boards/${result.data?.createBoard._id}`);
      } catch (error: any) {
        console.log(error.message);
      }
    }
  };

  const EditOk = async () => {
    if (!title && !text) {
      alert("수정한 내용이없습니다.");
      return;
    }
    if (pass === "") {
      setPassErr("비밀번호를 입력하세요.");
      alert("비밀번호를 입력하세요.");
      return;
    }

    const myUpdateBoardInput: IUpDateBoardInput = {};

    const myVariables: IMyVariables = {
      boardId: router.query.boardId,
      password: pass,
      updateBoardInput: myUpdateBoardInput,
    };
    if (title) myUpdateBoardInput.title = title;
    if (text) myUpdateBoardInput.contents = text;
    if (youTube !== "") myUpdateBoardInput.youtubeUrl = youTube;

    // if(title !=="") myVariables.updateBoardInput.title = title
    // if(text !=="") myVariables.updateBoardInput.contents = text

    try {
      await updateBoard({
        variables: myVariables,
      });

      alert("게시물수정완료");
      router.push(`/boards/${router.query.boardId}`);
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  //   } catch (error) {
  //     console.log(error.message)
  //   }
  // }}

  return (
    <NewBoardUI
      onChangeName={onChangeName}
      nameErr={nameErr}
      onChangePass={onChangePass}
      passErr={passErr}
      onChangeTitle={onChangeTitle}
      titleErr={titleErr}
      onChangeText={onChangeText}
      textErr={textErr}
      onChangeAddress={onChangeAddress}
      PutOk={PutOk}
      isActive={isActive}
      isEdit={props.isEdit}
      EditOk={EditOk}
      data={props.data}
      onChangeYoutube={onChangeYoutube}
    />
  );
}
