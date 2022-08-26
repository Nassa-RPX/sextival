import React from "react";
import { BaseProps } from "@sextival/types/react.types";

interface PanelProps extends BaseProps {
  gradient?: boolean;
}

const Panel = (props: PanelProps) => {
  return (
    <section
      className={`snap-start min-w-screen min-h-screen text-gray-900 p-8 flex flex-col align-center ${
        props.gradient ? "bg-cover bg-fixed bg-sex-gradient" : "bg-red-200"
      }`}
    >
      {props.children}
    </section>
  );
};

export default Panel;
