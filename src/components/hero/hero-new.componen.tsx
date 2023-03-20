import Radials from "../radials";

const HeroNew = () => {
  return (
    <div className="w-full h-full relative">
      <Radials />
      
      <div className="min-h-screen max-h-screen relative flex-1 flex mt-[120px]">
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl lg:text-[80px] text-sex-blue font-bold">
            16 & 17 GIUGNO
          </h1>
          <h1 className="text-2xl lg:text-[60px] text-sex-red-6 font-black mt-4 leading-tight">
            VIENI
          </h1>
          <h1 className="text-2xl lg:text-[60px] text-sex-red-4 font-bold leading-none">
            AL FESTIVAL
            <br />
            DELL'EDUCAZIONE
            <br />
            SESSUALE
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HeroNew;
