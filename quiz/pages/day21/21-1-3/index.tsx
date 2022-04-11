import { useState } from "react";
import Presenter from "../../../src/day21/day21-1-2.presenter";

export default function Container() {
  ["철수", "영희", "훈이", "맹구"].map((_, index) => {
    console.log(`영희는 ${index}번째 칸에 들어있습니다.`);
  });

  const [state, setState] = useState(0);

  const onClickButton = () => {
    setState((qwer) => qwer + 1);
  };

  return (
    <>
      <button onClick={onClickButton}>스테이트올리기!</button>
      <div>{state}</div>
    </>
  );
}
