import "../styles/globals.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import "antd/dist/antd.css";
import LayOut from "../src/components/layout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { globalstyles } from "../src/commons/styled/globalStyled";
import { Global } from "@emotion/react";

export default function MyApp({ Component, pageProps }) {
  const client = new ApolloClient({
    uri: "http://example.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Global styles={globalstyles} />
      <LayOut>
        <Component {...pageProps} />
      </LayOut>
    </ApolloProvider>
  );
}
