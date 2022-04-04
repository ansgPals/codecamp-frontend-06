import { Component } from "react";
interface IState {
  count: number;
}
export default class CounterPage extends Component {
  state = {
    count: 99,
  };

  onClickCounter = () => {
    this.setState((prev: IState) => ({ count: prev.count + 1 }));
  };

  //   onClickCounter=()=>{
  //     this.setState((prev: IState) => ({ count: prev.count + 1 }));
  //   }

  // 화살표함수를 사용해야 디스가 가리키는것이 지금페이지 전체를 말하는것이 된다.
  // this 가 가리키는 것이 윈도우로 인식됨 (윈도우에서 버튼을 실행시키니까!)

  //   onClickCounter() {
  //     // console.log("카운터클릭");
  //     console.log(this.state.count);
  //     // this.setState((prev: IState) => ({ count: prev.count + 1 }));
  //   }

  render() {
    return (
      <>
        <div>현재카운트 : {this.state.count}</div>
        <button onClick={this.onClickCounter.bind(this)}>
          카운트 올리기!!
        </button>
      </>
    );
  }
}
