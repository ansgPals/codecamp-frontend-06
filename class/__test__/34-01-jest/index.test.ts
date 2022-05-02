import { add } from "../../pages/34-01-jest";

it("더하기 잘 되는지 테스트 해보기", () => {
  const result = add(3, 5);
  expect(result).toBe(8);
});
// describe("테스트 그룹",()=>{

//   it("내가 하고싶은 테스트",()=>{

//   })
//   it("내가 하고싶은 테스트2",()=>{

//   })

// })
