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
import { useRecoilState } from "recoil";
import { useEffect } from "react";

export default function ApolloSetting(props: any) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [, setUserInfo] = useRecoilState(userInfoState);
  const [todayProduct, setTodayProduct] = useRecoilState(todayProductState);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    const userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}");
    const todayProduct = JSON.parse(
      localStorage.getItem("todayProduct") || "{}"
    );
    setTodayProduct(todayProduct || "");
    setAccessToken(accessToken || "");
    setUserInfo(userInfo);
  }, []);

  const uploardLink = createUploadLink({
    uri: "http://backend06.codebootcamp.co.kr/graphql",
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  const client = new ApolloClient({
    link: ApolloLink.from([uploardLink]),
    cache: new InMemoryCache(),
  });
  return (
    <>
      <ApolloProvider client={client}>{props.children}</ApolloProvider>
    </>
  );
}
