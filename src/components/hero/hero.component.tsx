import Image from "next/image";

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
            Rapallo, via San Pietro (Salita Bosen)
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
          <div className="py-4 px-8 lg:px-10 lg:py-10 rounded-2xl shadow-lg bg-brand-rose bg-opacity-80 backdrop-blur-sm text-white border-2 drop-shadow-md border-brand-rose text-xl font-bold absolute bottom-[30%] sm:bottom-[20%] md:bottom-[5%] left-1/2 -translate-x-1/2 cursor-pointer z-10 text-center">
            SCARICA IL PROGRAMMA
          </div>
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

          <div className="py-4 px-8 lg:px-10 lg:py-10 rounded-2xl shadow-lg bg-brand-rose bg-opacity-80 backdrop-blur-sm text-white border-2 drop-shadow-md border-brand-rose text-xl font-bold absolute bottom-[5%] left-1/2 -translate-x-1/2 cursor-pointer z-10 text-center">
            SCARICA IL PROGRAMMA
          </div>
        </div>
      </div>
    </section>
  );
};
