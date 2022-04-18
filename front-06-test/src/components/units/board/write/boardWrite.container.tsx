import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { useMutation } from "@apollo/client";
import NewBoardUI from "./boardWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./boardWrite.queries";
import { ChangeEvent } from "react";
import {
  IMyVariables,
  INewBoardConProps,
  IUpDateBoardInput,
} from "./boardWrite.types";
import {
  IMutation,
  IMutationCreateBoardArgs,
  IMutationUpdateBoardArgs,
  IMutationUploadFileArgs,
} from "../../../../commons/types/generated/types";

export default function NewBoard(props: INewBoardConProps) {
  const [isActive, setIsActive] = useState(false);
  const [newId, setNewId] = useState<any>("");
  const [fileUrls, setFileUrls] = useState(["", "", ""]);

  const [inputs, setInputs] = useState({
    writer: "",
    password: "",
    title: "",
    contents: "",
  });

  const [inputsErr, setInputsErr] = useState({
    writer: "",
    password: "",
    title: "",
    contents: "",
  });

  const [okModalOpen, setOkModalOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [noEditModal, setNoEditModal] = useState(false);
  const onOkModalOpen = () => {
    setOkModalOpen((prev) => !prev);
  };
  const EditModalOpen = () => {
    setNoEditModal((prev) => !prev);
  };

  const onModalOpen = () => {
    setModalOpen((prev) => !prev);
  };

  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);
  const [updateBoard] = useMutation<
    Pick<IMutation, "updateBoard">,
    IMutationUpdateBoardArgs
  >(UPDATE_BOARD);
  const router = useRouter();

  const onChangeInputs = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const newInputs = { ...inputs, [event.target.id]: event.target.value };
    setInputs(newInputs);

    if (event.target.value)
      setInputsErr((prev) => ({ ...prev, [event.target.id]: "" }));

    const isActive = Object.values(newInputs).every((el) => el);
    if (isActive || (props.isEdit && inputs.password)) setIsActive(isActive);
  };

  const onChangeFileUrls = (fileUrl: string, index: number) => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  };

  const PutOk = async () => {
    if (inputs.writer === "") {
      inputsErr.writer = "이름을 입력해주세요";
      console.log(inputsErr);
    }
    if (inputs.password === "") {
      inputsErr.password = "비밀번호를 입력해주세요";
    }
    if (inputs.title === "") {
      inputsErr.title = "제목을 입력해주세요";
    }

    if (inputs.contents === "") {
      setInputsErr({ ...inputsErr, contents: "내용을 입력해주세요" });
    }

    if (
      inputs.contents !== "" &&
      inputs.password !== "" &&
      inputs.title !== "" &&
      inputs.writer !== ""
    ) {
      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              ...inputs,
              images: fileUrls,
            },
          },
        });
        console.log(result.data?.createBoard._id);
        setNewId(result.data?.createBoard._id);
        onOkModalOpen();
      } catch (error: any) {
        console.log(error.message);
      }
    }
  };
  const Exit = () => {
    props.isEdit
      ? router.push(`/boards/${router.query.boardId}`)
      : router.push(`/boards/${newId}`);
  };

  const EditOk = async () => {
    const currentFiles = JSON.stringify(fileUrls);
    const defaultFiles = JSON.stringify(props.data.fetchBoard.images);
    const isChangedFiles = currentFiles !== defaultFiles;

    if (!inputs.writer && !inputs.contents) {
      EditModalOpen();
      return;
    }
    if (inputs.password === "") {
      setInputsErr({ ...inputsErr, password: "비밀번호를 입력하세요" });
      alert("비밀번호를 입력하세요.");
      return;
    }

    const myUpdateBoardInput: IUpDateBoardInput = {};

    const myVariables: IMyVariables = {
      boardId: router.query.boardId,
      password: inputs.password,
      updateBoardInput: myUpdateBoardInput,
    };
    if (inputs.title) myUpdateBoardInput.title = inputs.title;
    if (inputs.contents) myUpdateBoardInput.contents = inputs.contents;
    if (isChangedFiles) myUpdateBoardInput.images = fileUrls;

    try {
      await updateBoard({
        variables: myVariables,
      });
      onOkModalOpen();
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  useEffect(() => {
    if (props.data?.fetchBoard.images?.length) {
      setFileUrls([...props.data?.fetchBoard.images]);
    }
  }, [props.data]);

  const onClickExit = () => {
    router.push(`/`);
  };

  return (
    <NewBoardUI
      inputsErr={inputsErr}
      PutOk={PutOk}
      isActive={isActive}
      isEdit={props.isEdit}
      EditOk={EditOk}
      data={props.data}
      onModalOpen={onModalOpen}
      modalOpen={modalOpen}
      okModalOpen={okModalOpen}
      onOkModalOpen={onOkModalOpen}
      Exit={Exit}
      EditModalOpen={EditModalOpen}
      noEditModal={noEditModal}
      pass={inputs.password}
      onChangeInputs={onChangeInputs}
      onChangeFileUrls={onChangeFileUrls}
      fileUrls={fileUrls}
      onClickExit={onClickExit}
    />
  );
}
