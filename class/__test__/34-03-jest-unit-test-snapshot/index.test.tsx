import { render } from "@testing-library/react";
import JestUnitTestSnapshotPage from "../../pages/34-03-jest-unit-test-snapshot";

it("컴포넌트가 기존이랑 바뀐게 없는지 비교해보기-스냅샷테스트", () => {
  const result = render(<JestUnitTestSnapshotPage />);
  expect(result.container).toMatchSnapshot();
});
