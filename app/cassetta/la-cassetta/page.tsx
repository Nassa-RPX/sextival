import Image from "next/image";

import { LOGHI } from "@sextival/data/cassetta";
import { getPage } from "@sextival/server/lib";
import { PAGES } from "@sextival/server/notion-dabatase";
import { Heading } from "@sextival/ui/heading";
import { Markdown } from "@sextival/ui/markdown";
import { Page } from "@sextival/ui/page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "La Cassetta | Sextival",
};

export default async function LaCassetta() {
  const content = await getPage(PAGES.DETAILS);
  return (
    <Page title="LA CASSETTA">
      {content && content.parent && (
        <div className="w-full flex flex-col gap-4 leading-snug">
          <Markdown content={content.parent} />
        </div>
      )}

      <Loghi />
    </Page>
  );
}

const Loghi = () => {
  return (
    <section className="mt-6 flex flex-col gap-4">
      <Heading order={2} className="text-sex-red-6 text-xl lg:text-4xl">
        LA CASSETTA DEGLI ATTREZZI È UN PROGETTO DI
      </Heading>

      <div className="flex gap-4 ">
        {LOGHI.map((logo, i) => (
          <div key={i} className="w-full h-[200px] relative">
            <Image
              src={logo}
              alt={logo}
              style={{ objectFit: "contain" }}
              layout="fill"
              className="flex-1"
            />
          </div>
        ))}
      </div>
    </section>
  );
};
