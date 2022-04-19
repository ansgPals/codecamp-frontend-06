// 함수를 리턴하는 함수

// 1. HOF- 일반타입
function firstFun1(arg1: string) {
  return function secondFun1(arg2: number): [string, number] {
    return [arg1, arg2];
  };
}

const result1 = firstFun1("영희")(8);

// 2. HOF- any타입
function firstFun2(arg1: any) {
  return function secondFun2(arg2: any): [any, any] {
    return [arg1, arg2];
  };
}

const result2 = firstFun2("영희")(8);

// 3. HOF- Generic타입
function firstFun3<T>(arg1: T) {
  return function secondFun3<U>(arg2: U): [T, U] {
    return [arg1, arg2];
  };
}

const result3 = firstFun3("영희")(8);

// 3. HOF- Generic타입 화살표

const firstFun4 =
  <T>(arg1: T) =>
  <U>(arg2: U): [T, U] => {
    return [arg1, arg2];
  };

const result4 = firstFun4("영희")(8);

// HOF generic 타입(컴포넌트에 응용해보기)
// prettier-ignore
const widAuth = <C>(Component: C) => <P>(props: P): [C, P] => {
    return [Component, props];
  };
const result1 = widAuth("Bbb")({ aaa: "철수" });
