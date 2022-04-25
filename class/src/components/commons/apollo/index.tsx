import { accessTokenState } from "../../../commons/store";
import { createUploadLink } from "apollo-upload-client";
import {
  ApolloClient,
  ApolloLink,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import { useRecoilState } from "recoil";
import { onError } from "@apollo/client/link/error";
import { useEffect } from "react";
import { getAccessToken } from "../../../commons/libraries/getAccessToken";

export default function ApolloSetting(props: any) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  // const [, setUserInfo] = useRecoilState(userInfoState);

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
    // const accessToken = localStorage.getItem("accessToken");
    // const userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}");
    // setAccessToken(accessToken || "");
    // setUserInfo(userInfo);
    // accessToken 재발급 받아서 state 에 넣어주기
    getAccessToken().then((newAccessToken) => {
      setAccessToken(newAccessToken);
    });
  }, []);

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    // 1-1. error 캐치
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        // 1-2. 해당에러가 토큰만료 에러인지 확인(UNAUTHENTICATED)
        if (err.extensions.code === "UNAUTHENTICATED") {
          // 2-1. 리프레쉬토큰으로 엑세스토큰을 재발급 받기!
          // 아폴로 세팅이 완료되지 않아서 유즈 뮤테이션 사용불가, 그래서 axios형태로 날려야함! graphql-request을 사용하게따
          // url 입력시 https 로 보내야한다! 시큐어옵션있음
          getAccessToken().then((newAccessToken) => {
            // 2-2. 재발급받은 엑세스 토큰 저장하기
            setAccessToken(newAccessToken);
            // 3-1. 재발급엑세스토큰으로 방금 실패한 쿼리 재요청 하기
            //  operation.getContext().headers 헤더를 가져올 때 사용가능
            operation.setContext({
              headers: {
                ...operation.getContext().headers,
                Authorization: `Bearer ${newAccessToken}`, // 엑세스 토큰만 바꿔치기!
              },
            });
            // 3-2.변경된 operation 재요청하기!!
            return forward(operation);
          });
        }
      }
    }
  });

  const uploardLink = createUploadLink({
    uri: "https://backend06.codebootcamp.co.kr/graphql",
    headers: { Authorization: `Bearer ${accessToken}` },
    credentials: "include",
    // 쿠키도 보내주겠다
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
