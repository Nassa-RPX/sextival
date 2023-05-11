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
          <div className="relative h-[100px] w-full">
            <Image src={sp} layout="fill" objectFit="contain" />
          </div>
        ))}
      </div>
    </Section>
  );
};
