import { red } from "@material-ui/core/colors";
import { getDate } from "../libraries/util";
import * as MY from "./boardList.styles";
import { IBoardListUIProps } from "./boardList.types";
import { v4 as uuid } from "uuid";

export default function BoardListUI(props: IBoardListUIProps) {
  return (
    <div>
      <MY.BackGround>
        <MY.TitleBox>
          <MY.CatTitle>GOANGSSS 자랑</MY.CatTitle>
          <MY.SearchBox>
            <MY.Search>검색</MY.Search>{" "}
            <MY.SearchInput
              ref={props.inputRef}
              onChange={props.onchangeSearch}
            ></MY.SearchInput>
          </MY.SearchBox>
        </MY.TitleBox>

        <MY.ListBox>
          <MY.Row>
            <MY.Cal1>번호</MY.Cal1>
            <MY.Cal2>제목</MY.Cal2>
            <MY.Cal3>내용</MY.Cal3>
            <MY.Cal4>작성자</MY.Cal4>
            <MY.Cal5>날짜</MY.Cal5>
          </MY.Row>
          {props.data?.fetchBoards &&
            props.data?.fetchBoards.map((el: any, index: number) => (
              <MY.Row key={el._id}>
                <MY.Cal1>{index + 1}</MY.Cal1>
                <MY.Cal2>
                  {el.title
                    .replace(props.keyWord, `!@#$%${props.keyWord}!@#$%`)
                    .split("!@#$%")
                    .map((el: any) => (
                      <MY.SearchWord
                        key={uuid()}
                        isMatched={props.keyWord === el}
                      >
                        {el}
                      </MY.SearchWord>
                    ))}
                </MY.Cal2>
                <MY.Cal3 id={el._id} onClick={props.onClickGoBoard}>
                  {el.contents.slice(0, 18)}
                </MY.Cal3>
                <MY.Cal4>{el.writer}</MY.Cal4>
                <MY.Cal5>{getDate(el.createdAt)}</MY.Cal5>
              </MY.Row>
            ))}
          {!props.data?.fetchBoards[0] && (
            <MY.SearchAlert>
              검색하신내용과 일치하는 게시물이 없습니다.
            </MY.SearchAlert>
          )}
        </MY.ListBox>
        <MY.BottomBox>
          <MY.PagePrevButton
            onClick={props.onClickPrevPage}
            disabled={props.startPage === 1 ? true : false}
            style={
              props.startPage === 1 ? { color: "white" } : { color: "black" }
            }
          >
            {"<"}
          </MY.PagePrevButton>
          <MY.BoardPageNumberBox>
            {new Array(10).fill(1).map(
              (_, index) =>
                index + props.startPage <= props.lastPage && (
                  <MY.PageNumber
                    key={index + props.startPage}
                    onClick={props.onClickPageNumber}
                    id={String(index + props.startPage)}
                    style={
                      props.pickPage === index + props.startPage
                        ? { color: "#ff7ace" }
                        : { color: "black" }
                    }
                  >
                    {index + props.startPage}
                  </MY.PageNumber>
                )
            )}
          </MY.BoardPageNumberBox>
          <MY.PageNextButton
            onClick={props.onClickNextPage}
            disabled={props.startPage + 10 > props.lastPage ? true : false}
            style={
              props.startPage + 10 > props.lastPage
                ? { color: "white" }
                : { color: "black" }
            }
          >
            {">"}
          </MY.PageNextButton>
        </MY.BottomBox>
        <MY.WriteBoardButton onClick={props.GoWriteBoard}>
          새글쓰기
        </MY.WriteBoardButton>
      </MY.BackGround>
    </div>
  );
}
