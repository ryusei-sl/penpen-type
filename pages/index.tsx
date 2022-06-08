import { Action } from "components/Action";
import { Header } from "components/Header";
import { Headline } from "components/Headline";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Penpen-type</title>
        <meta
          name="description"
          content="ペンギンがtypescriptを勉強しています"
        />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Headline />
      <Action />
    </div>
  );
};

export default Home;
