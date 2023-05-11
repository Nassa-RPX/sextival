import { NextPage } from "next";

import { Page } from "@sextival/ui/page";
import { Section } from "@sextival/ui/section";
import { Heading } from "@sextival/ui/heading";

import { Grid2022 } from "@sextival/sections/2022-grid";

const Edizione2022: NextPage = () => {
  return (
    <Page title="Edizione 2022">
      <Grid2022 />
      <Section>
        <Heading order={2} className="text-2xl">COSA ABBIAMO IMPARATO</Heading>
      </Section>

      <Section>
        <Heading order={2} className="text-2xl">GALLERY</Heading>
      </Section>

      <Section>
        <Heading order={2} className="text-2xl">SPONSOR</Heading>
      </Section>
    </Page>
  );
};

export default Edizione2022;
