import { PlusCircleOutlined } from "@ant-design/icons";
import { useMutation } from "@apollo/client";
import styled from "@emotion/styled";
import { Modal } from "antd";
import { ChangeEvent, useRef } from "react";
import { UPLOAD_FILE } from "../write/boardWrite.queries";
import { checkValidationImage } from "./Uploads01.validation";

export const GrayBox = styled.div`
  height: 80px;
  width: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fafafa;
  margin-right: 20px;
  cursor: pointer;
  border: 1px dashed #e5e5e5;
  border-radius: 5px;
`;

export const ImgBox = styled.img`
  height: 80px;
  width: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  cursor: pointer;
`;

export const MyPlus = styled(PlusCircleOutlined)`
  color: #999999;
  height: 20px;
  width: 20px;
`;

export interface IUploads01Props {
  index: number;
  fileUrl: string;
  defaultFileUrl?: string;
  onChangeFileUrls: (fileUrl: string, index: number) => void;
}

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
          <MyPlus />
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
