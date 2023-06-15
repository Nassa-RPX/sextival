import { GetServerSideProps, NextPage } from "next";

import { Page } from "@sextival/ui/page";
import { getPage } from "@sextival/server/lib";
import { PAGES } from "@sextival/server/notion-dabatase";
import { NotionPage } from "@sextival/server/types";
import { Markdown } from "@sextival/ui/markdown";

const Questionario2023: NextPage<{ content: NotionPage }> = ({ content }) => (
  <Page title="QUESTIONARIO PrE(P)VENZIONE 2023">
    {content && content.parent && <Markdown content={content.parent} />}
  </Page>
);

export const getServerSideProps: GetServerSideProps = async () => {
  // Return the result
  const content = await getPage(PAGES.FORM);
  return {
    props: {
      content,
    },
  };
};

export default Questionario2023;
