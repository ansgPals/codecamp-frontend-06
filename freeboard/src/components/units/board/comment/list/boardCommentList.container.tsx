import { ChangeEvent, MouseEvent, useState } from "react";
import * as MY from "./boardCommentList.styles";
import { Rate } from "antd";
import { Modal } from "antd";
import { getDate } from "../../libraries/util";
import {
  DELETE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
  UPDATE_BOARD_COMMENT,
} from "../boardComment.queries";
import { useMutation } from "@apollo/client";
import {
  ICommentList,
  IMyUpDate,
  IMyVariables,
} from "./boardCommentList.types";
import { useRouter } from "next/router";

export default function BoardCommentListItem(props: ICommentList) {
  const [deleteId, setDeleteId] = useState("");
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [commentId, setCommentId] = useState("");
  const [editPass, setEditPass] = useState("");
  const [editContents, setEditContents] = useState("");
  const [editValue, setEditValue] = useState(3);
  const [deletePass, setDeletePass] = useState("");
  const [updateBoardComment] = useMutation(UPDATE_BOARD_COMMENT);
  const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);

  const router = useRouter();

  const editStarChange = (value: number) => {
    setEditValue(value);
  };
  const onChangeEditPassWord = (event: ChangeEvent<HTMLInputElement>) => {
    setEditPass(event.target.value);
  };
  const onChangeEditContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setEditContents(event.target.value);
  };

  const onChangeDeletePass = (event: ChangeEvent<HTMLInputElement>) => {
    setDeletePass(event.target.value);
  };
  const DeleteComment = async () => {
    try {
      await deleteBoardComment({
        variables: { boardCommentId: deleteId, password: deletePass },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: String(router.query.boardId) },
          },
        ],
      });
      alert("댓글이 삭제되었습니다.");
      DeleteModal();
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  const DeletePassWord = (event: MouseEvent<HTMLButtonElement>) => {
    setDeleteId((event.target as HTMLButtonElement).id);
    setDeleteOpen((prev: any) => !prev);
  };

  const editCommentIcon = (event: MouseEvent<HTMLButtonElement>) => {
    if (isEdit === false) setIsEdit(true);
    if (isEdit === true) setIsEdit(false);
    setCommentId((event.target as HTMLButtonElement).id);
    console.log(commentId);
  };

  const CloseEdit = () => {
    setIsEdit(false);
  };

  const UpDateComment = async () => {
    if (!editContents) {
      alert("수정한 내용이없습니다.");
      return;
    }
    if (editPass === "") {
      alert("비밀번호를 입력하세요.");
      return;
    }

    const MyUpdateInput: IMyUpDate = {};
    const myVariables: IMyVariables = {
      updateBoardCommentInput: MyUpdateInput,
      password: editPass,
      boardCommentId: String(commentId),
    };

    if (editContents !== "") MyUpdateInput.contents = editContents;
    if (!editValue) MyUpdateInput.rating = editValue;

    try {
      await updateBoardComment({
        variables: myVariables,
      });
      alert("댓글이 수정되었습니다.");
      setIsEdit(false);
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };
  const DeleteModal = () => {
    setDeleteOpen((prev: any) => !prev);
  };

  return (
    <div key={props.el._id}>
      {isEdit === false && (
        <MY.ListProfileBox>
          <MY.ListProfile>
            <MY.Photo></MY.Photo>
            <MY.ListContents>
              <MY.NameStar>
                <MY.ListName>{props.el.writer}</MY.ListName>{" "}
                <MY.ListStar>
                  <Rate value={props.el.rating} disabled />
                </MY.ListStar>
              </MY.NameStar>
              <MY.ListComment>{props.el.contents} </MY.ListComment>
            </MY.ListContents>
            <MY.CommentButton>
              <MY.EditButton
                id={props.el._id}
                onClick={editCommentIcon}
              ></MY.EditButton>
              <MY.DeleteButton
                onClick={DeletePassWord}
                id={props.el._id}
              ></MY.DeleteButton>
              {deleteOpen && (
                <Modal
                  visible={true}
                  onOk={DeleteComment}
                  onCancel={DeleteModal}
                >
                  <div>댓글을 삭제하시려면 비밀번호를 입력하세요.</div>
                  <input
                    type="password"
                    placeholder="비밀번호"
                    onChange={onChangeDeletePass}
                  ></input>
                </Modal>
              )}
            </MY.CommentButton>
          </MY.ListProfile>
          <MY.ListDate>{getDate(props.el.createdAt)}</MY.ListDate>
        </MY.ListProfileBox>
      )}
      {isEdit === true && (
        <MY.CommentEditBox>
          <MY.CommentTitle>
            <MY.CommentIcon></MY.CommentIcon>
            <MY.Title>댓글수정</MY.Title>
            <MY.DeleteButton2 onClick={CloseEdit}></MY.DeleteButton2>
          </MY.CommentTitle>
          <MY.CommentTopBox>
            <MY.NameInput
              id="editWriter"
              value={props.el.writer}
              type="text"
            ></MY.NameInput>
            <MY.PassWordInput
              placeholder="비밀번호"
              type="password"
              onChange={onChangeEditPassWord}
            ></MY.PassWordInput>
            <MY.Star>
              <Rate onChange={editStarChange} value={editValue} />
            </MY.Star>
          </MY.CommentTopBox>
          <MY.CommentContents>
            <MY.CommentInPut
              defaultValue={props.el.contents}
              onChange={onChangeEditContents}
              maxLength={100}
            ></MY.CommentInPut>
            <MY.ContentsFootBox>
              <MY.TextLimit>{editContents.length}/100</MY.TextLimit>
              <MY.OKButton onClick={UpDateComment}>수정하기</MY.OKButton>
            </MY.ContentsFootBox>
          </MY.CommentContents>
        </MY.CommentEditBox>
      )}
    </div>
  );
}
