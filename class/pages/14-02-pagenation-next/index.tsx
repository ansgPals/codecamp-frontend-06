import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import { useState } from "react";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
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
  /* width: 25%; */
`;

export default function MapBoardPage() {
  const [startPage, setStartPage] = useState(1);
  const { data, refetch } = useQuery(FETCH_BOARDS);
  const OnclickPage = (event) => {
    refetch({ page: Number(event.target.id) });
  };
  const OnClickPrevPage = () => {
    if (startPage === 1) return;
    setStartPage((prev) => prev - 10);
  };

  const OnClickNextPage = () => {
    setStartPage((prev) => prev + 10);
  };

  return (
    <div>
      {data?.fetchBoards.map((el: any) => (
        <MyRow key={el._id}>
          <MyCal>{el.writer}</MyCal>
          <MyCal>{el.title}</MyCal>
        </MyRow>
      ))}
      <span onClick={OnClickPrevPage}>이전페이지</span>
      {new Array(10).fill(1).map((_, index) => (
        <span
          key={index + startPage}
          onClick={OnclickPage}
          id={String(index + startPage)}
        >
          {index + startPage}
          {/* 기준 + index */}
        </span>
      ))}
      <span onClick={OnClickNextPage}>다음페이지</span>

      {/* {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((el) => (
        <span key={el} onClick={OnclickPage} id={String(el)}>
          {el}
        </span>
      ))} */}
      {/* <span onClick={OnclickPage} id="1">
        1
      </span>
      <span onClick={OnclickPage} id="2">
        2
      </span>
      <span onClick={OnclickPage} id="3">
        3
      </span> */}
    </div>
  );
}
