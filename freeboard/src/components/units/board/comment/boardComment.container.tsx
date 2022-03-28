import { useMutation, useQuery } from "@apollo/client";
import {
  CREATE_BOARD_COMMENT,
  DELETE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
  UPDATE_BOARD_COMMENT,
} from "./boardComment.queries";
import { ChangeEvent, MouseEvent, useState } from "react";
import BoardCommentUI from "./boardComment.presenter";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchBoardCommentsArgs,
} from "../../../../commons/types/generated/types";
import { Refresh } from "@mui/icons-material";
import { IMyUpDate, IMyVariables } from "./boardComment.types";

export default function BoardComment() {
  const [isEdit, setIsEdit] = useState(false);
  const [commentId, setCommentId] = useState("");
  const router = useRouter();
  const [writer, setWriter] = useState("");
  const [pass, setPass] = useState("");
  const [contents, setContents] = useState("");
  const [editPass, setEditPass] = useState("");
  const [editContents, setEditContents] = useState("");

  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);
  const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);
  const [updateBoardComment] = useMutation(UPDATE_BOARD_COMMENT);

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
  };
  const onChangePassWord = (event: ChangeEvent<HTMLInputElement>) => {
    setPass(event.target.value);
  };
  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value);
  };
  const onChangeEditPassWord = (event: ChangeEvent<HTMLInputElement>) => {
    setEditPass(event.target.value);
  };
  const onChangeEditContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setEditContents(event.target.value);
  };

  const { data } = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCH_BOARD_COMMENTS, {
    variables: { boardId: String(router.query.boardId) },
  });
  console.log(data);

  const ClickOKButton = async () => {
    if (writer === "" || pass === "" || contents === "") {
      alert("내용을 입력하세요");
      return;
    }
    if (writer !== "" && pass !== "" && contents !== "") {
      try {
        const result = await createBoardComment({
          variables: {
            createBoardCommentInput: {
              writer: writer,
              password: pass,
              contents: contents,
              rating: 5,
            },
            boardId: String(router.query.boardId),
          },
          refetchQueries: [
            {
              query: FETCH_BOARD_COMMENTS,
              variables: { boardId: String(router.query.boardId) },
            },
          ],
        });
        console.log(result.data?.createBoardComment._id);
        alert("댓글이 등록되었습니다.");
      } catch (error: any) {
        console.log(error.message);
      }
    }
  };

  const editCommentIcon = (event: MouseEvent<HTMLButtonElement>) => {
    if (isEdit === false) setIsEdit(true);
    if (isEdit === true) setIsEdit(false);
    setCommentId((event.target as HTMLButtonElement).id);
    console.log(commentId);
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

    if (contents !== "") MyUpdateInput.contents = editContents;

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

  const DeleteComment = (event: MouseEvent<HTMLButtonElement>) => {
    deleteBoardComment({
      variables: { boardCommentId: (event.target as HTMLButtonElement).id },
      refetchQueries: [
        {
          query: FETCH_BOARD_COMMENTS,
          variables: { boardId: String(router.query.boardId) },
        },
      ],
    });
  };

  console.log(isEdit);
  return (
    <BoardCommentUI
      onChangeWriter={onChangeWriter}
      onChangePassWord={onChangePassWord}
      onChangeContents={onChangeContents}
      ClickOKButton={ClickOKButton}
      data={data}
      DeleteComment={DeleteComment}
      editCommentIcon={editCommentIcon}
      isEdit={isEdit}
      UpDateComment={UpDateComment}
      onChangeEditPassWord={onChangeEditPassWord}
      onChangeEditContents={onChangeEditContents}
      commentId={commentId}
    />
  );
}
