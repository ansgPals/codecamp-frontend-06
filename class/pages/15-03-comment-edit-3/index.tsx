import { useQuery, gql } from "@apollo/client";
import BoardCommentItem from "../../src/components/units/board/15-board-comment";

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

export default function MapBoardPage() {
  const { data } = useQuery(FETCH_BOARDS);
  // const [myIndex, setMyIndex] = useState([
  //   false,
  //   false,
  //   false,
  //   false,
  //   false,
  //   false,
  //   false,
  //   false,
  //   false,
  //   false,
  // ]);

  // const onClickEdit = (event) => {
  //   const aaa = [...myIndex];
  //   aaa[Number(event.target.id)] = true;
  //   console.log(aaa);
  //   setMyIndex(aaa);
  //   // 스테이트가 봤을때는 이미 aaa의 값처럼 myindex값이 바뀌어있어서 리랜더링을 할 필요성을 못느껴함 얕은복사의 부작용쓰..
  // };

  return (
    <div>
      {data?.fetchBoards.map((el: any, index: number) => (
        <BoardCommentItem key={el._id} el={el} />
      ))}
    </div>
  );
}
