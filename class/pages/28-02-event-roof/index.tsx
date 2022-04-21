// setTimeout,setInterval 은 왜 올바르지 못한가?

export default function EventRoofPage() {
  const onClickTimer = () => {
    console.log("===========시작===========");
    setTimeout(() => {
      console.log("1초뒤에 실행될 것입니돳");
    }, 100);

    console.log("===========끝===========");
  };
  return (
    <div>
      <button onClick={onClickTimer}>setTimeout 실행시키기!!</button>
      <button>setInterval 실행시키기!!</button>
    </div>
  );
}
