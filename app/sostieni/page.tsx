import { Metadata } from "next";

import { Page } from "@sextival/ui/page";

import { Support } from "./sections";

export const metadata: Metadata = {
  title: "Sostieni | Sextival",
};

const Sostieni = () => (
  <Page title="SOSTIENI">
    <Support />
  </Page>
);

export default Sostieni;
