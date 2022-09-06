import { Dispatch, SetStateAction } from "react";

import { WhitePurpleButton } from "../../commonStyles/Buttons";
import ModalComponent from "../free-Modal/userModal";
import * as S from "./recent-lectuer-modal.styles";

export default function RecentLectureModalComponent(props: {
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  onClickStart: () => void;
  onClickRecent: () => void;
}) {
  return (
    <>
      <ModalComponent
        setIsModalOpen={props.setIsModalOpen}
        wrapperStyles={{
          width: "33.8rem",
          paddingBottom: "3.333rem",
        }}
      >
        <S.LIqonBox>
          <S.LLIcon></S.LLIcon>
        </S.LIqonBox>

        <S.Title>재생 기록이 있습니다,</S.Title>
        <S.Title>마지막 지점부터 이어보시나요?</S.Title>
        <S.PositionRow>
          <WhitePurpleButton
            className="Channel"
            style={{ width: "13.2rem", marginRight: "0.666rem" }}
            onClick={props.onClickStart}
          >
            처음부터 볼래요
          </WhitePurpleButton>
          <WhitePurpleButton
            onClick={props.onClickRecent}
            className="Channel"
            style={{ width: "13.2rem" }}
          >
            이어서 볼래요
          </WhitePurpleButton>
        </S.PositionRow>
      </ModalComponent>
    </>
  );
}
