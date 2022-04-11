import Presenter from "../../../src/day21/day21-1-1.presenter";

// container 부분
export default function Container() {
  return <>{Presenter({ child: "철수" })}</>;
}
