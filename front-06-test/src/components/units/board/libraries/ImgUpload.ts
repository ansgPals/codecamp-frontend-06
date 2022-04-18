import { Modal } from "antd";
import { ChangeEvent } from "react";
import { checkFileValidation } from "./validation";

export const ImgUpload = async (
  event: ChangeEvent<HTMLInputElement>,
  uploadFile: any
) => {
  const file = event.target.files?.[0];
  console.log(file);
  // ---------검증-----
  const isValid = checkFileValidation(file);
  if (!isValid) return;
  console.log("오웅");
  try {
    const result = await uploadFile({ variables: { file } });
    console.log("요깅" + result.data?.uploadFile.url);
    return result.data?.uploadFile.url;
  } catch (error: any) {
    Modal.error({ content: error.massage });
  }
};
