import { GRID_IMAGES } from "@sextival/data/2022";
import { Heading } from "@sextival/ui/heading";
import { Section } from "@sextival/ui/section";
import Image from "next/image";

// TODO: metti immagini diverse da quelle in Grid
// TODO: metti il link al drive / ad una cartella da qualche parte con tutte le foto

export const Gallery = () => {
  return (
    <Section className="gap-4">
      <Heading order={2} className="text-2xl">GALLERY</Heading>

      <div className="grid grid-cols-2 grid-rows-2 gap-4 lg:gap-12">
        {GRID_IMAGES.map((image) => (
          <div key={image} className="relative w-full h-[200px] lg:h-[300px]">
            <Image
              src={image}
              alt="Foto dell'edizione 2022"
              layout="fill"
              objectFit="cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </Section>
  );
};
