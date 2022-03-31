import "../styles/globals.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import "antd/dist/antd.css";
import LayOut from "../src/commons/layout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MyApp({ Component, pageProps }) {
  //모든셋팅

  const client = new ApolloClient({
    uri: "http://backend06.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <LayOut>
        <Component {...pageProps} />
      </LayOut>
    </ApolloProvider>
  );
}

export default MyApp;
