import { useQuery } from "@apollo/client";
import { FETCH_BOARDS } from "./boardList.queries";
import BoardListUI from "./boardList.presenter";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
import {
  IQuery,
  IQueryFetchBoardArgs,
  IQueryFetchBoardsArgs,
} from "../../../../commons/types/generated/types";

export default function BoardList() {
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );

  const router = useRouter();
  console.log(router);

  const onClickGoBoard = (event: MouseEvent<HTMLButtonElement>) => {
    if (event.target instanceof Element)
      router.push(`/boards/${event.target.id}`);
    //   instanceof HTMLDivElement라고 써도됨 웹브라우저마다 상황이달라서 타입스크립트에서 못만듬
  };

  const GoWriteBoard = () => {
    router.push(`/boards/new`);
  };

  return (
    <BoardListUI
      data={data}
      onClickGoBoard={onClickGoBoard}
      GoWriteBoard={GoWriteBoard}
    />
  );
}
