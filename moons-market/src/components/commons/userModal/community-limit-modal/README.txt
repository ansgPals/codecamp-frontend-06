import { useState } from "react";
import CommunityLimitModalComponent from "../../src/components/commons/userModal/community-limit-modal/community-limit-modal";

export default function TestPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      {/* 모달을 여는 버튼 */}
      <button
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        커뮤니티 활동제한
      </button>
      {isModalOpen && (
        <CommunityLimitModalComponent setIsModalOpen={setIsModalOpen} />
      )}
    </>
  );
}