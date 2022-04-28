import Head from "next/head";

export default function OpenGraphHeadPage() {
  return (
    <div>
      <Head>
        <meta property="og:title" content="나만의 사이트" />
        <meta
          property="og:description"
          content="나만의 사이트에 오신것을 환영합니다."
        />
        <meta property="og:image" content="/quiz02/맹.png"></meta>
      </Head>
      <h1>open graph 연습페이지</h1>
    </div>
  );
}
