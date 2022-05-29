import { useQuery } from "@apollo/client";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./boardList.queries";
import BoardListUI from "./boardList.presenter";
import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useRef, useState } from "react";
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

  const [pickPage, setPickPage] = useState(1);
  const router = useRouter();
  const [startPage, setStartPage] = useState(1);
  const [searchWord, setSearchWord] = useState("");

  const onchangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchWord(event.target.value);
  };
  const onClickSerch = () => {
    refetch({ search: searchWord, page: 1 });
    searchRefetch({ search: searchWord, page: 1 });
    setStartPage(1);
    setPickPage(1);
    sessionStorage.setItem("pageNumber", JSON.stringify(1));
    sessionStorage.setItem("searchWord", JSON.stringify(searchWord));
  };

  const onClickGoBoard = (id: string, index: number) => () => {
    if (id) router.push(`/0000/boards/${id}`);
    //   instanceof HTMLDivElement라고 써도됨 웹브라우저마다 상황이달라서 타입스크립트에서 못만듬
    sessionStorage.setItem("indexNumber", JSON.stringify(index));
  };
  const numberOfPageData = 10;

  useEffect(() => {
    inputRef.current?.focus();
    sessionStorage.setItem("pageNumber", JSON.stringify(1));
    sessionStorage.setItem("searchWord", JSON.stringify(""));
    sessionStorage.setItem(
      "numberOfPageData",
      JSON.stringify(numberOfPageData)
    );
  }, []);

  return (
    <BoardListUI
      data={data}
      fetchBoardsCount={fetchBoardsCount}
      onClickGoBoard={onClickGoBoard}
      inputRef={inputRef}
      onchangeSearch={onchangeSearch}
      onClickSerch={onClickSerch}
      refetch={refetch}
      dataCount={fetchBoardsCount?.fetchBoardsCount}
      setPickPage={setPickPage}
      startPage={startPage}
      setStartPage={setStartPage}
      pickPage={pickPage}
      numberOfPageData={numberOfPageData}
    />
  );
}
