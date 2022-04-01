import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import { blue } from "@material-ui/core/colors";
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

const FETCH_BOARD_COUNT = gql`
  query fetchBoardsCount {
    fetchBoardsCount
  }
`;
const BackGround = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const List = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  align-items: center;
  background-color: beige;
  width: 500px;
`;

const PageButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const MyRow = styled.div`
  width: 500px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: aqua;
`;
const MyCal1 = styled.div`
  font-size: 20px;
  background-color: azure;
  width: 200px;
  text-align: center;
`;
const MyCal2 = styled.div`
  font-size: 20px;
  margin-left: 25px;
  width: 300px;
`;
const NextButton = styled.button`
  font-size: 15px;
  margin-left: 5px;
  background-color: beige;
  cursor: pointer;
`;
const BackButton = styled.button`
  font-size: 15px;
  margin-right: 5px;
  background-color: beige;
  cursor: pointer;
`;
const MiniButton = styled.button`
  font-size: 15px;
  margin: 5px;
  cursor: pointer;
`;
export default function MapBoardPage() {
  const [startPage, setStartPage] = useState(1);
  const { data, refetch } = useQuery(FETCH_BOARDS);
  const { data: dataBoardCount } = useQuery(FETCH_BOARD_COUNT);
  const [pickPage, setPickPage] = useState(1);
  console.log(dataBoardCount);
  const lastPage = Math.ceil(dataBoardCount?.fetchBoardsCount / 10);
  const OnclickPage = (event) => {
    refetch({ page: Number(event.target.id) });
    setPickPage(Number(event.target.id));
  };
  const OnClickPrevPage = () => {
    if (startPage === 1) return;
    setStartPage((prev) => prev - 10);
    refetch({ page: Number(startPage - 10) });
    setPickPage(pickPage - 10);
  };

  const OnClickNextPage = () => {
    if (startPage + 10 > lastPage) {
      return;
    }
    setPickPage(pickPage + 10);
    setStartPage((prev) => prev + 10);
    refetch({ page: Number(startPage + 10) });
  };

  return (
    <BackGround>
      <List>
        <MyRow>
          <MyCal1>작성자</MyCal1>
          <MyCal2>내용</MyCal2>
        </MyRow>
        {data?.fetchBoards.map((el: any) => (
          <MyRow key={el._id}>
            <MyCal1>{el.writer}</MyCal1>
            <MyCal2>{el.title}</MyCal2>
          </MyRow>
        ))}
      </List>
      <PageButton>
        <BackButton
          onClick={OnClickPrevPage}
          disabled={startPage === 1 ? true : false}
        >
          {"<"}
        </BackButton>
        {new Array(10).fill(1).map(
          (_, index) =>
            index + startPage <= lastPage && (
              <MiniButton
                key={index + startPage}
                onClick={OnclickPage}
                id={String(index + startPage)}
                style={
                  pickPage === index + startPage
                    ? { color: "red" }
                    : { color: "black" }
                }
              >
                {" "}
                {index + startPage}
                {/* 기준 + index */}
              </MiniButton>
            )
        )}
        <NextButton
          onClick={OnClickNextPage}
          disabled={startPage + 10 > lastPage ? true : false}
        >
          {">"}
        </NextButton>
      </PageButton>
    </BackGround>
  );
}
