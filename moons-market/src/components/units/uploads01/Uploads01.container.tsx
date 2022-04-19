import { useMutation } from "@apollo/client";
import styled from "@emotion/styled";
import { Modal } from "antd";
import { ChangeEvent, useRef } from "react";
import { UPLOAD_FILE } from "../newProduct/newProduct.query";

import { checkValidationImage } from "./Uploads01.validation";

export const GrayBoxBox = styled.div`
  height: 100px;
  width: 1000px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
export const GrayBox = styled.div`
  height: 78px;
  width: 78px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #bdbdbd;
  margin-right: 20px;
  cursor: pointer;
  border-radius: 20px;
`;

export const ImgBox = styled.img`
  height: 78px;
  width: 78px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  cursor: pointer;
`;

export const MyPlus = styled.div`
  font-size: 12px;
  color: #4f4f4f;
`;
export const MyUpload = styled.div`
  font-size: 12px;
  color: #4f4f4f;
`;
export interface IUploads01Props {
  index: number;
  fileUrl: string;
  defaultFileUrl?: string;
  onChangeFileUrls: (fileUrl: string, index: number) => void;
}

// export interface IUploads01UIProps {
//   fileRef: RefObject<HTMLInputElement>;
//   fileUrl: string;
//   defaultFileUrl?: string;
//   onClickUpload: () => void;
//   onChangeFile: (event: ChangeEvent<HTMLInputElement>) => void;
// }

export default function Uploads01(props: IUploads01Props) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploadFile] = useMutation(UPLOAD_FILE);

  const onClickUpload = () => {
    fileRef.current?.click();
  };

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = checkValidationImage(event.target.files?.[0]);
    if (!file) return;

    try {
      const result = await uploadFile({ variables: { file } });
      props.onChangeFileUrls(result.data.uploadFile.url, props.index);
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };
  return (
    <>
      {props.fileUrl ? (
        <ImgBox
          onClick={onClickUpload}
          src={`https://storage.googleapis.com/${props.fileUrl}`}
        />
      ) : (
        <GrayBox onClick={onClickUpload}>
          <MyPlus>+</MyPlus>
          <MyUpload>Upload</MyUpload>
        </GrayBox>
      )}
      <input
        style={{ display: "none" }}
        type="file"
        onChange={onChangeFile}
        ref={fileRef}
      />
    </>
  );
}
