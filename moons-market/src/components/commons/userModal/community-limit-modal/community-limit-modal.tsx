import { Dispatch, SetStateAction } from "react";
import { WhitePurpleButton } from "../../commonStyles/Buttons";
import ModalComponent from "../free-Modal/userModal";
import * as S from "./community-limit-modal.styles";
declare const window: typeof globalThis & {
  ChannelIO: any;
};
export default function CommunityLimitModalComponent(props: {
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const onClickChannelTalk = () => {
    window.ChannelIO("show");
  };
  return (
    <>
      <ModalComponent
        setIsModalOpen={props.setIsModalOpen}
        wrapperStyles={{
          width: "33.8rem",
          height: "21.466rem",
          overflow: "hidden",
        }}
      >
        <S.LIqonBox>
          <S.LLIcon></S.LLIcon>
        </S.LIqonBox>
        <S.Title>앗! 커뮤니티 활동이 제한되었어요,</S.Title>
        <S.SubTitle>문의사항은 채널톡을 이용해주세요.</S.SubTitle>
        <WhitePurpleButton
          onClick={onClickChannelTalk}
          style={{ marginTop: "1.333rem" }}
        >
          <S.GreenCircle></S.GreenCircle>채널톡 문의하기
        </WhitePurpleButton>
      </ModalComponent>
    </>
  );
}
