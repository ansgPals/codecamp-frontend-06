import { useState } from "react";
import { Modal, Button } from "antd";

export default function StarPage() {
  const [isModal, setIsModal] = useState(false);
  const showModal = () => {
    setIsModal((prev) => !prev);
  };

  return (
    <div>
      <Button type="primary" onClick={showModal}>
        모달창!!
      </Button>
      <Modal
        title="게시글 등록"
        visible={isModal}
        onOk={showModal}
        onCancel={showModal}
      >
        게시글이 등록되었습니다.
      </Modal>
    </div>
  );
}
