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
import {
  FETCH_BOARD,
  DELETE_BOARD,
  LIKE_BOARD,
  DIS_LIKE_BOARD,
} from "./boardShow.queries";

export default function BoardRoad() {
  const [deleteBoard] = useMutation<
    Pick<IMutation, "deleteBoard">,
    IMutationDeleteBoardArgs
  >(DELETE_BOARD);
  const [likeBoard] = useMutation(LIKE_BOARD);
  const [dislikeBoard] = useMutation(DIS_LIKE_BOARD);
  const router = useRouter();
  console.log(router);
  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: { boardId: String(router.query.boardId) },
    }
  );
  console.log(data);

  const LikeButton = () => {
    likeBoard({
      variables: { boardId: String(data?.fetchBoard._id) },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: { boardId: String(router.query.boardId) },
        },
      ],
    });
  };

  const DisLikeButton = () => {
    dislikeBoard({
      variables: { boardId: String(data?.fetchBoard._id) },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: { boardId: String(router.query.boardId) },
        },
      ],
    });
  };

  const OnClickDelete = () => {
    deleteBoard({
      variables: { boardId: String(data?.fetchBoard._id) },
    });
    router.push("/boards");
  };
  const OnClickEdit = () => {
    router.push(`/boards/${router.query.boardId}/edit`);
  };

  const OnClickList = () => {
    router.push("/boards");
  };

  return (
    <BoardRoadUI
      data={data}
      OnClickDelete={OnClickDelete}
      OnClickList={OnClickList}
      OnClickEdit={OnClickEdit}
      LikeButton={LikeButton}
      DisLikeButton={DisLikeButton}
    />
  );
}
