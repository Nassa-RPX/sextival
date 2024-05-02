import type { NextPage } from "next";

// sections
import { Hero } from "@sextival/components/hero";

import { SextivalIs } from "./sections/sextival-is";

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <SextivalIs />
    </>
  );
};

export default Home;
