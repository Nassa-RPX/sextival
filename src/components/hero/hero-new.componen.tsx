import Image from "next/image";
import Radials from "../radials";
import { HeroCta } from "./hero-cta.component";

const HeroNew = () => {
  return (
    <div className="w-full h-full relative">
       <Radials />

      <div className="h-screen relative flex-1 flex flex-col lg:flex-row">
        <div className="flex flex-col lg:justify-center  order-2 lg:order-1">
          <h1 className="text-6xl lg:text-[80px] text-sex-blue font-bold">
            16 & 17 GIUGNO
          </h1>
          <h1 className="text-3xl lg:text-[60px] text-sex-red-6 font-black mt-4 leading-tight">
            VIENI
          </h1>
          <h1 className="text-3xl lg:text-[60px] text-sex-red-4 font-bold leading-none">
            AL FESTIVAL
            <br />
            DELL'EDUCAZIONE
            <br />
            SESSUALE
          </h1>

          <HeroCta />
        </div>
         <div className="flex items-center justify-center lg:justify-end lg:flex-1 mt-[80px] lg:mt-0 order-1 lg:order-2">
           <Image src="/hero-blog.png" width={531} height={475} />
         </div>
      </div>
    </div>
  );
};

export default HeroNew;
