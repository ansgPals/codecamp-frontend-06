import { useQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  IMutation,
  IMutationDeleteBoardArgs,
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../commons/types/generated/types";
import BoardRoadUI from "./boardShow.presenter";
import { FETCH_BOARD, DELETE_BOARD } from "./boardShow.queries";

export default function BoardRoad() {
  const [isModal, setIsModal] = useState(false);
  const [deleteBoard] = useMutation<
    Pick<IMutation, "deleteBoard">,
    IMutationDeleteBoardArgs
  >(DELETE_BOARD);

  const router = useRouter();
  console.log(router);
  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: { boardId: String(router.query.boardId) },
    }
  );
  console.log(data);

  const showModal = () => {
    setIsModal((prev) => !prev);
  };

  const OnClickDelete = () => {
    deleteBoard({
      variables: { boardId: String(data?.fetchBoard._id) },
    });
    alert("게시물이 삭제되었습니다.");
    showModal();
    router.push("/");
  };
  const OnClickEdit = () => {
    router.push(`/boards/${router.query.boardId}/edit`);
  };

  const OnClickList = () => {
    router.push("/");
  };

  return (
    <BoardRoadUI
      data={data}
      OnClickDelete={OnClickDelete}
      OnClickList={OnClickList}
      OnClickEdit={OnClickEdit}
      isModal={isModal}
      showModal={showModal}
    />
  );
}
