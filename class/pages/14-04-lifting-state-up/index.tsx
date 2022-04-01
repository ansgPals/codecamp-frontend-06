import { useState } from "react";
import LiftingChild1 from "../../src/components/units/board/14-lifting-state-up/Child1";
import LiftingChild2 from "../../src/components/units/board/14-lifting-state-up/Child2";

export default function LiftingStateUpPage() {
  const [count, setCount] = useState(0);
  //밥법-1
  const onClickCountUp = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <LiftingChild1 count={count} setCount={setCount} />
      <div>===============</div>
      <LiftingChild2 count={count} onClickCountUp={onClickCountUp} />
    </div>
  );
}
