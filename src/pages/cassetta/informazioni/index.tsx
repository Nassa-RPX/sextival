import { NextPage } from "next";

import { getInfos, getPage } from "@sextival/server/lib";
import { Info, NotionPage } from "@sextival/server/types";
import { Page } from "@sextival/ui/page";
import Link from "next/link";
import { LinkIcon, RightIcon } from "@sextival/components/icon";
import { PAGES } from "@sextival/server/notion-dabatase";
import { Markdown } from "@sextival/ui/markdown";
import { Spacer } from "@sextival/ui/spacer";

const Informazioni: NextPage<{ infos: Array<Info>; content: NotionPage }> = (
  { infos, content },
) => {
  return (
    <Page title="INFORMAZIONI">
      {content && content.parent && (
        <div className="w-full flex flex-col gap-4 text-justify leading-snug">
          <Markdown content={content.parent} />
        </div>
      )}

      <Spacer type="y" dimension="md" />

      <section className="grid lg:grid-cols-2 gap-4">
        {infos.map((info) => (
          <div
            key={info.id}
            className="p-6 rounded-md bg-white shadow-md flex flex-col"
          >
            <Link href={`/cassetta/informazione/${info.id}`}>
              <a className="flex items-center gap-2 font-bold text-2xl text-sex-blue-6">
                {info.name}

                <LinkIcon />
              </a>
            </Link>
            <p className="flex-1 mt-2 mb-4 leading-snug lg:text-justify">
              {info.description}
            </p>

            <Link href={`/cassetta/informazioni/${info.id}`}>
              <a className="ml-auto py-2 px-4 rounded-md bg-sex-blue-4 bg-opacity-80 flex gap-2 items-center text-white text-sm">
                Leggi
                <RightIcon />
              </a>
            </Link>
          </div>
        ))}
      </section>
    </Page>
  );
};

export async function getServerSideProps() {
  // Get the posts

  const content = await getPage(PAGES.INFO);
  const infos = await getInfos();

  // Return the result
  return {
    props: {
      content,
      infos,
    },
  };
}

export default Informazioni;
