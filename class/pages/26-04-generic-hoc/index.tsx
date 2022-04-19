import { useRouter } from "next/router";
import { ComponentType, useEffect } from "react";
// prettier-ignore
export const withAuth = (Component: ComponentType) => <P extends {}>(props : P) => {
  // 권한분기 로직 추가하기
  const router = useRouter();
  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      alert("로그인을 먼저 해야합니다.");
      router.push(`/23-04-login-check`);
    }
  }, []);

  return <Component {...props} />;
};
