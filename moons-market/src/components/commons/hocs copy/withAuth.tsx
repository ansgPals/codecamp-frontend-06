import { useRouter } from "next/router";
import { ComponentType, useEffect } from "react";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import {
  accessTokenState,
  restoreAccessTokenLoadable,
} from "../../../commons/store";

export const withAuth =
  (Component: ComponentType) =>
  <P extends {}>(props: P) => {
    const router = useRouter();
    const [accessToken] = useRecoilState(accessTokenState);
    const restoreAccessToken = useRecoilValueLoadable(
      restoreAccessTokenLoadable
    );

    useEffect(() => {
      if (!accessToken) {
        restoreAccessToken.toPromise().then((newAccessToken) => {
          if (!newAccessToken) {
            alert("로그인 후 이용해주세요.");
            router.push("/login");
          }
        });
      }
    }, []);

    return <Component {...props} />;
  };
