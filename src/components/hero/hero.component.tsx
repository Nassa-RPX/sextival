import { BaseProps } from "@sextival/types/react.types";
import Image from "next/image";
import { Panel, Spacer } from "../base";

const Hero = () => {
  return (
    <Panel hero>
      <Image
        src="/hero.png"
        width={790}
        height={790}
        alt="Logo Sextival"
        objectFit="contain"
      />

      <Spacer type="y" dimension="md" />

      <HeroTitle text="INTERVENTI" />
      <HeroTitle text="ARTE" />
      <HeroTitle text="MUSICA" />

      <Spacer type="y" dimension="sm" />

      <HeroTagline color={"text-gray-800"}>VIENI</HeroTagline>
      <HeroTagline color={"text-white"} leading="leading-none">
        AL FESTIVAL <br /> DELL&apos;EDUCAZIONE <br />
        SESSUALE
      </HeroTagline>
    </Panel>
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
