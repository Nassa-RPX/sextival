
import type { NextPage } from "next";

// sections
import { Hero } from "@sextival/components/hero";
import { Spacer } from "@sextival/ui/spacer";

import { SextivalIs } from "./sections/sextival-is";
import { SextivalTeam } from "./sections/sextival-team";
import { HomeSchedule } from "./sections/home-schedule/";

const Home: NextPage = () => {
  return (
    <>
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
