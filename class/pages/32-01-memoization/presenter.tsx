import { memo } from "react";

function MemoizationPresenterPage(props) {
  console.log("프리젠터가 랜더링 됩니다.");
  return (
    <div>
      <div>=============================</div>
      <h1>이것은 프리젠터입니다.</h1>
    </div>
  );
}
export default memo(MemoizationPresenterPage);
