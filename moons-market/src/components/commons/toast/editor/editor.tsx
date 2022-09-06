import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
import "tui-color-picker/dist/tui-color-picker.css";
import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css";
import colorSyntax from "@toast-ui/editor-plugin-color-syntax";
import { IToastEditorProps } from "./toastEditor.types";
import { UPLOAD_FILE_MANY } from "../toast.querys";
import {
  IMutation,
  IMutationUploadFileManyArgs,
} from "../../../../commons/types/generated/types";
import { useMutation } from "@apollo/client";
import "prismjs/themes/prism.css";
import "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css";
import codeSyntaxHighlight from "@toast-ui/editor-plugin-code-syntax-highlight";

export default function ToastUiPage(props: IToastEditorProps) {
  const [uploadFileMany] = useMutation<
    Pick<IMutation, "uploadFileMany">,
    IMutationUploadFileManyArgs
  >(UPLOAD_FILE_MANY);

  return (
    <>
      <Editor
        initialValue={props.isEdit ? sessionStorage.getItem("QnAContnets") : ""}
        previewStyle="vertical"
        height={props.height}
        ref={props.toastRef}
        initialEditType="markdown"
        useCommandShortcut={true}
        onChange={props.onChangeToast}
        plugins={[colorSyntax, codeSyntaxHighlight]}
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
    </>
  );
}
