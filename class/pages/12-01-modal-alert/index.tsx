import { Modal, Button } from "antd";

export default function ModalAlertPage() {
  const onClickSuccessButton = () => {
    Modal.success({ content: "게시물이 등록되었어요옹 성공!" });
  };
  const onClickFailButton = () => {
    Modal.error({ content: "비밀번호가 틀렸어요오오..실패!!" });
  };

  return (
    <>
      <button onClick={onClickSuccessButton}>성공했을때</button>
      <Button onClick={onClickFailButton}>실패했을때</Button>
    </>
  );
}
