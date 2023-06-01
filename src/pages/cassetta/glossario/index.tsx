import { NextPage } from "next";

import { Glossary } from "@sextival/server/types";
import { Page } from "@sextival/ui/page";
import { getGlossary } from "@sextival/server/lib";
import { useMemo } from "react";
import { AccordionData } from "@sextival/components/accordion/accordion.types";
import { Accordion } from "@sextival/components/accordion";

const Glossario: NextPage<{ glossary: Array<Glossary> }> = ({ glossary }) => {
  const accordionGlossary: Array<AccordionData> = useMemo(
    () => glossary.map((g) => ({ label: g.name, description: g.description })),
    [glossary],
  );

  return (
    <Page title="GLOSSARIO">
      <Accordion data={accordionGlossary} />
    </Page>
  );
};

export async function getServerSideProps() {
  // Get the posts

  const glossary = await getGlossary();

  // Return the result
  return {
    props: {
      glossary,
    },
  };
}

export default Glossario;
