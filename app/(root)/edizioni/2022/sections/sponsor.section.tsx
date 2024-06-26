import { SPONSOR } from "@sextival/data/2022";
import { Heading } from "@sextival/ui/heading";
import { Section } from "@sextival/ui/section";
import Image from "next/image";

export const Sponsor = () => {
  return (
    <Section>
      <Heading order={2} className="text-2xl">SPONSOR</Heading>

      <div className="mt-4 flex overflow-x-hidden gap-4 items-center">
        {SPONSOR.map((sp) => (
          <div key={sp} className="relative h-[100px] w-full">
            <Image
              alt={sp}
              src={sp}
              style={{ objectFit: "contain" }}
              fill={true}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </Section>
  );
};
