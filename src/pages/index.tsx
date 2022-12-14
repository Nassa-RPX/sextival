import type { NextPage } from "next";
import Head from "next/head";

import useMainScroll from "@sextival/hooks/use-main-scroll";

import { Panel } from "@sextival/components/base";

// sections
import Hero from "@sextival/components/hero";
import About from "@sextival/components/about";

const Home: NextPage = () => {
  const { ref, snapType, handleScroll } = useMainScroll();

  return (
    <>
      <Head>
        <title>Sextival - Il festival della salute sessuale</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        ref={ref}
        className={`h-screen w-screen scroll-smooth snap-y ${snapType} lg:snap-mandatory overflow-y-scroll `}
        onScroll={handleScroll}
      >
        <Hero />
        <About />
        <Panel>3</Panel>
        <Panel>4</Panel>
        <Panel isLastOne>5</Panel>
      </main>
    </>
  );
};

export default Home;
