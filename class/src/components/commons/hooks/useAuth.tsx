import { useRouter } from "next/router";
import { useEffect } from "react";

export function useAuth() {
  const router = useRouter();
  useEffect(() => {
    // if (!localStorage.getItem("accessToken")) {
    //   alert("로그인을 먼저 해야합니다.");
    //   router.push(`/23-04-login-check`);
    // }
    if (!accessToken) {
      alert("로그인을 먼저 해야합니다.");
      router.push(`/23-04-login-check`);
    }
  }, []);



  if (!accessToken) {
    getAccessToken().then((newAccessToken) => {
      setAccessToken(newAccessToken);
      if(!newAccessToken){
        alert("로그인을 먼저 해야합니다.");
        router.push(`/23-04-login-check`);
      }
    });
  }
}, []);
위의방식에는 문제가 있음!! 비효율적이다



}
