import { Action } from "src/components/Action";
import { Header } from "src/components/Header";
import { Headline } from "src/components/Headline";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      {/* ヘッド */}
      <Head>
        <title>Penpen-type</title>
        <meta
          name="description"
          content="ペンギンがtypescriptを勉強しています"
        />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      {/* コンテンツ */}
      <Header />
      <Headline />
      <Action />
    </div>
  );
};

export default Home;
