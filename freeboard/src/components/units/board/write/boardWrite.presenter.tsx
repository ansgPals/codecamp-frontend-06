import * as MyStyle from './boardWrite.styles'
import { INewBoardUIProps } from './boardWrite.types';


export default function NewBoardUI(props : INewBoardUIProps){
  

    return (
      <MyStyle.BackGround>
        <MyStyle.MyTitle>게시물{props.isEdit ? "수정" : "등록"}</MyStyle.MyTitle>
        <MyStyle.MyBody>
          <MyStyle.BackTop>
            <MyStyle.TopLt>
              <MyStyle.MyName>작성자</MyStyle.MyName>
              <MyStyle.PutName
                placeholder="이름을 입력하세요"
                type="text"
                onChange={props.onChangeName}
                defaultValue={props.data?.fetchBoard.writer}
                readOnly = {props.data?.fetchBoard.writer? true : false}
              ></MyStyle.PutName>
              <MyStyle.MyErr>{props.nameErr}</MyStyle.MyErr>
            </MyStyle.TopLt>
            <MyStyle.TopRt>
              <MyStyle.MyName>비밀번호</MyStyle.MyName>
              <MyStyle.PutPass
                type="password"
                placeholder="비밀번호를 입력해주세요."
                onChange={props.onChangePass}
              ></MyStyle.PutPass>
              <MyStyle.MyErr>{props.passErr}</MyStyle.MyErr>
            </MyStyle.TopRt>
          </MyStyle.BackTop>
          <MyStyle.TitleBox>
            <MyStyle.MyName>제목</MyStyle.MyName>
            <MyStyle.PutTitle
              placeholder="제목을 작성해주세요."
              type="text"
              onChange={props.onChangeTitle}
              defaultValue={props.data?.fetchBoard.title}
            ></MyStyle.PutTitle>
            <MyStyle.MyErr>{props.titleErr}</MyStyle.MyErr>
          </MyStyle.TitleBox>
          <MyStyle.TextBox>
            <MyStyle.MyName>내용</MyStyle.MyName>
            <MyStyle.PutText
              placeholder="내용을 작성해주세요."
              onChange={props.onChangeText}
              defaultValue={props.data?.fetchBoard.contents}
            ></MyStyle.PutText>
            <MyStyle.MyErr>{props.textErr}</MyStyle.MyErr>
          </MyStyle.TextBox>
          <MyStyle.AddBox>
            <MyStyle.MyName>주소</MyStyle.MyName>

            <MyStyle.AddTop>
              <MyStyle.SurchPut
                placeholder="07250"
                type="number"
                onChange={props.onChangeAddress}
              ></MyStyle.SurchPut>
              <MyStyle.SurchPush>우편번호 검색</MyStyle.SurchPush>
            </MyStyle.AddTop>
            <MyStyle.JustBox></MyStyle.JustBox>
            <MyStyle.JustBox></MyStyle.JustBox>
            <MyStyle.MyErr>{props.addressErr}</MyStyle.MyErr>
          </MyStyle.AddBox>
          <MyStyle.YouTubeBox>
            <MyStyle.MyName>유튜브</MyStyle.MyName>
            <MyStyle.CopyYouTube
              placeholder="링크를 복사해주세요."
              type="text"
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
        <MyStyle.InBox onClick={props.isEdit? props.EditOk : props.PutOk} 
        isActive={props.isActive}>{props.isEdit ? "수정" : "등록"}하기</MyStyle.InBox>
      </MyStyle.BackGround>
    );
  }

