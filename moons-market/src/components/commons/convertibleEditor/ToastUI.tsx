import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
import "tui-color-picker/dist/tui-color-picker.css";
import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css";
import colorSyntax from "@toast-ui/editor-plugin-color-syntax";
import { useMutation, gql } from "@apollo/client";

import { MutableRefObject } from "react";
import {
  IMutation,
  IMutationUploadFileManyArgs,
} from "../../../commons/types/generated/types";

const UPLOAD_FILE_MANY = gql`
  mutation uploadFileMany($files: [Upload!]!) {
    uploadFileMany(files: $files)
  }
`;
interface IPropsToastUI {
  toastRef: MutableRefObject<any>;
  onChangeContent: () => void;
  defaultValue: string;
  editorMode: any;
  height?: string;
}
export default function ToastUI(props: IPropsToastUI) {
  const [uploadFileMany] = useMutation<
    Pick<IMutation, "uploadFileMany">,
    IMutationUploadFileManyArgs
  >(UPLOAD_FILE_MANY);

  return (
    <Editor
      ref={props.toastRef}
      initialValue={props.defaultValue}
      initialEditType={props.editorMode}
      onChange={props.onChangeContent}
      previewStyle="vertical"
      height={props.height || "39.46rem"}
      useCommandShortcut={true}
      plugins={[colorSyntax]}
      previewHighlight={false}
      hideModeSwitch={true}
      placeholder={"내용을 입력하세요"}
      autofocus={false}
      hooks={{
        addImageBlobHook: async (blob, callback) => {
          const FileArr = [blob];
          const result = await uploadFileMany({
            variables: {
              files: FileArr,
            },
          });
          const file = `https://storage.googleapis.com/${result.data.uploadFileMany[0]}`;
          callback(file);
          return false;
        },
      }}
    />
  );
}
