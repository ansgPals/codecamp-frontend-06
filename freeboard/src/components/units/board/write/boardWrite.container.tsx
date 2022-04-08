import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { useMutation } from "@apollo/client";
import NewBoardUI from "./boardWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD, UPLOAD_FILE } from "./boardWrite.queries";
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
import { ImgUpload } from "../libraries/ImgUpload";
import { checkFileValidation } from "../libraries/validation";
import { Modal } from "antd";

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
    writer: "",
    password: "",
    title: "",
    contents: "",
  });

  const [boardAddress, setBoardAddress] = useState({
    zipcode: "",
    address: "",
    addressDetail: "",
  });

  const [img, setImg] = useState<string | undefined>("");
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);
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

  const onChangeAddressDetail = (event: ChangeEvent<HTMLInputElement>) => {
    setBoardAddress({ ...boardAddress, addressDetail: event.target.value });
  };

  const onChangeYoutube = (event: ChangeEvent<HTMLInputElement>) => {
    setYoutubeUrl(event.target.value);
  };

  const OnChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    console.log(file);
    // ---------검증-----
    const isValid = checkFileValidation(file);
    if (!isValid) return;
    console.log("오웅");
    try {
      const result = await uploadFile({ variables: { file } });
      console.log("요깅" + result.data?.uploadFile.url);
      setImg(String(result.data?.uploadFile.url));
    } catch (error: any) {
      Modal.error({ content: error.massage });
    }
  };
  const OnClickImg = () => {
    fileRef.current?.click();
  };

  const PutOk = async () => {
    if (inputs.writer === "") {
      inputsErr.writer = "이름을 입력하세요";
      console.log(inputsErr);
    }
    if (inputs.password === "") {
      inputsErr.password = "비밀번호를";
    }
    if (inputs.title === "") {
      inputsErr.title = "제목을 입력하세요";
    }

    if (inputs.contents === "") {
      setInputsErr({ ...inputsErr, contents: "내용을 입력하세요" });
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
              images: [String(img)],
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
      onChangeInputs={onChangeInputs}
      OnChangeFile={OnChangeFile}
      fileRef={fileRef}
      OnClickImg={OnClickImg}
      img={img}
    />
  );
}
