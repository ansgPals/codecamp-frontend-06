import { useCallback, useMemo, useState } from "react";

import MemoizationPresenterPage from "./presenter";

export default function MemoizationContainerPage() {
  console.log("컨테이너가 렌더링 됩니다.");
  let countLet = 0;

  const [countState, setCountState] = useState(0);

  const onClickLet = useCallback(() => {
    console.log(countLet + 1);
    countLet += 1;
  }, []);

  //   const onClickState = useCallback(() => {
  //     setCountState((prev) => prev + 1);
  //   }, []);

  const aaa = useMemo(() => Math.random(), []);
  console.log(aaa);

  // useMeMo로 useCallback을 만들어보기
  const onClickState = useMemo(() => {
    return () => {
      setCountState(countState + 1);
      // setCountState((prev) => prev + 1);
    };
  }, []);

  return (
    <div>
      <div>=============================</div>

      <h1>요것은 컨테이너입니돠아.</h1>
      <div>카운트(let):{countLet}</div>
      <button onClick={onClickLet}>(let)+1 올리기!!</button>
      <div>카운트(state):{countState}</div>
      <button onClick={onClickState}>(state)+1 올리기!!</button>
      <div>=============================</div>
      <MemoizationPresenterPage countState={countState} />
    </div>
  );
}
