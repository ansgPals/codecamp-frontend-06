import { type } from "os";

export default function TypeScriptPage() {
  //유틸리티 타입에 관하여  : 기존에 있는것을 개조해서 사용 /더많은것은 타입스크립트 독스에서!

  interface IProfile {
    name: string;
    age: number;
    school: string;
    hobby?: string;
  }
  //1 픽타입
  type MYtype1 = Pick<IProfile, "name" | "age">;

  //2. 오밋타입 **만 빼고온다
  type MYtype2 = Omit<IProfile, "school">;

  //3.파셜타입 전체 다 올수도 안올수도
  type MYtype3 = Partial<IProfile>;

  //4. 리콰이어타입 전체 다 무조건입력으로 해서 옴
  type MYtype4 = Required<IProfile>;

  //5. 레코드 타입1
  type zzz = "aaa" | "qqq" | "rrr"; //유니온타입
  let apple: zzz;
  apple = "aaa";
  // apple = "aaa아니면 큐큐큐아니면 알알알만 올수있음!"

  //6. 레코드 타입2
  type MYtype5 = Record<zzz, IProfile>;

  //========추가(선언병합)=======
  // interface 와 type 의 차이는 무엇?
  // interface 는 같은이름으로 또만들수있고
  // 타입은 한번만듦녀 끝임

  interface IProfile {
    candy: number;
  }
  let profile: IProfile;

  // 하면 기존의 아이프로필에 추가가 됨

  return <div>타입스크립트 연습하기</div>;
}
