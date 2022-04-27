import { ConsoleSqlOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import axios from "axios";
import { useState } from "react";
const MyRow = styled.div`
  display: flex;
  flex-direction: row;
`;
const MyCal = styled.div`
  width: 25%;
`;

export default function CallbackPage() {
  // const [promise, setPromise] = useState([]);
  // const [callBack, setCallBack] = useState([]);
  const [data, setData] = useState([]);
  const onClickCallback = () => {
    const aaa = new XMLHttpRequest();
    aaa.open("get", "http://numbersapi.com/random?min=1&max=200");
    aaa.send();
    aaa.addEventListener("load", (res) => {
      const num = (res.target as XMLHttpRequest).response.split(" ")[0]; // 131 (랜덤숫자)

      const bbb = new XMLHttpRequest();

      bbb.open("get", `http://koreanjson.com/posts/${num}`);
      bbb.send();
      bbb.addEventListener("load", (res) => {
        const postRes = (res.target as XMLHttpRequest).response;
        const userId = JSON.parse(postRes).UserId;

        const ccc = new XMLHttpRequest();
        ccc.open("get", `http://koreanjson.com/posts?userId=${userId}`);
        ccc.send();
        ccc.addEventListener("load", (res) => {
          const posts = JSON.parse((res.target as XMLHttpRequest).response);
          setData(posts);
        });
      });
    });
  };

  const onClickPromise = () => {
    axios
      .get("http://numbersapi.com/random?min=1&max=200")
      .then((res) => {
        const num = res.data.split(" ")[0]; // 71(랜덤숫자)
        return axios.get(`http://koreanjson.com/posts/${num}`);
      })
      .then((res) => {
        const userId = res.data.UserId;
        return axios.get(`http://koreanjson.com/posts?userId=${userId}`);
      })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      });
  };

  const onClickAsyncAwait = async () => {
    const aaa = await axios.get("http://numbersapi.com/random?min=1&max=200");
    console.log(aaa.data.split(" ")[0]);

    const bbb = await axios.get(
      `https://koreanjson.com/posts/${aaa.data.split(" ")[0]}`
    );
    const userId = bbb.data.UserId;
    const ccc = await axios.get(`http://koreanjson.com/posts?userId=${userId}`);
    console.log(ccc.data);
    setData(ccc.data);
  };

  return (
    <div>
      <button onClick={onClickCallback}>Callback 요청하기!!</button>
      <button onClick={onClickPromise}>Promise 요청하기!!</button>
      <button onClick={onClickAsyncAwait}>Asyncawait 요청하기!!</button>
      <div>
        {data?.map((el) => (
          <MyRow key={el._id}>
            <MyCal>{el._id}</MyCal>
            <MyCal>{el.title}</MyCal>
            <MyCal>{el.content}</MyCal>
          </MyRow>
        ))}
      </div>
    </div>
  );
}
