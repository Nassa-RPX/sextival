import type { NextPage } from "next";
import Head from "next/head";

// sections
import { Hero } from "@sextival/components/hero";
import { SextivalIs } from "@sextival/sections/sextival-is";
import { SextivalTeam } from "@sextival/sections/sextival-team";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sextival - Il festival della salute sessuale</title>
        <meta name="description" content="Sito del Sextival, il festival della salute sessuale" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <SextivalIs />
      <SextivalTeam />
    </>
  );
};

export default Home;
