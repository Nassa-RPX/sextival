import Image from "next/image";

export const Hero = () => {
  return (
    <section className="w-full h-full relative bg-brand-blue overflow-hidden">
      <div className="w-full mx-auto h-screen relative flex-1 flex flex-col">
        <div className="w-full flex flex-col mt-[80px] lg:mt-[120px]  gap-2 z-10 bg-brand-blue bg-opacity-0 lg:bg-opacity-0 p-6">
          <h2 className="text-4xl lg:text-[80px] text-brand-rose font-bold text-center drop-shadow-lg">
            22 e 23 <br className="block lg:hidden" />
            GIUGNO 2024
          </h2>

          <h1 className="text-6xl lg:text-8xl text-white font-black text-center">
            SEXTIVAL
          </h1>
          <h3 className="text-2xl lg:text-4xl text-white font-bold text-center drop-shadow-md">
            Rapallo, via San Pietro 54 <br /> (Salita Bosen)
          </h3>
        </div>

        <div className="absolute -top-[10%] -left-[20%] -right-[20%] -bottom-[20%] md:top-[25%] md:right-[10%] md:bottom-0 md:left-[10%] overflow-hidden">
          <div className="relative w-full h-full ">
            <Image
              src={"/personaggio-cropped.png"}
              alt="Illustrazione Sextival"
              fill={true}
              className="object-contain pointer-events-none"
            />
          </div>

          <div className="py-4 px-8 lg:px-10 lg:py-10 rounded-2xl shadow-lg bg-brand-rose bg-opacity-80 backdrop-blur-sm text-white border-2 drop-shadow-md border-brand-rose text-xl font-bold absolute bottom-[30%] sm:bottom-[20%] md:bottom-[5%] left-1/2 -translate-x-1/2 cursor-pointer z-10 text-center">
            SCARICA IL PROGRAMMA
          </div>
        </div>
      </div>
    </section>
  );
};
