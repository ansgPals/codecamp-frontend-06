import { TranslationOutlined } from "@ant-design/icons";
import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import { useState } from "react";

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
const MyRow = styled.div`
  display: flex;
  flex-direction: row;
`;
const MyCal = styled.div`
  width: 25%;
`;

export default function MapBoardPage() {
  const { data } = useQuery(FETCH_BOARDS);
  const [myIndex, setMyIndex] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const onClickEdit = (event) => {
    const aaa = [...myIndex];
    aaa[Number(event.target.id)] = true;
    console.log(aaa);
    setMyIndex(aaa);
    // 스테이트가 봤을때는 이미 aaa의 값처럼 myindex값이 바뀌어있어서 리랜더링을 할 필요성을 못느껴함 얕은복사의 부작용쓰..
  };

  return (
    <div>
      {data?.fetchBoards.map((el: any, index: number) => (
        <div key={el._id}>
          {myIndex[index] === false && (
            <MyRow>
              <MyCal>
                <input type="checkbox" />
              </MyCal>
              <MyCal>{el._id}</MyCal>
              <MyCal>{el.writer}</MyCal>
              <MyCal>{el.title}</MyCal>
              <button id={String(index)} onClick={onClickEdit}>
                수정
              </button>
            </MyRow>
          )}
          {myIndex[index] === true && <div>수정하기 화면입니다.</div>}
        </div>
      ))}
    </div>
  );
}
