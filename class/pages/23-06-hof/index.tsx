export default function HofPage() {
  const onClickChild = (el) = (event) => {
      
  });

  return (
    <div>
      <h1>HOF 연습 페이지입니다!!!</h1>
      {["철수", "영희", "훈이"].map((el) => (
        <div key={el} id="asdsdf" onClick={onClickChild(el)}>
          {el}
        </div>
      ))}
    </div>
  );
}
