import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { ChangeEvent, useRef, useState } from "react";
import { checkFileValidation } from "../../src/commons/libraries/validation";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../src/commons/types/generated/types";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;
// 아폴로업로드도 설치하고 앱닷제이에스에서도 설정 손봐줘여함

export default function ImgRefPage() {
  const fileRef = useRef<HTMLInputElement>(null);
  const [imgUrl, setImgUrl] = useState<string | undefined>("");
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const OnChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    console.log(file);
    // ---------검증-----
    const isValid = checkFileValidation(file);
    if (!isValid) return;

    try {
      const result = await uploadFile({ variables: { file } });
      console.log(result.data?.uploadFile.url);
      setImgUrl(result.data?.uploadFile.url);
    } catch (error: any) {
      Modal.error({ content: error.massage });
    }
  };
  const OnClickImg = () => {
    fileRef.current?.click();
  };

  return (
    <div>
      <div>이미지업로드 연습하기</div>
      <div
        style={{
          width: "150px",
          height: "150px",
          backgroundColor: "pink",
          fontSize: "30px",
          cursor: "pointer",
        }}
        onClick={OnClickImg}
      >
        이미지 선택
      </div>
      <input
        style={{ display: "none" }}
        type="file"
        onChange={OnChangeFile}
        ref={fileRef}
      />
      {/* multiple하면 여러개 담을 수 있음 */}

      <img src={`https://storage.googleapis.com/${imgUrl}`} />
    </div>
  );
}
