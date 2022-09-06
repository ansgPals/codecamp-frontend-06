import { useRouter } from "next/router";
import { Dispatch, SetStateAction, useEffect } from "react";
import ChannelTalkHof from "../../../units/mypage/bashboard/channel-talk/channel-talk-hof";
import { PurpleButton } from "../../commonStyles/Buttons";
import ModalComponent from "../free-Modal/userModal";
import * as S from "./information-not-save-modal.styles";

export default function InformationNotSaveModalComponent(props: {
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const router = useRouter();
  useEffect(() => {
    ChannelTalkHof("Channel");
  }, []);
  const onClickGoDashBoard = () => {
    router.push("/mypage/dashboard/");
  };
  return (
    <>
      <ModalComponent
        setIsModalOpen={props.setIsModalOpen}
        wrapperStyles={{ width: "33.8rem", height: "22.1333rem" }}
      >
        <S.LIqonBox>
          <S.LLIcon></S.LLIcon>
        </S.LIqonBox>
        <S.Title>입력하신 정보가 저장되지 않았어요,</S.Title>
        <S.Title style={{ marginTop: "-0.666rem", marginBottom: "1.333rem" }}>
          그래도 나가시겠습니까?
        </S.Title>
        <PurpleButton onClick={onClickGoDashBoard}>
          대시보드로 이동하기
        </PurpleButton>
      </ModalComponent>
    </>
  );
}
