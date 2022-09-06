import { Dispatch, SetStateAction } from "react";
import ModalComponent from "../free-Modal/userModal";
import * as S from "./share-course-modalstyles";

export default function ShareCourseModalComponent(props: {
  text: string;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const onClickCopy = async () => {
    try {
      await navigator.clipboard.writeText(props.text);
      alert("링크가 복사되었습니다!");
    } catch (error) {
      alert("링크복사 실패!");
    }
  };

  return (
    <>
      <ModalComponent
        setIsModalOpen={props.setIsModalOpen}
        wrapperStyles={{
          width: "33.8rem",
          padding: "3.333rem",
        }}
      >
        <S.LIqonBox>
          <S.LLIcon></S.LLIcon>
        </S.LIqonBox>

        <S.Title>이 강좌가 마음에 드시나요?</S.Title>
        <S.SubTitle>링크복사 버튼을 눌러 지인에게 공유하세요 :{")"}</S.SubTitle>
        <S.PositionRow>
          <S.URLBox>
            <S.BlackButton onClick={onClickCopy}>
              <S.CopyIcon />
              <div style={{ fontFamily: "SUIT400", fontSize: "1.333rem" }}>
                링크복사
              </div>
            </S.BlackButton>
            <S.LinkText> {props.text}</S.LinkText>
          </S.URLBox>
        </S.PositionRow>
      </ModalComponent>
    </>
  );
}
