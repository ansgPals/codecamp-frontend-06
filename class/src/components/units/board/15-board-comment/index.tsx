import styled from "@emotion/styled";
import { useState } from "react";

const MyRow = styled.div`
  display: flex;
  flex-direction: row;
`;
const MyCal = styled.div`
  width: 25%;
`;

export default function BoardCommentItem(props) {
  const [isEdit, setIsEdit] = useState(false);

  const onClickEdit = () => {
    setIsEdit(true);
    // 스테이트가 봤을때는 이미 aaa의 값처럼 myindex값이 바뀌어있어서 리랜더링을 할 필요성을 못느껴함 얕은복사의 부작용쓰..
  };

  return (
    <div key={props.el._id}>
      {isEdit === false && (
        <MyRow>
          <MyCal>
            <input type="checkbox" />
          </MyCal>
          <MyCal>{props.el._id}</MyCal>
          <MyCal>{props.el.writer}</MyCal>
          <MyCal>{props.el.title}</MyCal>
          <button onClick={onClickEdit}>수정</button>
        </MyRow>
      )}
      {isEdit === true && <div>수정하기 화면입니다.</div>}
    </div>
  );
}
