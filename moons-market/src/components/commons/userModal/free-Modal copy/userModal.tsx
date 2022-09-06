import { Dispatch, ReactNode, SetStateAction } from "react";
import * as S from "./useModal.styles";

export default function PaymentModalComponent(props: {
  setIsModalOpen?: Dispatch<SetStateAction<boolean[]>>;
  wrapperStyles?: object;
  closeFunction?: () => void;
  index: number;
  children: ReactNode;
}) {
  return (
    <S.Background
      onClick={(e) => {
        if (e.target !== e.currentTarget) return;
        const newArr = [false, false, false];
        newArr[props.index] = false;
        props.setIsModalOpen(newArr);

        if (props.closeFunction) {
          props.closeFunction();
        }
      }}
    >
      <S.Modal style={props.wrapperStyles}>
        <S.CloseButton
          onClick={() => {
            const newArr = [false, false, false];
            props.setIsModalOpen(newArr);
          }}
        ></S.CloseButton>
        <S.Wrapper>{props.children}</S.Wrapper>
      </S.Modal>
    </S.Background>
  );
}
