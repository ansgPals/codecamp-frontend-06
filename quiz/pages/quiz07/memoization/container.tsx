import { useCallback, useMemo, useState } from "react";

import MemoizationPresenterPage from "./presenter";

export default function MemoizationContainerPage() {
  let countLet = 0;

  const [countState, setCountState] = useState(0);

  const onClickLet = useCallback(() => {
    console.log(countLet + 1);
    countLet += 1;
  }, []);

  // const onClickState = useCallback(() => {
  //   setCountState((prev) => prev + 1);
  // }, []);

  // const onClickState = () => {
  //   setCountState((prev) => prev + 1);
  //   console.log(countState + 1);
  // };

  // const onClickState = useMemo(() => {
  // return () => {
  //   setCountState((prev) => prev + 1);
  // };
  // }, []);

  return (
    <div>
      <div>=============================</div>

      <h1>요것은 컨테이너입니돠아.</h1>
      <div>카운트(let):{countLet}</div>
      <button onClick={onClickLet}>(let)+1 올리기!!</button>
      <div>카운트(state):{countState}</div>
      <button
        onClick={useMemo(() => {
          return () => {
            setCountState((prev) => prev + 1);
          };
        }, [])}
      >
        (state)+1 올리기!!
      </button>
      <div>=============================</div>
      <MemoizationPresenterPage />
    </div>
  );
}
