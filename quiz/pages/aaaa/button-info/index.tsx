import ListButton from "../../src/components/commons/buttons/list-button";
import PageMoveButton from "../../src/components/commons/buttons/pagemoveButton";
import PurpleButton from "../../src/components/commons/buttons/purple-button";
import PurpleFileUploadButton from "../../src/components/commons/buttons/purple-file-upload-button";
import RedButton from "../../src/components/commons/buttons/red-button";
import SubmitButton from "../../src/components/commons/buttons/submit-button";

export default function ButtonInfoPage() {
  return (
    <div>
      {/* 리스트의 삭제 보기버튼 */}
      <ListButton innerText="삭제" />
      <ListButton innerText="보기" />
      {/* 빨간버튼 삭제하기 환불하기 비활성화 원할시 disabled={true} */}
      <RedButton innerText="삭제하기" />
      <RedButton disabled={true} innerText="환불하기" />
      {/* 저장하기 강좌등록 */}
      <PurpleButton innerText="저장하기" />
      <PurpleButton innerText="+ 강좌등록" />
      {/* 등록하기 큰버튼 */}
      <SubmitButton />
      {/* 자료등록하기 작은버튼 */}
      <PurpleFileUploadButton />
      <PageMoveButton />
    </div>
  );
}
