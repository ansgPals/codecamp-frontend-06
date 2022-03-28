import { getDate } from "../libraries/util";
import * as MY from "./boardList.styles";
import { IBoardListUIProps } from "./boardList.types";

export default function BoardListUI(props: IBoardListUIProps) {
  return (
    <div>
      <MY.BackGround>
        <MY.ListBox>
          <MY.Row>
            <MY.Cal1>번호</MY.Cal1>
            <MY.Cal2>제목</MY.Cal2>
            <MY.Cal3>내용</MY.Cal3>
            <MY.Cal4>작성자</MY.Cal4>
            <MY.Cal5>날짜</MY.Cal5>
          </MY.Row>
          {props.data?.fetchBoards.map((el: any, index: number) => (
            <MY.Row key={el._id}>
              <MY.Cal1>{index + 1}</MY.Cal1>
              <MY.Cal2>{el.title}</MY.Cal2>
              <MY.Cal3 id={el._id} onClick={props.onClickGoBoard}>
                {el.contents.slice(0, 18)}
              </MY.Cal3>
              <MY.Cal4>{el.writer}</MY.Cal4>
              <MY.Cal5>{getDate(el.createdAt)}</MY.Cal5>
            </MY.Row>
          ))}
        </MY.ListBox>
        <MY.WriteBoardButton onClick={props.GoWriteBoard}>
          새글쓰기
        </MY.WriteBoardButton>
      </MY.BackGround>
    </div>
  );
}
