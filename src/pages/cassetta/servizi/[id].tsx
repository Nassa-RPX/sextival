import { LeftIcon } from "@sextival/components/icon";
import client from "@sextival/server/client";
import { getService } from "@sextival/server/lib";
import { Service } from "@sextival/server/types";
import { Markdown } from "@sextival/ui/markdown";
import { Page } from "@sextival/ui/page";
import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import { NotionToMarkdown } from "notion-to-md";
import { MdStringObject } from "notion-to-md/build/types";

const Servizio: NextPage<
  { service?: Partial<Service>; content: MdStringObject }
> = (
  { service, content },
) => {
  const router = useRouter();

  return (
    <Page>
      <section className="flex flex-col gap-4 lg:w-3/4 text-lg">
        <div
          className="flex items-center gap-2"
          onClick={() => router.push("/cassetta/servizi")}
        >
          <LeftIcon className="w-6 lg:w-6 h-6 lg:h-6 cursor-pointer" />
          <span className="font-bold">INDIETRO</span>
        </div>

        <h2 className="text-3xl lg:text-4xl font-bold leading-none text-sex-red-4">
          {service && service.name}
        </h2>

        {service && <Tag service={service} />}
        <div className="w-full flex flex-col gap-4 leading-snug">
          {content.parent && <Markdown content={content.parent} />}
        </div>
      </section>
    </Page>
  );
};

const Tag = ({ service }: { service: Partial<Service> }) => {
  return (
    <div className="py-2 w-[150px] text-center rounded-md bg-sex-red-4 bg-opacity-60 text-sex-red-8 text-opacity-90 text-sm font-bold">
      {service && service.zone}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const id = ctx.params?.id as string;

  const service = await getService(id);

  const n2m = new NotionToMarkdown({ notionClient: client });
  const mdblocks = await n2m.pageToMarkdown(id);
  const mdString = n2m.toMarkdownString(mdblocks);

  // Return the result
  return {
    props: {
      service,
      content: mdString,
    },
  };
};

export default Servizio;
