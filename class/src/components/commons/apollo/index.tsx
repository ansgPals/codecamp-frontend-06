import { accessTokenState, userInfoState } from "../../../commons/store";
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

  // 프리랜더링시 문제되는 코드
  // const myLocalStorageAccessToken = localStorage.accessToken;
  // setAccessToken(myLocalStorageAccessToken || "")
  // 1) 더이상 지원되지 않음!
  //   if(process.browser){

  // }else{

  // }
  //   2) 두번째방법!
  // 윈도우가 없다면= 프론트앤드 서버라면
  // 윈도우가 없는게 아니라면 = 브라우저라면
  // if (typeof window !== "undefined") {
  //  console.log("여기는 브라우저다")
  // }else(typeof window === "undefined"){
  //   console.log("여기는 프론트엔드서버다!(yarn dev)")
  // }

  // 3)세번째방법!
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    const userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}");
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
