import "../styles/globals.css";
import "antd/dist/antd.css";
import LayOut from "../src/components/commons/layout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { initializeApp } from "firebase/app";
import { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import ApolloSetting from "../src/components/commons/apollo";


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

  return (
    <RecoilRoot>
      <ApolloSetting>

        <LayOut>
          <Component {...pageProps} />
        </LayOut>
        
      </ApolloSetting>
    </RecoilRoot>
  );
}

export default MyApp;
