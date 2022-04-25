import axios from "axios";
import { reject } from "lodash";

export default function CallbackPromiseAsyncAwaitPage() {
  const onClickCallback = () => {
    const aaa = new XMLHttpRequest();
    aaa.open("get", "http://numbersapi.com/random?min=1&max=200");
    // rest api 주소 1~200   사이의 숫자 랜덤배출
    aaa.send(); // 로드가 다되면 함수실행시켜줘
    aaa.addEventListener("load", (res) => {
      const num = res.target.response.split(" ")[0]; // 131 랜덤숫자

      const bbb = new XMLHttpRequest();
      bbb.open("get", `https://koreanjson.com//posts/${num}`);
      bbb.send();
      bbb.addEventListener("load", (res) => {
        const userId = res.target.response.UserId;

        const ccc = new XMLHttpRequest();
        ccc.open("get", `https://koreanjson.com//posts?userId=${userId}`);
        ccc.send();
        ccc.addEventListener("load", (res) => {
          // 최종결과값
          console.log(res);
        });
      });
    });
  };

  // new Promise((resolve,roject)=>{
  // // 외부 요청 코드
  // const ccc = new XMLHttpRequest();
  // ccc.open("get", `https://koreanjson.com//posts?userId=${userId}`);
  // ccc.send();
  // ccc.addEventListener("load", (res) => {
  //   // 최종결과값
  //   resolve(res);
  // });
  // // 성공

  // resolve("철수")
  // // 실패

  // reject("에러발생!!")

  // }).then((res)=>{}).catch(err=>{})
  // 직접만드는 엑시오스

  const onClickPromise = () => {
    console.log("여기는 1번입니다.");
    axios
      .get("http://numbersapi.com/random?min=1&max=200")
      .then((res) => {
        console.log("여기는 2번입니다.");
        const num = res.data.split(" ")[0]; // 71(랜덤숫자)
        return axios.get(`http://koreanjson.com/posts/${num}`);
      })
      .then((res) => {
        console.log("여기는 3번입니다.");
        const userId = res.data.UserId;
        return axios.get(`http://koreanjson.com/posts?userId=${userId}`);
      })
      .then((res) => {
        console.log("여기는 4번입니다.");
        console.log(res);
      });
    console.log("여기는 5번입니다.");
  };
  // 프로미스 체이닝 콜백지옥보다는 깊이 안들어감 결과를 .then에 담아서 하고또하고 할 수있움
  // 순서가 1,5,2,3,4 로 진행된다.. 프로미스가 큐로 들어간후 스텍에담긴것부터 하고 큐가 진행됨
  // 직관적이지 못함..

  const onClickAsyncAwait = async () => {
    const aaa = await axios.get("http://numbersapi.com/random?min=1&max=200");
    const bbb = await axios.get("http://numbersapi.com/random?min=1&max=200");
    const ccc = await axios.get("http://numbersapi.com/random?min=1&max=200");
  };

  // 에이싱크와 어웨이트를 쓰면 이렇게나 간단해짐!!
  return (
    <>
      <button onClick={onClickCallback}>CallBack 요청하기!!</button>
      <button onClick={onClickPromise}>Promise 요청하기!!</button>
      <button onClick={onClickAsyncAwait}>AsyncAwait 요청하기!!</button>
    </>
  );
}
