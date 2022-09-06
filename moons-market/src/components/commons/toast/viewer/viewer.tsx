import "@toast-ui/editor/dist/toastui-editor-viewer";
import { Viewer } from "@toast-ui/react-editor";

interface IVewerProps {
  contents: string;
}

export default function ToastViewer(props: IVewerProps) {
  // useEffect(() => {

  // }, [props.contents]);

  return <Viewer initialValue={props.contents} />;
}
