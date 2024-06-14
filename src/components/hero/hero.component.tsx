import Image from "next/image";
import { DownloadSchedule } from "./download-schedule";

export const Hero = () => {
  return (
    <section className="w-full h-full relative bg-brand-blue overflow-hidden">
      <div className="w-full mx-auto h-screen relative flex-1 flex flex-col">
        <div className="w-[94%] left-1/2  md:left-0 -translate-x-1/2 md:translate-x-0 md:w-full flex flex-col gap-2 z-10 absolute top-[140px] md:top-[80px]">
          <h2 className="text-4xl md:text-[80px] md:leading-[4rem] text-brand-rose font-bold text-center drop-shadow-lg">
            22 e 23 <br className="block md:hidden" />
            GIUGNO 2024
          </h2>

          <h1 className="text-6xl md:text-8xl text-white font-bold text-center">
            SEXTIVAL
          </h1>
          <h3 className="text-xl md:text-2xl text-white font-bold text-center drop-shadow-md">
            Rapallo, via San Pietro (Salita Bonsen)
          </h3>
        </div>

        <div className="hidden  relative w-full h-full md:flex items-end">
          <Image
            src={"/personaggio-cropped.png"}
            alt="Illustrazione Sextival"
            width={900}
            height={710}
            className="pointer-events-none mx-auto mt-auto"
          />
          <DownloadSchedule />
        </div>

        <div className="md:hidden relative w-full h-full flex items-end ">
          <div className="h-[450px] absolute bottom-5% left-0 right-0">
            <Image
              src={"/personaggio-cropped.png"}
              alt="Illustrazione Sextival"
              fill={true}
              className="object-cover pointer-events-none"
            />
          </div>

          <DownloadSchedule />
        </div>
      </div>
    </section>
  );
};
