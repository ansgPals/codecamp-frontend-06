import "../styles/globals.css";
import "antd/dist/antd.css";
import LayOut from "../src/components/layout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { globalstyles } from "../src/commons/styled/globalStyled";
import { Global } from "@emotion/react";
import { RecoilRoot } from "recoil";
import ApolloConfig from "../src/components/apollo";

export default function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <ApolloConfig>
        <Global styles={globalstyles} />
        <LayOut>
          <Component {...pageProps} />
        </LayOut>
      </ApolloConfig>
    </RecoilRoot>
  );
}
