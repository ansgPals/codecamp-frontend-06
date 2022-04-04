import { Component, createRef, useEffect, useRef, useState } from "react";
import useRouter from "next/router";

interface IState {
  count: number;
}
export default function CounterPage() {
  // inputRef = createRef<HTMLInputElement>();
  const [count, setCount] = useState(99);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter;

  // state = {
  //   count: 99,
  // };

  const onClickCounter = () => {
    setCount((prev) => prev + 1);
  };
  // 1. DidMount
  // componentDidMount() {
  //   console.log("마운트됨!!");
  //   this.inputRef.current?.focus();
  //   // 포커스 깜빡깜빡
  // }

  // useEffect(() => {
  //   console.log("마운트됨!");
  //   inputRef.current?.focus();
  // }, []);

  // 2. DidUpdate
  // componentDidUpdate() {
  //   console.log("수정되고 다시그려짐");
  // }

  useEffect(() => {
    console.log("수정되고 다시그려짐");
  }, [count]);
  // }, []);<--의존성 배열 (Dependency Array) 비어있으면 한번만 실행되고
  // 그안에[count]이렇게 들어가면 카운트가 바귈때마다 실행된다!!
  // 이점이 업데이트마운트와 다른것임

  // 3. WillUnmount
  // componentWillUnmount() {
  //   console.log("컴포넌트 사라짐");
  //   // 채팅방 나가기
  //   // api 요청 !! 그러면 나가기 버튼을 안누르고 나갔을때에도 에이피아이가 요청된다~~!
  // }

  // useEffect(() => {
  //   return () => {
  //     console.log("컴포넌트 사라짐");
  //   };
  // }, []);<--의존성 배열 (Dependency Array) 비어있으면 한번만 실행되고 그안에[count]이렇게 들어가면 카운트가 바귈때마다 실행된다!! 이점이 업데이트마운트와 다른것임

  // 4. DidMount와 WillUnmount를 합치기
  useEffect(() => {
    console.log("마운트됨!");
    inputRef.current?.focus();
    return () => {
      console.log("컴포넌트 사라짐");
    };
  }, []);

  // 5.useEffect의 잘못된 사용 예
  // (1)setState 와 함께 사용하게되면 불필요한 랜더링이 일어난다. 권장하지 않음!
  // (2)의존성배열과 스테이트함께사용하면 무한루프 빠질수있드아아

  // useEffect(()=>{
  //   setCount(prev=>prev+1);
  // },[count])

  const onClickMove = () => {
    router.push("/");
  };

  console.log("나는언제실행되게??!");
  // -->맨밑에있는데도 맨먼저 실행된다. 왜냐!! 컴포넌트가 다 만들어지고 알리는거가 디드마운트!!
  return (
    <>
      <input type="text" ref={inputRef} />
      <div>현재카운트 : {count}</div>
      <button onClick={onClickCounter}>카운트 올리기!!</button>
      <button onClick={onClickMove}>나가기</button>
    </>
  );
}
