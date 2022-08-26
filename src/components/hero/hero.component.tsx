import Image from "next/image";
import { Panel } from "../base";

const Hero = () => {
  return (
    <Panel gradient>
      <Image src="/hero.png" width={790} height={790} alt="Logo Sextival" />
    </Panel>
  );
};

export default Hero;
