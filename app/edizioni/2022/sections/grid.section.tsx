"use client";

import { STATIC_GRID_IMAGES } from "@sextival/data/2022";
import { FullSection } from "@sextival/ui/section";
import Image from "next/image";
import { useState } from "react";

// TODO: parallax on images?
// TODO: optmizie images for load time
export const Grid = () => {
  const [loadingImages, setLoadingImages] = useState(0);

  console.log("loading images", loadingImages);

  return (
    <FullSection>
      <div className="flex lg:gap-20">
        <div className="hidden lg:flex flex-1 flex-col justify-between items-center">
          <div className="relative w-full flex-1 mt-[-30px] mb-[50px]">
            <Image
              alt={"Foto 2022(1)"}
              fill
              style={{ objectFit: "cover" }}
              src={STATIC_GRID_IMAGES[0]!}
              className="mt-[-30px] rounded-md shadow-lg mr-[30px]"
              loading="eager"
            />
          </div>
          <div className="relative w-full flex-1 mt-[30px]">
            <Image
              alt={"Foto 2022(2)"}
              fill
              objectFit="cover"
              style={{ objectFit: "cover" }}
              src={STATIC_GRID_IMAGES[1]!}
              className="rounded-md shadow-lg mb-[-20px]"
              loading="eager"
            />
          </div>
        </div>

        <GridVideo />

        <div className="hidden lg:flex flex-1 flex-col justify-between">
          <div className="relative w-full flex-1 mt-[-30px] mb-[50px]">
            <Image
              alt={"Foto 2022(3)"}
              fill
              src={STATIC_GRID_IMAGES[2]!}
              className="rounded-md shadow-lg"
              loading="eager"
            />
          </div>
          <div className="relative w-full flex-1 mt-[30px]">
            <Image
              alt={"Foto 2022(4)"}
              fill
              src={STATIC_GRID_IMAGES[3]!}
              className="mb-[20px] ml-[35px] rounded-md shadow-lg"
              loading="eager"
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
