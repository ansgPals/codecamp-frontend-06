import { useMutation, useQuery } from "@apollo/client";
import BestBoardUI from "./BestBoard.presenter";
import { FETCH_BOARDS_OF_THE_BEST, LIKE_BOARD } from "./BestBoard.queries";
import { useRouter } from "next/router";

export default function BestBoard() {
  const [likeBoard] = useMutation(LIKE_BOARD);
  const { data } = useQuery(FETCH_BOARDS_OF_THE_BEST);
  console.log(data);

  const router = useRouter();

  const onClickBest = (event: any) => {
    router.push(`/boards/${event.currentTarget.id}`);
  };

  const onClickJoahyo = (event: any) => {
    likeBoard({
      variables: { boardId: String(event.target.id) },
      refetchQueries: [{ query: FETCH_BOARDS_OF_THE_BEST }],
    });
  };
  return (
    <BestBoardUI
      data={data}
      onClickBest={onClickBest}
      onClickJoahyo={onClickJoahyo}
    />
  );
}
