import { useRouter } from "next/router";
import { useEffect } from "react";
import { accessTokenState } from "../../../commons/store";
// @ts-ignore
export const withAuth = (Component) => (props) => {
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
