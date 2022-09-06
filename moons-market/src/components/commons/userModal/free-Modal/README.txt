* : 필수 인자
# : 선택 인자

// modal
: 버튼을 눌러서 열고 닫는 모달입니다.

입력 인자
    * 모달 안에 들어갈 내용은 필수입니다. 
      모달 안에 들어갈 내용을 <ModalComponent> ~ </ModalComponent> 사이에 작성해주세요.

    # setIsModalOpen : 모달을 열고 닫는 함수 (setState)

    # wrapperStyles : 모달의 배경에 적용되는 스타일 (object)


사용 예시  
import { useState } from "react";
import ModalComponent from "../../src/components/commons/userModal/free-Modal/userModal";

export default function TestPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      {" "}
      {/* 모달을 여는 버튼 */}
      <button
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        강좌등록
      </button>
      {isModalOpen && (
        <ModalComponent
          setIsModalOpen={setIsModalOpen}
          wrapperStyles={{ height: "812px" }}
        >
          <div>dhdhdhd</div>
        </ModalComponent>
      )}
    </>
  );
}
