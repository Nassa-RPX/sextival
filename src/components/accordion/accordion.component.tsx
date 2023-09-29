"use client";

import { useState } from "react";

import { AccordionData } from "./accordion.types";
import { AccordionElement } from "./accordion-element.component";

interface Props {
  data: Array<AccordionData>;
}

// TODO: better animation on closing
export const Accordion = ({ data }: Props) => {
  const [expanded, setExpanded] = useState<false | number>(false);

  return (
    <div className="flex flex-col gap-4">
      {data.map((data, id) => (
        <AccordionElement
          data={data}
          key={id}
          isOpen={expanded === id}
          setExpanded={(i) => setExpanded(i)}
          idx={id}
        />
      ))}
    </div>
  );
};
