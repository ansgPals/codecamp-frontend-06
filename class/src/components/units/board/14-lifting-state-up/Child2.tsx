import { useState } from "react";

export default function LiftingChild2(props) {
  return (
    <>
      <div>자식2의 카운트:{props.count}</div>
      <button onClick={props.onClickCountUp}>카운트 올리기!!</button>
    </>
  );
}
