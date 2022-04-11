export default function mapElPage() {
  // 1. 기본방법
  ["철수", "영희", "훈이"].map((el) => console.log(el + "어린이"));

  ["철수", "영희", "훈이"].forEach((el, index) => {
    console.log("el:", el);
    console.log("index:", index);
  });

  // 2. 매개변수 변경한 방법
  ["철수", "영희", "훈이"].forEach((asd, qwe) => {
    console.log("el:", asd);
    console.log("index:", qwe);
  });

  // 3. 함수선언식 방법
  ["철수", "영희", "훈이"].forEach(function (asd, qwe) {
    console.log("el:", asd);
    console.log("index:", qwe);
  });

  // 4. el 과 index 바꾸기

  ["철수", "영희", "훈이"].forEach((index, el) => {
    console.log("el:", el);
    console.log("index:", index);
  });

  // --> 이제는 인덱스가 철수영희 훈이임!

  return (
    <>
      <div>el알아보기!</div>
    </>
  );
}
