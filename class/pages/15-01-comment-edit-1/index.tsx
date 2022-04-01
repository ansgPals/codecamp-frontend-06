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
  const [myIndex, setMyIndex] = useState(-1);

  const onClickEdit = (event) => {
    setMyIndex(Number(event.target.id));
  };

  return (
    <div>
      {data?.fetchBoards.map((el: any, index: number) => (
        <div key={el._id}>
          {index !== myIndex && (
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
          {index === myIndex && <div>수정하기 화면입니다.</div>}
        </div>
      ))}
    </div>
  );
}
