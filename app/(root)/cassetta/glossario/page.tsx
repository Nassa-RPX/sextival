import { Page } from "@sextival/ui/page";
import { getGlossary, getPage } from "@sextival/server/lib";
import { Accordion } from "@sextival/components/accordion";
import { PAGES } from "@sextival/server/notion-dabatase";
import { Markdown } from "@sextival/ui/markdown";
import { Spacer } from "@sextival/ui/spacer";

export default async function Glossario() {
  const content = await getPage(PAGES.GLOSSARY);
  const { accordionGlossary } = await getGlossary(); // TODO: questo potrebbe essere caricato lato client?

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
}
