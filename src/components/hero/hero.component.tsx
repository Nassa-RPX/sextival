import { Spacer } from "@sextival/ui/spacer";
import Radials from "../radials";
import { Blob } from "./blob.component";
import { HeroCta } from "./hero-cta.component";
import { HeroWhere } from "./hero-where.component";

export const Hero = () => {
  return (
    <div className="w-full h-full relative">
      <Radials />

      <div className="min-h-screen relative flex-1 flex flex-col lg:flex-row">
        <div className="flex flex-col lg:justify-center  order-2 lg:order-1">
          <h1 className="text-6xl lg:text-[80px] text-sex-blue-6 font-bold">
            17 & 18 GIUGNO,
          </h1>
          <HeroWhere />

          <h1 className="text-3xl lg:text-[60px] text-sex-blue-4 font-black mt-4 leading-tight">
            VIENI
          </h1>
          <h1 className="text-3xl lg:text-[60px] text-sex-red-4 font-bold leading-none">
            AL FESTIVAL
            <br />
            DELLA SALUTE
            <br />
            SESSUALE
          </h1>

          <HeroCta />
          
          <div className="xl:absolute xl:left-1/2 xl:-translate-x-1/2">
            <span>dove trovarci</span>
          </div>
        </div>

        <div className="flex items-center justify-center lg:justify-end lg:flex-1 mt-[80px] lg:mt-0 order-1 lg:order-2">
          <Blob />
        </div>
      </div>
    </div>
  );
};
