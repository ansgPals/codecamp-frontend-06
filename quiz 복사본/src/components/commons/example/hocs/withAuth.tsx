import { useRouter } from "next/router";
import { useEffect } from "react";
// @ts-ignore

export const withAuth = (Component) => (props) => {
  const router = useRouter();
  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      alert("로그인을 먼저 해야합니다.");
      router.push(`/example/login`);
    }
  }, []);
  return <Component {...props} />;
};
