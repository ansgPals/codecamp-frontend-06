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
import {
  IMutation,
  IMutationCreateBoardArgs,
  IMutationUpdateBoardArgs,
} from "../../../../commons/types/generated/types";

export default function NewBoard(props: INewBoardConProps) {
  const [isActive, setIsActive] = useState(false);
  const [newId, setNewId] = useState<any>("");

  const [youtubeUrl, setYoutubeUrl] = useState("");

  const [inputs, setInputs] = useState({
    writer: "",
    password: "",
    title: "",
    contents: "",
  });

  const [inputsErr, setInputsErr] = useState({
    nameErr: "",
    passErr: "",
    titleErr: "",
    textErr: "",
  });

  const [boardAddress, setBoardAddress] = useState({
    zipcode: "",
    address: "",
    addressDetail: "",
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

  const onClickPostNumber = () => {
    onModalOpen();
  };

  const clickPostNumber = (data: any) => {
    console.log(data);
    setBoardAddress({
      ...boardAddress,
      zipcode: data.zonecode,
      address: data.address,
    });

    onModalOpen();
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

  const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setInputs({ ...inputs, [event.target.id]: event.target.value });
    if (
      (props.isEdit === true && inputs.password !== "") ||
      (event.target.value !== "" &&
        inputs.password !== "" &&
        inputs.title !== "" &&
        inputs.contents !== "")
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
    if (event.target.value !== "") {
      setInputsErr({ ...inputsErr, nameErr: "" });
    }
  };

  // Object.values(inputs).forEach((el) => {
  //   if (el !== "") {
  //     console.log(true);
  //   } else {
  //     console.log(false);
  //   }
  // });

  const onChangePass = (event: ChangeEvent<HTMLInputElement>) => {
    setInputs({ ...inputs, [event.target.id]: event.target.value });
    if (
      (props.isEdit === true && event.target.value !== "") ||
      (event.target.value !== "" &&
        inputs.writer !== "" &&
        inputs.title !== "" &&
        inputs.contents !== "")
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
    if (event.target.value !== "") {
      setInputsErr({ ...inputsErr, passErr: "" });
    }
  };

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setInputs({ ...inputs, [event.target.id]: event.target.value });
    if (
      (props.isEdit === true && inputs.password !== "") ||
      (event.target.value !== "" &&
        inputs.password !== "" &&
        inputs.writer !== "" &&
        inputs.contents !== "")
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
    if (event.target.value !== "") {
      setInputsErr({ ...inputsErr, titleErr: "" });
    }
  };

  const onChangeText = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setInputs({ ...inputs, [event.target.id]: event.target.value });
    if (
      (props.isEdit === true && inputs.password !== "") ||
      (event.target.value !== "" &&
        inputs.password !== "" &&
        inputs.title !== "" &&
        inputs.writer !== "")
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
    if (event.target.value !== "") {
      setInputsErr({ ...inputsErr, textErr: "" });
    }
  };

  const onChangeAddressDetail = (event: ChangeEvent<HTMLInputElement>) => {
    setBoardAddress({ ...boardAddress, addressDetail: event.target.value });
  };

  const onChangeYoutube = (event: ChangeEvent<HTMLInputElement>) => {
    setYoutubeUrl(event.target.value);
  };

  const PutOk = async () => {
    if (inputs.writer === "") {
      inputsErr.nameErr = "이름을 입력하세요";
      console.log(inputsErr);
    }
    if (inputs.password === "") {
      inputsErr.passErr = "비밀번호를";
    }
    if (inputs.title === "") {
      inputsErr.titleErr = "제목을 입력하세요";
    }

    if (inputs.contents === "") {
      setInputsErr({ ...inputsErr, textErr: "내용을 입력하세요" });
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
              youtubeUrl: youtubeUrl,
              boardAddress: { ...boardAddress },
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
    router.push(`/boards/${newId}`);
  };

  const EditOk = async () => {
    if (!inputs.writer && !inputs.contents) {
      EditModalOpen();
      return;
    }
    if (inputs.password === "") {
      setInputsErr({ ...inputsErr, passErr: "비밀번호를 입력하세요" });
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
    if (youtubeUrl !== "") myUpdateBoardInput.youtubeUrl = youtubeUrl;

    if (
      boardAddress.address ||
      boardAddress.zipcode ||
      boardAddress.addressDetail
    ) {
      myUpdateBoardInput.boardAddress = {};
      if (boardAddress.zipcode)
        myUpdateBoardInput.boardAddress.zipcode = boardAddress.zipcode;
      if (boardAddress.address)
        myUpdateBoardInput.boardAddress.address = boardAddress.address;
      if (boardAddress.addressDetail)
        myUpdateBoardInput.boardAddress.addressDetail =
          boardAddress.addressDetail;
    }

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

  return (
    <NewBoardUI
      onChangeName={onChangeName}
      onChangePass={onChangePass}
      onChangeTitle={onChangeTitle}
      onChangeText={onChangeText}
      inputsErr={inputsErr}
      PutOk={PutOk}
      isActive={isActive}
      isEdit={props.isEdit}
      EditOk={EditOk}
      data={props.data}
      onChangeYoutube={onChangeYoutube}
      onClickPostNumber={onClickPostNumber}
      onModalOpen={onModalOpen}
      modalOpen={modalOpen}
      clickPostNumber={clickPostNumber}
      onChangeAddressDetail={onChangeAddressDetail}
      boardAddress={boardAddress}
      okModalOpen={okModalOpen}
      onOkModalOpen={onOkModalOpen}
      Exit={Exit}
      EditModalOpen={EditModalOpen}
      noEditModal={noEditModal}
      pass={inputs.password}
    />
  );
}
