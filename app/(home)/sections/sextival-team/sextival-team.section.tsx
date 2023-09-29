"use client";

import { useRef } from "react";
import { TEAM } from "@sextival/data";

import { Spacer } from "@sextival/ui/spacer";
import { Heading } from "@sextival/ui/heading";
import { Section } from "@sextival/ui/section";

import { InfiniteCards } from "@sextival/components/infinite-cards";
import { useDebounce, useHover, useMediaQuery } from "@sextival/hooks";
import Link from "next/link";

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

        <div className="flex-1 ">
          <Heading order={2} className="font-bold text-sex-red-6 text-4xl mb-6">
            IL SEXYTEAM
          </Heading>

          <div className="flex flex-col gap-4">
            <p className="leading-tight text-xl">
              Ad organizzare il Sextival siamo tantə, ognunə con un ruolo
              differente ed essenziale. Questo festival è nato dalla volontà di
              alcunə membrə dell’associazione{" "}
              <strong>Nassa Rapallo</strong>, che è tutt’ora colei che anche
              burocraticamente gestisce il progetto.
            </p>

            <p className="leading-tight text-xl">
              Queste qui a fianco sono le facce di chi ha avuto
              nell’organizzazione dei ruoli più facilmente definibili, ma senza
              le tante braccia e i tanti cervelli di chi ci aiuta, sia in quanto
              membrə di Nassa sia da esternə,{" "}
              <strong>
                tutto questo non sarebbe possibile
              </strong>.
            </p>

            <p className="leading-tight text-xl">
              Se anche tu vuoi essere parte della nostra realtà, compila il form
              per fare da volontariə nel sexystaff o{" "}
              <strong>contattaci per unirti</strong>{" "}
              alla Nassa. E la Nassa, promettiamo, di cose ne fa tante.&nbsp;
              <Link href="/la-nassa" className="font-bold text-sex-blue-4">
                Scopri di più
              </Link>.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};
