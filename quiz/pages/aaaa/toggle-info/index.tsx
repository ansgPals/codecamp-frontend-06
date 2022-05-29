import { useState } from "react";
import CheckboxPurple from "../../src/components/commons/check-box/check-box";
import Toggle from "../../src/components/commons/toggle/toggle";

export default function ButtonInfoPage() {
  const [toggle, setToggle] = useState(true);

  const clickedToggle = () => {
    setToggle((prev) => !prev);
  };

  const [state, setState] = useState(true);
  const handleChange = () => {
    setState((prev) => !prev);
  };

  return (
    <div>
      {/* //   토글을 div로 감싸서 사용해주세용! */}
      <div onClick={clickedToggle}>
        <Toggle toggle={toggle} />
      </div>
      <div onClick={handleChange}>
        <CheckboxPurple checked={state} />
      </div>
    </div>
  );
}
