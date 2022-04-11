import "../styles/globals.css";
import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import "antd/dist/antd.css";
import LayOut from "../src/components/layout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { globalstyles } from "../src/commons/styled/globalStyled";
import { Global } from "@emotion/react";
import { createUploadLink } from "apollo-upload-client";
import { RecoilRoot } from "recoil";

export default function MyApp({ Component, pageProps }) {
  const uploardLink = createUploadLink({
    uri: "http://backend06.codebootcamp.co.kr/graphql",
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploardLink]),
    cache: new InMemoryCache(),
  });

  return (
    <RecoilRoot>
      <ApolloProvider client={client}>
        <Global styles={globalstyles} />
        <LayOut>
          <Component {...pageProps} />
        </LayOut>
      </ApolloProvider>
    </RecoilRoot>
  );
}
