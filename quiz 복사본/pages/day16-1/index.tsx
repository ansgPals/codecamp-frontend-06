import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

export default function QuizPage() {
  const [isChange, setIsChange] = useState(false);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  const ClickChange = () => {
    setIsChange((prev) => !prev);
  };
  const ClickMove = () => {
    router.push(`/day12-5-selfModal`);
  };
  useEffect(() => {
    alert("Changed!!");
  }, [isChange]);

  useEffect(() => {
    alert("Rendered!!");
    inputRef.current?.focus();
    return () => {
      alert("Bye!!");
    };
  }, []);

  return (
    <>
      <button onClick={ClickChange}>참거짓</button>
      <div> {String(isChange)}!</div>
      <button onClick={ClickMove}>이동!!!!뿅</button>
      <input type="text" ref={inputRef} />
    </>
  );
}
