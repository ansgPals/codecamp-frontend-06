// import "../styles/globals.css";
import "antd/dist/antd.css";
import LayOut from "../src/components/commons/layout";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import ApolloSetting from "../src/components/commons/apollo";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_hTqQide8Md0Up5qDhy_BVCx7tzGCP6o",
  authDomain: "ansgpals.firebaseapp.com",
  projectId: "ansgpals",
  storageBucket: "ansgpals.appspot.com",
  messagingSenderId: "790855049566",
  appId: "1:790855049566:web:2960177b5323a42c8fefcf",
};

// Initialize Firebase

export const firebaseApp = initializeApp(firebaseConfig);

function MyApp({ Component, pageProps }: AppProps) {
  // 모든셋팅

  return (
    <RecoilRoot>
      <ApolloSetting>
        <Global styles={globalStyles} />
        <LayOut>
          <Component {...pageProps} />
        </LayOut>
      </ApolloSetting>
    </RecoilRoot>
  );
}

export default MyApp;
