import { useQuery } from "@apollo/client";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./boardList.queries";
import BoardListUI from "./boardList.presenter";
import { useRouter } from "next/router";
import { ChangeEvent, MouseEvent, useEffect, useRef, useState } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../../commons/types/generated/types";
import _ from "lodash";

export default function BoardList() {
  const inputRef = useRef<HTMLInputElement>(null);

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);
  const { data: fetchBoardsCount, refetch: searchRefetch } =
    useQuery(FETCH_BOARDS_COUNT);

  console.log(fetchBoardsCount);

  const [pickPage, setPickPage] = useState(1);
  const lastPage = fetchBoardsCount?.fetchBoardsCount
    ? Math.ceil(fetchBoardsCount?.fetchBoardsCount / 10)
    : 0;
  console.log(lastPage);
  const [keyword, setkeyword] = useState("");

  const router = useRouter();
  console.log(router);
  const [startPage, setStartPage] = useState(1);

  const searchDebounce = _.debounce((searchWord: any) => {
    refetch({ search: searchWord, page: 1 });
    searchRefetch({ search: searchWord, page: 1 });
    setkeyword(searchWord);
  }, 500);

  const onchangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    searchDebounce(event.target.value);
  };

  const onClickGoBoard = (event: MouseEvent<HTMLButtonElement>) => {
    if (event.target instanceof Element)
      router.push(`/boards/${event.target.id}`);
    //   instanceof HTMLDivElement라고 써도됨 웹브라우저마다 상황이달라서 타입스크립트에서 못만듬
  };

  const GoWriteBoard = () => {
    router.push(`/boards/new`);
  };
  const onClickPageNumber = (event: MouseEvent<HTMLButtonElement>) => {
    if (event.target instanceof Element)
      refetch({ page: Number(event.target.id) });
    setPickPage(Number(event.target.id));
  };
  const onClickPrevPage = () => {
    if (startPage <= 1) return;
    setStartPage((prev) => prev - 10);
    refetch({ page: Number(startPage - 10) });
    setPickPage(startPage - 10);
  };
  const onClickNextPage = () => {
    if (startPage + 10 > lastPage) return;
    setStartPage((prev) => prev + 10);
    refetch({ page: Number(startPage + 10) });
    setPickPage(startPage + 10);
  };
  useEffect(() => {
    console.log("마운트됨!");
    inputRef.current?.focus();
  }, []);

  return (
    <BoardListUI
      data={data}
      fetchBoardsCount={fetchBoardsCount}
      onClickGoBoard={onClickGoBoard}
      GoWriteBoard={GoWriteBoard}
      onClickPageNumber={onClickPageNumber}
      onClickPrevPage={onClickPrevPage}
      onClickNextPage={onClickNextPage}
      startPage={startPage}
      lastPage={lastPage}
      pickPage={pickPage}
      inputRef={inputRef}
      onchangeSearch={onchangeSearch}
      keyWord={keyword}
    />
  );
}
