import { Page } from "@sextival/ui/page";
import { getPage } from "@sextival/server/lib";
import { PAGES } from "@sextival/server/notion-dabatase";
import { Markdown } from "@sextival/ui/markdown";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Questionario PrE(P)venzione 2023"
}

export default async function Questionario2023() {
  const content = await getPage(PAGES.FORM);

  return (
    <Page title="QUESTIONARIO PrE(P)VENZIONE 2023">
      {content && content.parent && <Markdown content={content.parent} />}
    </Page>
  );
}
