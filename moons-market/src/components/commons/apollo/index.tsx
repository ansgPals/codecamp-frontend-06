import {
  accessTokenState,
  todayProductState,
  userInfoState,
} from "../../../commons/store";
import { createUploadLink } from "apollo-upload-client";
import {
  ApolloClient,
  ApolloLink,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { useRecoilState } from "recoil";
import { useEffect } from "react";
import { getAccessToken } from "../../../commons/library/getAccessToken";

export default function ApolloSetting(props: any) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [, setUserInfo] = useRecoilState(userInfoState);
  const [todayProduct, setTodayProduct] = useRecoilState(todayProductState);
  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        if (err.extensions.code === "UNAUTHENTICATED") {
          getAccessToken().then((newAccessToken) => {
            setAccessToken(newAccessToken);
            operation.setContext({
              headers: {
                ...operation.getContext().headers,
                Authorization: `Bearer ${newAccessToken}`, // 엑세스 토큰만 바꿔치기!
              },
            });
            return forward(operation);
          });
        }
      }
    }
  });
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}");
    const todayProduct = JSON.parse(
      localStorage.getItem("todayProduct") || "{}"
    );
    setTodayProduct(todayProduct || "");
    setUserInfo(userInfo);
  }, []);

  const uploardLink = createUploadLink({
    uri: "https://backend06.codebootcamp.co.kr/graphql",
    headers: { Authorization: `Bearer ${accessToken}` },
    credentials: "include",
  });
  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploardLink]),
    cache: new InMemoryCache(),
  });
  return (
    <>
      <ApolloProvider client={client}>{props.children}</ApolloProvider>
    </>
  );
}
