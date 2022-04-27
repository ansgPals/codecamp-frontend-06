import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
import {
  IBoard,
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../src/commons/types/generated/types";
import BoardItems from "./boardsItem";
import { v4 as uuid } from "uuid";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
      contents
    }
  }
`;

export default function BasketPage() {
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );

  return (
    <div>
      {" "}
      {data?.fetchBoards.map((el: IBoard, index) => (
        <BoardItems key={uuid()} index={index} el={el} />
      ))}
    </div>
  );
}
