import type { NextPage } from "next";
import Head from "next/head";

// sections
import { Hero } from "@sextival/components/hero";
import { SextivalIs } from "@sextival/sections/sextival-is";
import { SextivalTeam } from "@sextival/sections/sextival-team";
import { HomeSchedule } from "@sextival/sections/home-schedule/";

import { Spacer } from "@sextival/ui/spacer";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sextival - Il festival della salute sessuale</title>
        <meta
          name="description"
          content="Sito del Sextival, il festival della salute sessuale"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <SextivalIs />
      <Spacer type="y" dimension="lg" />
      <HomeSchedule />
      <Spacer type="y" dimension="lg" />
      <SextivalTeam />
    </>
  );
};

export default Home;
