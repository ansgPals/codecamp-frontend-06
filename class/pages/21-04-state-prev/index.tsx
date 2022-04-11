import { useState } from "react";

export default function statePrevPage() {
  const [count, setCount] = useState(0);
  //  1. 기존방법
  //   const onClickCounter = () => {
  //     setCount((prev) => prev + 1);
  //   };

  // 2. 함수표현식
  //   const onClickCounter = () => {
  //     setCount(function(asd){
  //     // 로직추가 가능
  //     // if(), for()등
  //        return asd + 1});
  //   };

  //   3. 매개변수 바꿔보기
  const onClickCounter = () => {
    setCount((asd) => asd + 1);
  };

  return (
    <>
      <div>현재카운트 : {count}</div>
      <button onClick={onClickCounter}>카운트 증가!!</button>
    </>
  );
}
