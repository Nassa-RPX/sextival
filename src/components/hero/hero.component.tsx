import Image from "next/image";
import { motion } from "framer-motion";

import { BaseProps } from "@sextival/types/react.types";
import { Panel } from "../base";
import { useState } from "react";

const Hero = () => {
  return (
    <Panel hero className="lg:flex-row mx-auto justify-evenly">
      <HeroImage />

      <div className="flex flex-col lg:justify-around">
        <span className="py-6" />

        <div>
          <HeroTitle text="INTERVENTI" />
          <HeroTitle text="ARTE" />
          <HeroTitle text="MUSICA" />
        </div>

        <span className="py-2" />

        <div className="lg:mb-32">
          <HeroTagline color={"text-gray-800"}>VIENI</HeroTagline>
          <HeroTagline color={"text-white"} leading="leading-none">
            AL FESTIVAL <br /> DELL&apos;EDUCAZIONE <br />
            SESSUALE
          </HeroTagline>
        </div>
      </div>
    </Panel>
  );
};

const HeroImage = () => {
  const [loaded, setLoaded] = useState<boolean>(false);

  return (
    <motion.div
      variants={{
        initial: { opacity: 0, scale: 0.8 },
        loaded: { opacity: 1, scale: 1 },
      }}
      initial="initial"
      animate={loaded ? "loaded" : "initial"}
      className="relative lg:w-3/5"
    >
      <Image
        src="/hero.png"
        width={790}
        height={790}
        alt="Logo Sextival"
        objectFit="cover"
        className="drop-shadow-sm"
        onLoadingComplete={() => setLoaded(true)}
      />
    </motion.div>
  );
};

const HeroTitle = ({ text }: { text: string }) => (
  <h1 className="text-white font-bold text-5xl lg:text-6xl drop-shadow-lg">
    {text}
  </h1>
);

interface HeroTaglineProps extends BaseProps {
  color: string;
  leading?: string;
}

const HeroTagline = ({ color, leading, children }: HeroTaglineProps) => (
  <h2
    className={`text-right font-bold text-xl lg:text-3xl ${color} ${leading} drop-shadow-md`}
  >
    {children}
  </h2>
);
export default Hero;
