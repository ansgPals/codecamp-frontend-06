import { useState } from "react";

export default function LiftingChild1(props) {
  const aaa = () => {
    props.setCount((prev) => prev + 1);
  };

  return (
    <>
      <div>자식1의 카운트:{props.count}</div>
      <button onClick={aaa}>카운트 올리기!!</button>
    </>
  );
}
