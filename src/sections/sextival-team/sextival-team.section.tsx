import { useRef } from "react";
import { TEAM } from "@sextival/data";

import { Spacer } from "@sextival/ui/spacer";
import { Heading } from "@sextival/ui/heading";
import { Section } from "@sextival/ui/section";

import { InfiniteCards } from "@sextival/components/infinite-cards";
import { useDebounce, useHover, useMediaQuery } from "@sextival/hooks";

export const SextivalTeam = () => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const isHover = useHover(cardRef);
  const debouncedHover = useDebounce(isHover, 400);
  const isDesktop = useMediaQuery("lg");

  return (
    <Section>
      <div className="flex-1 w-full flex flex-col lg:flex-row gap-12">
        <div className="flex-1 flex flex-col ">
          <div
            ref={cardRef}
            className="w-full h-[400px] overflow-hidden grid place-items-center rounded-md  relative"
          >
            <InfiniteCards
              cards={TEAM}
              hover={isHover ? isHover : debouncedHover}
            />
          </div>
          {!isDesktop && (
            <>
              <Spacer className="mt-4" />
              <span className="text-center font-bold text-sex-red-4 text-2xl">
                Fai swipe per conoscerci!
              </span>
            </>
          )}
        </div>

        <div className="flex-1">
          <Heading order={2} className="font-bold text-sex-red-6 text-4xl">
            IL SEXYTEAM
          </Heading>
          <Spacer className="my-4" />
          <p className="leading-tight text-xl">
            Il Sextival è organizzato da Nassa Rapallo, un’associazione di
            promozione socilae, senza scopo di lucro
          </p>
          <Spacer className="my-4" />
          <p className="leading-tight text-xl">
            Il Sextival è organizzato da Nassa Rapallo, un’associazione di
            promozione socilae, senza scopo di lucro
          </p>
          <Spacer className="my-4" />
          <p className="leading-tight text-xl">
            Il Sextival è organizzato da Nassa Rapallo, un’associazione di
            promozione socilae, senza scopo di lucro
          </p>

          <Spacer className="my-4" />

          <p className="leading-tight text-xl">
            Il Sextival è organizzato da Nassa Rapallo, un’associazione di
            promozione socilae, senza scopo di lucro
          </p>
        </div>
      </div>
      <div>Nassa</div>
    </Section>
  );
};
