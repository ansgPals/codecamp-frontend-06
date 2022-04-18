import "../styles/globals.css";
import "antd/dist/antd.css";
import { createUploadLink } from "apollo-upload-client";
import LayOut from "../src/components/commons/layout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { initializeApp } from "firebase/app";
import { AppProps } from "next/app";
import {
  ApolloClient,
  ApolloLink,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";

const firebaseConfig = {
  apiKey: "AIzaSyA_hTqQide8Md0Up5qDhy_BVCx7tzGCP6o",
  authDomain: "ansgpals.firebaseapp.com",
  projectId: "ansgpals",
  storageBucket: "ansgpals.appspot.com",
  messagingSenderId: "790855049566",
  appId: "1:790855049566:web:2960177b5323a42c8fefcf",
};

export const firebaseApp = initializeApp(firebaseConfig);

function MyApp({ Component, pageProps }: AppProps) {
  const uploardLink = createUploadLink({
    uri: "http://backend06.codebootcamp.co.kr/graphql",
  });
  const client = new ApolloClient({
    link: ApolloLink.from([uploardLink]),
    cache: new InMemoryCache(),
  });

  return (
    <>
      <Global styles={globalStyles} />
      <LayOut>
        <ApolloProvider client={client}>
          {" "}
          <Component {...pageProps} />
        </ApolloProvider>
      </LayOut>
    </>
  );
}

export default MyApp;
