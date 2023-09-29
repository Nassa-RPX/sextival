import { getPage, getServices } from "@sextival/server/lib";
import { PAGES } from "@sextival/server/notion-dabatase";

import { Markdown } from "@sextival/ui/markdown";
import { Page } from "@sextival/ui/page";
import { Spacer } from "@sextival/ui/spacer";
import { ServiceSelection } from "./sections/service-selection.section";

export default async function Servizi() {
  const content = await getPage(PAGES.SERVICES);
  const { groupedServices } = await getServices();

  return (
    <Page title="SERVIZI">
      {content && content.parent && (
        <div className="w-full flex flex-col gap-4 leading-snug">
          <Markdown content={content.parent} />
        </div>
      )}

      <Spacer type="y" dimension="md" />

      <ServiceSelection groupedServices={groupedServices} />
    </Page>
  );
}
