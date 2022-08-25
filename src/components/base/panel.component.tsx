import React from "react";
import { BaseProps } from "@sextival/types/react.types";

const Panel = (props: BaseProps) => {
  return (
    <section className="snap-start min-w-screen min-h-screen bg-gray-900 text-white">
      {props.children}
    </section>
  );
};

export default Panel;
