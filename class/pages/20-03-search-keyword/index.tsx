import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import { ChangeEvent, useState } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";
import _ from "lodash";
import { v4 as uuidv4 } from "uuid";

const FETCH_BOARDS = gql`
  query fetchBoards($search: String, $page: Int) {
    fetchBoards(search: $search, page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;
const MyRow = styled.div`
  display: flex;
  flex-direction: row;
`;
const MyCal = styled.div`
  width: 25%;
`;
interface IProps {
  isMatched: boolean;
}
const Word = styled.span`
  color: ${(props: IProps) => (props.isMatched ? "red" : "black")};
`;

export default function MapBoardPage() {
  // const [search, setSearch] = useState;
  const [keyWord, setKeyWord] = useState("");

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const getDebounce = _.debounce((data) => {
    refetch({ search: data, page: 1 });
    setKeyWord(data);
  }, 500);
  // 시간 200+0.2초 안에 움직이는건 무시, 지날때까지 실행되는게 없으면 진행.

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.target.value);
  };

  const OnclickPage = (event) => {
    refetch({ page: Number(event.target.id) });
  };

  return (
    <div>
      검색어입력: <input type="text" onChange={onChangeSearch} />
      {data?.fetchBoards.map((el) => (
        <MyRow key={el._id}>
          <MyCal>{el.writer}</MyCal>
          <MyCal>
            {el.title
              .replace(keyWord, `!@#${keyWord}!@#`)
              .split("!@#")
              .map((el) => (
                <Word key={uuidv4()} isMatched={keyWord === el}>
                  {el}
                </Word>
              ))}
          </MyCal>
        </MyRow>
      ))}
      {new Array(10).fill(1).map((_, index) => (
        <span key={index + 1} onClick={OnclickPage} id={String(index + 1)}>
          {index + 1}
        </span>
      ))}
    </div>
  );
}
