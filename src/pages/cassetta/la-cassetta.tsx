import { getPage } from "@sextival/server/lib";
import { PAGES } from "@sextival/server/notion-dabatase";
import { NotionPage } from "@sextival/server/types";
import { Markdown } from "@sextival/ui/markdown";
import { Page } from "@sextival/ui/page";
import { GetServerSideProps, NextPage } from "next";

const LaCassetta: NextPage<{ content: NotionPage }> = ({ content }) => {
  return (
    <Page title="LA CASSETTA">
      <div className="w-full flex flex-col gap-4 leading-snug">
        {content.parent && <Markdown content={content.parent} />}
      </div>
    </Page>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  // Return the result
  const content = await getPage(PAGES.DETAILS);
  return {
    props: {
      content,
    },
  };
};

export default LaCassetta;
