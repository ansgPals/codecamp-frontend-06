import * as S from "./boardWrite.styles";
import { INewBoardUIProps } from "./boardWrite.types";
import { Modal } from "antd";
import DaumPostcode from "react-daum-postcode";
import Uploads01 from "../uploads01/Uploads01.container";
import { v4 as uuid } from "uuid";

export default function NewBoardUI(props: INewBoardUIProps) {
  return (
    <>
      <S.BackGround>
        <S.MyTitle>{props.isEdit ? "게시물 수정" : "새 글 작성"}</S.MyTitle>
        <Modal
          visible={props.okModalOpen}
          onOk={props.Exit}
          onCancel={props.onOkModalOpen}
        >
          게시물이{props.isEdit ? "수정" : "등록"}되었습니다!
        </Modal>
        <Modal
          visible={props.noEditModal}
          onOk={props.EditModalOpen}
          onCancel={props.EditModalOpen}
        >
          {props.pass ? "수정한 내용이 없습니다!" : "비밀번호를 입력하세요!"}
        </Modal>
        <S.MyBody>
          <S.TitleBox>
            <S.MyName>제목</S.MyName>
            <S.Culumn>
              <S.PutTitle
                id="title"
                type="text"
                onChange={props.onChangeInputs}
                defaultValue={props.data?.fetchBoard.title}
              ></S.PutTitle>
              <S.MyErr>{props.inputsErr.title}</S.MyErr>
            </S.Culumn>
          </S.TitleBox>
          <S.TextBox>
            <S.MyName>내용</S.MyName>
            <S.Culumn>
              <S.PutText
                id="contents"
                onChange={props.onChangeInputs}
                defaultValue={props.data?.fetchBoard.contents}
              ></S.PutText>
              <S.MyErr>{props.inputsErr.contents}</S.MyErr>
            </S.Culumn>
          </S.TextBox>
          <S.PhotoBox>
            <S.MyName>이미지</S.MyName>
            <S.GrayBoxBox>
              {props.fileUrls.map((el, index) => (
                <Uploads01
                  key={uuid()}
                  index={index}
                  fileUrl={el}
                  onChangeFileUrls={props.onChangeFileUrls}
                />
              ))}
            </S.GrayBoxBox>
          </S.PhotoBox>
          <S.BackTop>
            <S.UserInfo>
              <S.MyName>작성자</S.MyName>
              <S.Culumn>
                <S.PutPass
                  id="writer"
                  type="text"
                  onChange={props.onChangeInputs}
                  defaultValue={props.data?.fetchBoard.writer}
                  readOnly={props.data?.fetchBoard.writer ? true : false}
                ></S.PutPass>
                <S.MyErr>{props.inputsErr.writer}</S.MyErr>
              </S.Culumn>
            </S.UserInfo>
            <S.UserInfo>
              <S.MyName>비밀번호</S.MyName>
              <S.Culumn>
                <S.PutPass
                  type="password"
                  id="password"
                  onChange={props.onChangeInputs}
                ></S.PutPass>
                <S.MyErr>{props.inputsErr.password}</S.MyErr>
              </S.Culumn>
            </S.UserInfo>
          </S.BackTop>
        </S.MyBody>
      </S.BackGround>
      <S.ButtonBox>
        <S.InBox
          onClick={props.isEdit ? props.EditOk : props.PutOk}
          isActive={props.isActive}
        >
          {props.isEdit ? "수정" : "등록"}
        </S.InBox>
        <S.ExitButton onClick={props.onClickExit}>취소</S.ExitButton>
      </S.ButtonBox>
    </>
  );
}
