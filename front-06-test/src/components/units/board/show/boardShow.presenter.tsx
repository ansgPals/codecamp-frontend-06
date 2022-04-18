import { Modal } from "antd";
import * as S from "./boardShow.styles";
import { IBoardRoadUIProps } from "./boardShow.types";

export default function BoardRoadUI(props: IBoardRoadUIProps) {
  return (
    <>
      <S.Back>
        <Modal
          title="게시글 삭제"
          visible={props.isModal}
          onOk={props.OnClickDelete}
          onCancel={props.showModal}
        >
          정말로 게시글을 삭제하시겠습니까?
        </Modal>

        <S.BackGround>
          <S.TitleBox>{props.data?.fetchBoard.title}</S.TitleBox>

          <S.ImageBox>
            {props.data?.fetchBoard.images
              ?.filter((el: any) => el)
              .map((el: any) => (
                <S.IMG key={el} src={`https://storage.googleapis.com/${el}`} />
              ))}
          </S.ImageBox>
          <S.Row>
            <S.ProFilePhoto />
            <S.Name>{props.data?.fetchBoard.writer}</S.Name>
            <S.DetailBox>{props.data?.fetchBoard.contents}</S.DetailBox>
          </S.Row>
        </S.BackGround>

        <S.ButtonBox>
          <S.MyButtonP onClick={props.OnClickList}>글목록</S.MyButtonP>
          <S.MyButton onClick={props.OnClickEdit}>수정</S.MyButton>
          <S.MyButton onClick={props.showModal}>삭제</S.MyButton>
        </S.ButtonBox>
      </S.Back>
    </>
  );
}
