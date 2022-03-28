import { getDate } from "../libraries/util";
import * as MY from "./boardComment.styles";
import { IBoardCommentUIProps } from "./boardComment.types";

export default function BoardCommentUI(props: IBoardCommentUIProps) {
  return (
    <div>
      <MY.BackGround>
        <MY.CommentBox>
          <MY.CommentTitle>
            <MY.CommentIcon></MY.CommentIcon>
            <MY.Title>댓글</MY.Title>
          </MY.CommentTitle>
          <MY.CommentTopBox>
            <MY.NameInput
              id="inputWriter"
              placeholder="작성자"
              type="text"
              onChange={props.onChangeWriter}
            ></MY.NameInput>
            <MY.PassWordInput
              placeholder="비밀번호"
              type="password"
              onChange={props.onChangePassWord}
            ></MY.PassWordInput>
          </MY.CommentTopBox>
          <MY.CommentContents>
            <MY.CommentInPut
              placeholder="개인정보를 공유 및 요청하거나,명예훼손,무단 광고,불법정보 유포시 모니터링 후 삭제될 수 있으며,이에 대한 민형사상 책임은 게시자에게 있습니다."
              onChange={props.onChangeContents}
            ></MY.CommentInPut>
            <MY.ContentsFootBox>
              <MY.TextLimit>0/100</MY.TextLimit>
              <MY.OKButton onClick={props.ClickOKButton}>등록하기</MY.OKButton>
            </MY.ContentsFootBox>
          </MY.CommentContents>
        </MY.CommentBox>

        <MY.CommentEditBox isEdit={props.isEdit}>
          <MY.CommentTitle>
            <MY.CommentIcon></MY.CommentIcon>
            <MY.Title>댓글</MY.Title>
          </MY.CommentTitle>
          <MY.CommentTopBox>
            <MY.NameInput
              id="inputWriter"
              placeholder="작성자"
              type="text"
              onChange={props.onChangeWriter}
            ></MY.NameInput>
            <MY.PassWordInput
              placeholder="비밀번호"
              type="password"
              onChange={props.onChangeEditPassWord}
            ></MY.PassWordInput>
          </MY.CommentTopBox>
          <MY.CommentContents>
            <MY.CommentInPut
              placeholder="개인정보를 공유 및 요청하거나,명예훼손,무단 광고,불법정보 유포시 모니터링 후 삭제될 수 있으며,이에 대한 민형사상 책임은 게시자에게 있습니다."
              onChange={props.onChangeEditContents}
            ></MY.CommentInPut>
            <MY.ContentsFootBox>
              <MY.TextLimit>0/100</MY.TextLimit>
              <MY.OKButton onClick={props.UpDateComment}>수정하기</MY.OKButton>
            </MY.ContentsFootBox>
          </MY.CommentContents>
        </MY.CommentEditBox>

        <MY.CommentListBox>
          {props.data?.fetchBoardComments.map((el: any) => (
            <MY.ListProfileBox key={el._id}>
              <MY.ListProfile>
                <MY.Photo></MY.Photo>
                <MY.ListContents>
                  <MY.ListName>{el.writer}</MY.ListName>
                  <MY.ListComment>{el.contents} </MY.ListComment>
                </MY.ListContents>
                <MY.CommentButton>
                  <MY.EditButton
                    id={el._id}
                    onClick={props.editCommentIcon}
                  ></MY.EditButton>
                  <MY.DeleteButton
                    onClick={props.DeleteComment}
                    id={el._id}
                  ></MY.DeleteButton>
                </MY.CommentButton>
              </MY.ListProfile>
              <MY.ListDate>{getDate(el.createdAt)}</MY.ListDate>
            </MY.ListProfileBox>
          ))}
        </MY.CommentListBox>
      </MY.BackGround>
    </div>
  );
}
{
  /* {props.data?.fetchBoardComments.map((el: any) => (
          <MY.Row key={el._id}>
            <MY.Cal1>{el.writer}</MY.Cal1>
            <MY.Cal2>{el.contents}</MY.Cal2>

            <MY.CommentDate>{getDate(el.createdAt)}</MY.CommentDate>
          </MY.Row>
        ))} */
}
