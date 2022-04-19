import { useAuth } from "../../src/components/commons/hooks/useAuth";

function CustomHooksUseAuthPage() {
  useAuth();
  return <div>철수의 프로필 페이지입니다!!</div>;
}
export default CustomHooksUseAuthPage;

// 클래스 컴포넌트때에는 위처럼 못했어서.. HOC 기반이어야하뮤ㅠㅠㅠ
