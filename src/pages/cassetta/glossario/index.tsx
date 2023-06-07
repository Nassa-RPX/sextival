import { NextPage } from "next";

import { Glossary, NotionPage } from "@sextival/server/types";
import { Page } from "@sextival/ui/page";
import { getGlossary, getPage } from "@sextival/server/lib";
import { useMemo } from "react";
import { AccordionData } from "@sextival/components/accordion/accordion.types";
import { Accordion } from "@sextival/components/accordion";
import { PAGES } from "@sextival/server/notion-dabatase";
import { Markdown } from "@sextival/ui/markdown";
import { Spacer } from "@sextival/ui/spacer";

const Glossario: NextPage<{ glossary: Array<Glossary>; content: NotionPage }> =
  ({ glossary, content }) => {
    const accordionGlossary: Array<AccordionData> = useMemo(
      () =>
        glossary.map((g) => ({ label: g.name, description: g.description })),
      [glossary],
    );

    return (
      <Page title="GLOSSARIO">
        {content && content.parent && (
          <div className="w-full flex flex-col gap-4 leading-snug">
            <Markdown content={content.parent} />
          </div>
        )}
        <Spacer type="y" dimension="md" />
        <Accordion data={accordionGlossary} />
      </Page>
    );
  };

export async function getServerSideProps() {
  // Get the posts

  const content = await getPage(PAGES.GLOSSARY);
  const glossary = await getGlossary();

  // Return the result
  return {
    props: {
      content,
      glossary,
    },
  };
}

export default Glossario;
