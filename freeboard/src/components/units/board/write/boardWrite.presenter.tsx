import * as MyStyle from "./boardWrite.styles";
import { INewBoardUIProps } from "./boardWrite.types";
import { Modal } from "antd";
import DaumPostcode from "react-daum-postcode";

export default function NewBoardUI(props: INewBoardUIProps) {
  return (
    <MyStyle.BackGround>
      <MyStyle.MyTitle>게시물{props.isEdit ? "수정" : "등록"}</MyStyle.MyTitle>
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
      <MyStyle.MyBody>
        <MyStyle.BackTop>
          <MyStyle.TopLt>
            <MyStyle.MyName>작성자</MyStyle.MyName>
            <MyStyle.PutName
              placeholder="이름을 입력하세요"
              id="writer"
              type="text"
              onChange={props.onChangeName}
              defaultValue={props.data?.fetchBoard.writer}
              readOnly={props.data?.fetchBoard.writer ? true : false}
            ></MyStyle.PutName>
            <MyStyle.MyErr>{props.inputsErr.nameErr}</MyStyle.MyErr>
          </MyStyle.TopLt>
          <MyStyle.TopRt>
            <MyStyle.MyName>비밀번호</MyStyle.MyName>
            <MyStyle.PutPass
              type="password"
              id="password"
              placeholder="비밀번호를 입력해주세요."
              onChange={props.onChangePass}
            ></MyStyle.PutPass>
            <MyStyle.MyErr>{props.inputsErr.passErr}</MyStyle.MyErr>
          </MyStyle.TopRt>
        </MyStyle.BackTop>
        <MyStyle.TitleBox>
          <MyStyle.MyName>제목</MyStyle.MyName>
          <MyStyle.PutTitle
            placeholder="제목을 작성해주세요."
            id="title"
            type="text"
            onChange={props.onChangeTitle}
            defaultValue={props.data?.fetchBoard.title}
          ></MyStyle.PutTitle>
          <MyStyle.MyErr>{props.inputsErr.titleErr}</MyStyle.MyErr>
        </MyStyle.TitleBox>
        <MyStyle.TextBox>
          <MyStyle.MyName>내용</MyStyle.MyName>
          <MyStyle.PutText
            placeholder="내용을 작성해주세요."
            id="contents"
            onChange={props.onChangeText}
            defaultValue={props.data?.fetchBoard.contents}
          ></MyStyle.PutText>
          <MyStyle.MyErr>{props.inputsErr.textErr}</MyStyle.MyErr>
        </MyStyle.TextBox>
        <MyStyle.AddBox>
          <MyStyle.MyName>주소</MyStyle.MyName>

          <MyStyle.AddTop>
            <MyStyle.SurchPut
              placeholder="07250"
              readOnly
              value={
                props.boardAddress.zipcode ||
                props.data?.fetchBoard.boardAddress.zipcode ||
                ""
              }
            ></MyStyle.SurchPut>
            <MyStyle.SurchPush onClick={props.onClickPostNumber}>
              우편번호 검색
            </MyStyle.SurchPush>
            {props.modalOpen && (
              <Modal
                visible={true}
                onOk={props.onModalOpen}
                onCancel={props.onModalOpen}
              >
                <DaumPostcode onComplete={props.clickPostNumber} />
              </Modal>
            )}
          </MyStyle.AddTop>
          <MyStyle.JustBox
            type="text"
            readOnly
            value={
              props.boardAddress.address ||
              props.data?.fetchBoard.boardAddress.address ||
              ""
            }
          ></MyStyle.JustBox>
          <MyStyle.JustBox
            placeholder="상세주소를 적어주세요"
            type="text"
            id="addressDetail"
            onChange={props.onChangeAddressDetail}
            defaultValue={props.data?.fetchBoard.boardAddress.addressDetail}
          ></MyStyle.JustBox>
        </MyStyle.AddBox>
        <MyStyle.YouTubeBox>
          <MyStyle.MyName>유튜브</MyStyle.MyName>
          <MyStyle.CopyYouTube
            placeholder="링크를 복사해주세요."
            id="youtubeUrl"
            type="text"
            onChange={props.onChangeYoutube}
            defaultValue={props.data?.fetchBoard.youtubeUrl || ""}
          ></MyStyle.CopyYouTube>
        </MyStyle.YouTubeBox>
        <MyStyle.PhotoBox>
          <MyStyle.MyName>사진첨부</MyStyle.MyName>
          <MyStyle.GrayBoxBox>
            <MyStyle.GrayBox>
              <MyStyle.MyPlus>+</MyStyle.MyPlus>
              <MyStyle.MyUpload>Upload</MyStyle.MyUpload>
            </MyStyle.GrayBox>
            <MyStyle.GrayBox>
              <MyStyle.MyPlus>+</MyStyle.MyPlus>
              <MyStyle.MyUpload>Upload</MyStyle.MyUpload>
            </MyStyle.GrayBox>
            <MyStyle.GrayBox>
              <MyStyle.MyPlus>+</MyStyle.MyPlus>
              <MyStyle.MyUpload>Upload</MyStyle.MyUpload>
            </MyStyle.GrayBox>
          </MyStyle.GrayBoxBox>
        </MyStyle.PhotoBox>
        <MyStyle.MainBox>
          <MyStyle.MyName>메인 설정</MyStyle.MyName>
          <MyStyle.MySelect>
            <MyStyle.MainSelect1 type="radio" name="main" />
            유튜브
            <MyStyle.MainSelect2 type="radio" name="main" />
            사진
          </MyStyle.MySelect>
        </MyStyle.MainBox>
      </MyStyle.MyBody>
      <MyStyle.InBox
        onClick={props.isEdit ? props.EditOk : props.PutOk}
        isActive={props.isActive}
      >
        {props.isEdit ? "수정" : "등록"}하기
      </MyStyle.InBox>
    </MyStyle.BackGround>
  );
}
