import { gql, useMutation, useQuery } from "@apollo/client";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      likeCount
    }
  }
`;
const LIKE_BOARD = gql`
  mutation likeBoard($boardId: ID!) {
    likeBoard(boardId: $boardId)
  }
`;

export default function OptimisticUiPage() {
  const [likeBoard] = useMutation(LIKE_BOARD);
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: "6269ecd0a8255b002988d632" },
  });

  const onClickOptimisticUi = () => {
    likeBoard({
      variables: { boardId: "6269ecd0a8255b002988d632" },

      //   refetchQueries: [
      //     {
      //       query: FETCH_BOARD,
      //       variables: { boardId: "6269ecd0a8255b002988d632" },
      //     },
      //   ],
      optimisticResponse: {
        likeBoard: (data?.fetchBoard.likeCount || 0) + 1,
      },
      update(cache, { data /*라이크보드의 데이터*/ }) {
        cache.writeQuery({
          query: FETCH_BOARD,
          variables: { boardId: "6269ecd0a8255b002988d632" },
          data: {
            fetchBoard: {
              _id: "6269ecd0a8255b002988d632", // 필수
              __typename: "Board", // 필수
              likeCount: data.likeBoard,
            },
          },
        });
        // 직접 캐쉬를 작성한다.패치보드로 받아온 데이터를 바꾼다.
      },
    });
  };

  return (
    <div>
      <h1>옵티미스틱 UI</h1>
      <div>현재카운트{data?.fetchBoard.likeCount}</div>
      <button onClick={onClickOptimisticUi}>좋아요 올리기!!</button>
    </div>
  );
}
