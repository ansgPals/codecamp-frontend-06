import { useMutation, useQuery } from "@apollo/client";
import BestBoardUI from "./BestBoard.presenter";
import { FETCH_BOARDS_OF_THE_BEST, LIKE_BOARD } from "./BestBoard.queries";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "axios";

export default function BestBoard() {
  const [catFect, setCatFect] = useState("");
  const [likeBoard] = useMutation(LIKE_BOARD);
  const { data } = useQuery(FETCH_BOARDS_OF_THE_BEST);
  console.log(data);

  const router = useRouter();

  useEffect(() => {
    const LoadAPI = async () => {
      const result = await axios.get("https://cat-fact.herokuapp.com/facts");
      setCatFect(result.data[1].text);
    };
    LoadAPI();
  }, []);

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
      catFect={catFect}
    />
  );
}
