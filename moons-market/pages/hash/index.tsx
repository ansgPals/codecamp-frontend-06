import { useState } from "react";

export default function HashTagPage() {
  const [hashArr, setHashArr] = useState([]);
  const onKeyUpHash = (event) => {
    if (event.keyCode === 32 && event.target.value !== " ") {
      // 스페이스바32 스페이스를 눌렀을때 빈값이 아니면
      setHashArr([...hashArr, "#" + event.target.value]);
      event.target.value = "";
    }
  };

  return (
    <div>
      <span>
        {hashArr.map((el, idx) => (
          <span key={idx}>{el}</span>
        ))}
      </span>
      <input type="text" onKeyUp={onKeyUpHash} />
    </div>
  );
}
