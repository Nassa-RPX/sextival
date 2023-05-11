import { GRID_IMAGES } from "@sextival/data";
import { FullSection } from "@sextival/ui/section";
import Image from "next/image";

// TODO: parallax on images?
export const Grid2022 = () => {
  return (
    <FullSection>
      <div className="flex lg:gap-20">
        <div className="hidden lg:flex flex-1 flex-col justify-between items-center">
          <div className="relative w-full flex-1 mt-[-30px] mb-[50px]">
            <Image
              layout="fill"
              objectFit="cover"
              src={"https://pub-017f84a06d12468b8456a49acac6a458.r2.dev/2022_1.JPG"}
              className="mt-[-30px] rounded-md shadow-lg mr-[30px]"
            />
          </div>
          <div className="relative w-full flex-1 mt-[30px]">
            <Image
              layout="fill"
              objectFit="cover"
              src={GRID_IMAGES[1]!}
              className="rounded-md shadow-lg mb-[-20px]"
            />
          </div>
        </div>

        <GridVideo />

        <div className="hidden lg:flex flex-1 flex-col justify-between">
          <div className="relative w-full flex-1 mt-[-30px] mb-[50px]">
            <Image
              layout="fill"
              src={GRID_IMAGES[2]!}
              className="rounded-md shadow-lg"
            />
          </div>
          <div className="relative w-full flex-1 mt-[30px]">
            <Image
              layout="fill"
              src={GRID_IMAGES[3]!}
              className="mb-[20px] ml-[35px] rounded-md shadow-lg"
            />
          </div>
        </div>
      </div>
    </FullSection>
  );
};

const GridVideo = () => (
  <div className="mx-auto w-full flex-1 object-cover">
    <video
      src="https://pub-017f84a06d12468b8456a49acac6a458.r2.dev/2022.mp4"
      autoPlay
      controls
      className="rounded-lg"
      loop
    />
  </div>
);
