import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import { NotionToMarkdown } from "notion-to-md";
import { MdStringObject } from "notion-to-md/build/types";

import client from "@sextival/server/client";
import { LeftIcon } from "@sextival/components/icon";
import { getInfo } from "@sextival/server/lib";
import { Info } from "@sextival/server/types";
import { Markdown } from "@sextival/ui/markdown";
import { Page } from "@sextival/ui/page";

const Informazione: NextPage<
  { info?: Partial<Info>; content: MdStringObject }
> = (
  { info, content },
) => {
  const router = useRouter();

  return (
    <Page>
      <section className="flex flex-col gap-4 mx-auto lg:w-4/5 text-lg mb-6">
        <div
          className="flex items-center gap-2"
          onClick={() => router.push("/cassetta/informazioni")}
        >
          <LeftIcon className="w-6 lg:w-6 h-6 lg:h-6 cursor-pointer" />
          <span className="font-bold">INDIETRO</span>
        </div>

        {info && info.name && (
          <h2 className="text-4xl lg:text-6xl font-bold leading-none text-sex-red-4">
            {info && info.name.toUpperCase()}
          </h2>
        )}

        {content && content.parent && (
          <div className="w-full flex flex-col gap-4 text-justify leading-snug">
            <Markdown content={content.parent} />
          </div>
        )}
      </section>
    </Page>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const id = ctx.params?.id as string;

  const info = await getInfo(id);

  const n2m = new NotionToMarkdown({ notionClient: client });
  const mdblocks = await n2m.pageToMarkdown(id);
  const mdString = n2m.toMarkdownString(mdblocks);

  // Return the result
  return {
    props: {
      info,
      content: mdString,
    },
  };
};

export default Informazione;
