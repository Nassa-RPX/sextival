import client from "@sextival/server/client";
import { DETAILS } from "@sextival/server/notion-dabatase";
import { Markdown } from "@sextival/ui/markdown";
import { Page } from "@sextival/ui/page";
import { GetServerSideProps, NextPage } from "next";
import { NotionToMarkdown } from "notion-to-md";
import { MdStringObject } from "notion-to-md/build/types";

const LaCassetta: NextPage<{ content: MdStringObject }> = ({ content }) => {
  return (
    <Page title="LA CASSETTA">
      <div className="w-full flex flex-col gap-4 leading-snug">
        {content.parent && <Markdown content={content.parent} />}
      </div>
    </Page>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const n2m = new NotionToMarkdown({ notionClient: client });
  const mdblocks = await n2m.pageToMarkdown(DETAILS);
  const mdString = n2m.toMarkdownString(mdblocks);

  // Return the result
  return {
    props: {
      content: mdString,
    },
  };
};

export default LaCassetta;
