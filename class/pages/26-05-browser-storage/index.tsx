export default function BrowserStragePage() {
  const onClickSaveCookie = () => {
    document.cookie = "aaa=철수";
    document.cookie = "zzz=맹구";
  };
  const onClickSaveLocal = () => {
    localStorage.setItem("bbb", "영희");
  };
  const onClickSaveSession = () => {
    sessionStorage.setItem("ccc", "후니");
  };
  const onClickLoadCookie = () => {
    // const myCookie = document.cookie
    //   .split("; ")
    //   .filter((el) => el.includes("aaa"));
    // console.log(myCookie)[0].replace("aaa=", "");

    const myCookie = document.cookie
      .split("; ")
      .filter((el) => el.startsWith("aaa"))[0]
      .replace("aaa=", "");
    console.log(myCookie);
    // 쿠키는 쿠키를 통재로 가져와야함 그럼 철수랑 맹구만 꺼내고싶다묜?? 알고리즘 사용해야.. ;를 기준으로 split한다거나..?
  };
  const onClickLoadLocal = () => {
    const bbb = localStorage.getItem("bbb");
    console.log(bbb);
  };

  const onClickLoadSession = () => {
    const ccc = sessionStorage.getItem("ccc");
    console.log(ccc);
  };

  return (
    <div>
      <button onClick={onClickSaveCookie}>쿠키에 저장</button>
      <button onClick={onClickSaveLocal}>로컬스토리지에 저장</button>
      <button onClick={onClickSaveSession}>세션스토리지에 저장</button>
      =======================
      <button onClick={onClickLoadCookie}>쿠키조회</button>
      <button onClick={onClickLoadLocal}>로컬조회</button>
      <button onClick={onClickLoadSession}>세션조회</button>
    </div>
  );
}
