import Image from "next/image";
import { Panel, Spacer } from "../base";

const Hero = () => {
  return (
    <Panel gradient>
      <Image
        src="/hero.png"
        width={790}
        height={790}
        alt="Logo Sextival"
        objectFit="contain"
      />

      <Spacer type="vertical" dimension="big" />

      <HeroTitle text="INTERVENTI" />
      <HeroTitle text="ARTE" />
      <HeroTitle text="MUSICA" />
    </Panel>
  );
};

const HeroTitle = ({ text }: { text: string }) => (
  <h1 className="text-white font-bold text-5xl lg:text-6xl">{text}</h1>
);
export default Hero;
