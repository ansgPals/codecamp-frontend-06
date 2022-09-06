import { Dispatch, SetStateAction } from "react";
import * as S from "./useModal.styles";

export default function ModalComponent(props: {
  children: any;
  setIsModalOpen?: Dispatch<SetStateAction<boolean>>;
  wrapperStyles?: object;
  closeFunction?: () => void;
}) {
  return (
    <S.Background
      onClick={(e) => {
        if (e.target !== e.currentTarget) return;
        props.setIsModalOpen(false);
        if (props.closeFunction) {
          props.closeFunction();
        }
      }}
    >
      <S.Modal style={props.wrapperStyles}>
        <S.CloseButton
          onClick={() => {
            props.setIsModalOpen(false);
            if (props.closeFunction) {
              props.closeFunction();
            }
          }}
        ></S.CloseButton>
        <S.Wrapper>{props.children}</S.Wrapper>
      </S.Modal>
    </S.Background>
  );
}
