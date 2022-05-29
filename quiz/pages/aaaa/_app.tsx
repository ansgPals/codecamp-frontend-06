import "antd/dist/antd.css";
import LayOut from "../src/components/commons/layout";

function MyApp({ Component, pageProps }) {
  return (
    <LayOut>
      <Component {...pageProps} />
    </LayOut>
  );
}

export default MyApp;
