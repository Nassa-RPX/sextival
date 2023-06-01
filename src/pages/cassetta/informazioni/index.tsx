import { NextPage } from "next";

import { getInfos } from "@sextival/server/lib";
import { Info } from "@sextival/server/types";
import { Page } from "@sextival/ui/page";
import Link from "next/link";
import { LinkIcon, RightIcon } from "@sextival/components/icon";

const Informazioni: NextPage<{ infos: Array<Info> }> = ({ infos }) => {
  console.log("infos", infos);
  return (
    <Page title="INFORMAZIONI">
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

  const infos = await getInfos();

  // Return the result
  return {
    props: {
      infos,
    },
  };
}

export default Informazioni;
