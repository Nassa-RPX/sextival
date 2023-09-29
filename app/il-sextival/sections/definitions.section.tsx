import { Accordion } from "@sextival/components/accordion";
import { DEFINITIONS } from "@sextival/data";

export const Definitions = () => (
  <section className="flex flex-col  lg:w-4/5">
    <Accordion
      data={DEFINITIONS}
    />
  </section>
);
