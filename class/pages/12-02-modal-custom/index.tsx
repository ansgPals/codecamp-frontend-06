import { useState } from "react";
import { Modal, Button } from "antd";

export default function ModalCustomPage() {
  const [isOpen, setIsOpen] = useState(false);

  const showModal = () => {
    setIsOpen(true);
  };

  const handleOk = () => {
    setIsOpen(false);
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  const [pass, setPass] = useState("");

  const onChangePass = (event) => {
    setPass(event.target.value);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>

      <Modal
        title="Basic Modal"
        visible={isOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        비밀번호를 입력
        <br />
        <input
          placeholder="비밀번호"
          type="password"
          onChange={onChangePass}
        ></input>
        <p>ok버튼을 누르시면 댓글 삭제가 완료됩니다.</p>
      </Modal>

      <div>{pass}</div>
    </>
  );
}
