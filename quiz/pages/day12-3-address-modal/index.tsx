import { useState } from "react";
import DaumPostcode from "react-daum-postcode";
import { Modal, Button } from "antd";

export default function StarPage() {
  const [address, setAddress] = useState("");
  const [isModal, setIsModal] = useState(false);
  const showModal = () => {
    setIsModal((prev) => !prev);
  };

  const handleComplete = (data) => {
    setAddress(String(data.address));
    console.log(data);
    showModal();
  };

  return (
    <div>
      <Button type="primary" onClick={showModal}>
        주소검색창
      </Button>
      {isModal && (
        <Modal
          title="주소를검색해주세요"
          visible={isModal}
          onOk={showModal}
          onCancel={showModal}
        >
          <DaumPostcode onComplete={handleComplete} />
        </Modal>
      )}
      <div>주소 : {address}</div>
    </div>
  );
}
