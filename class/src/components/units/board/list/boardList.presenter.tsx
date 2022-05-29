import { red } from "@material-ui/core/colors";
import * as MY from "./boardList.styles";
import { IBoardListUIProps } from "./boardList.types";
import { v4 as uuid } from "uuid";
import PagiNationComponent from "../pagination/pagination.container";

export default function BoardListUI(props: IBoardListUIProps) {
  return (
    <div>
      <MY.BackGround>
        <MY.TitleBox>
          <MY.CatTitle>GOANGSSS 자랑</MY.CatTitle>
          <MY.SearchBox>
            <MY.Search onClick={props.onClickSerch}>검색</MY.Search>{" "}
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
                <MY.Cal2>{el.title}</MY.Cal2>
                <MY.Cal3
                  id={el._id}
                  onClick={props.onClickGoBoard(el._id, index)}
                >
                  {el.contents.slice(0, 18)}
                </MY.Cal3>
                <MY.Cal4>{el.writer}</MY.Cal4>
                <MY.Cal5></MY.Cal5>
              </MY.Row>
            ))}
          {!props.data?.fetchBoards[0] && (
            <MY.SearchAlert>
              검색하신내용과 일치하는 게시물이 없습니다.
            </MY.SearchAlert>
          )}
        </MY.ListBox>
        <MY.BottomBox>
          <PagiNationComponent
            numberOfPageData={props.numberOfPageData}
            refetch={props.refetch}
            dataCount={props.dataCount}
            setPickPage={props.setPickPage}
            startPage={props.startPage}
            setStartPage={props.setStartPage}
            pickPage={props.pickPage}
          />
        </MY.BottomBox>
      </MY.BackGround>
    </div>
  );
}
