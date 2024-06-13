import { Metadata } from "next";

import { Page } from "@sextival/ui/page";
import { Spacer } from "@sextival/ui/spacer";

import { About, Definitions, Goals, LastEdition, Tagline } from "./sections";

export const metadata: Metadata = {
  title: "IL SEXTIVAL",
  description: "Sextival - il festival dell'educazione e della salute sessuale",
};

const Sextival = () => {
  return (
    <Page
      title={"IL SEXTIVAL"}
      className="mb-40"
    >
      <Tagline />

      <Spacer type="y" dimension="md" />

      <About />

      <Spacer type="y" dimension="md" />
      <Goals />

      <Spacer type="y" dimension="md" />
      <LastEdition />

      <Spacer type="y" dimension="lg" />
      <Definitions />
    </Page>
  );
};

export default Sextival;
