import { Action } from "components/Action";
import { Header } from "components/Header";
import { Headline } from "components/Headline";
import { Lesson } from "components/Lesson";
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
      <Lesson name={"山田太郎"} check={true} />
      <Action />
    </div>
  );
};

export default Home;
