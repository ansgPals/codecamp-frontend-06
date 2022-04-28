import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import {
  accessTokenState,
  restoreAccessTokenLoadable,
} from "../../../commons/store";

export function useAuth() {
  const [accessToken] = useRecoilState(accessTokenState);
  const restoreAccessToken = useRecoilValueLoadable(restoreAccessTokenLoadable);
  const router = useRouter();
  // useEffect(() => {
  //   if (!localStorage.getItem("accessToken")) {
  //     alert("로그인을 먼저 해야합니다.");
  //     router.push(`/login`);
  //   }
  // }, []);
  useEffect(() => {
    if (!accessToken) {
      restoreAccessToken.toPromise().then((newAccessToken) => {
        if (!newAccessToken) {
          alert("로그인 후 이용 가능합니다!!!");
          router.push("/login");
        }
      });
    }
  }, []);
}
