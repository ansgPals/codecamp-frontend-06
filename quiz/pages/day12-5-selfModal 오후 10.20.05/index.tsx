import styled from "@emotion/styled";
import { Button } from "antd";
import { useState } from "react";

const Back = styled.div`
  width: 500px;
  height: 500px;
  background-color: beige;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const MyButton = styled.button`
  background-color: orange;
  color: white;
  border-radius: 10px;
  font-size: 18px;
  :hover {
    background-color: yellow;
    color: orange;
  }
`;
const Modal = styled.div`
  width: 250px;
  height: 150px;
  background-color: azure;
  border: 1px solid #bdbdbd;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ModalTop = styled.div`
  width: 200px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  border-bottom: 2px solid orange;
`;
const ModalBody = styled.div`
  width: 200px;
  height: 80px;
  text-align: center;
  line-height: 80px;
`;
const ModalFoot = styled.div`
  width: 200px;
  height: 30px;
  text-align: center;
`;
const CloseButton = styled.button`
  background-color: yellow;
  border-radius: 10px;
  width: 50px;
  cursor: pointer;
`;

export default function SelfModal() {
  const [isModal, setIsModal] = useState(false);

  const OnClickModal = () => {
    setIsModal((prev) => !prev);
  };

  return (
    <>
      <Back>
        {isModal ? (
          <div></div>
        ) : (
          <MyButton onClick={OnClickModal}>모달창 띄우기!</MyButton>
        )}
        {isModal ? (
          <Modal>
            <ModalTop>모달을직접만들었어용!</ModalTop>
            <ModalBody>으헤헿!</ModalBody>
            <ModalFoot>
              <CloseButton onClick={OnClickModal}>OK</CloseButton>
            </ModalFoot>
          </Modal>
        ) : (
          <div></div>
        )}
      </Back>
    </>
  );
}
