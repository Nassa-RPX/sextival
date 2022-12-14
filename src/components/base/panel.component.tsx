import React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

import { ComponentProps } from "@sextival/types/react.types";
import { Nassa } from "../nassa.component";

interface PanelProps extends ComponentProps {
  hero?: boolean;
  isLastOne?: boolean;
}

const Panel = (props: PanelProps) => {
  return (
    <section
      className={clsx(
        "snap-start min-w-screen min-h-screen text-gray-900 p-8 lg:p-16 flex flex-col align-center bg-red-200",
        props.hero && "bg-cover bg-fixed bg-sex-gradient"
      )}
    >
      <div className={clsx("flex-1 flex flex-col", props.className)}>
        {props.children}
      </div>
      {!props.isLastOne && (
        <div className={clsx("font-bold mx-auto relative")}>
          <AnimatedNassa hero={props.hero} />
          <div className="absolute w-[120px] -left-4 top-9 flex">
            <span className={clsx(props.hero ? "text-white" : "text-red-900")}>
              Scopri di piu
            </span>
          </div>
        </div>
      )}
    </section>
  );
};

const AnimatedNassa = ({ hero }: { hero?: boolean }) => (
  <motion.div
    initial={{ opacity: 0.3 }}
    animate={{ opacity: 1 }}
    transition={{
      repeat: Infinity,
      repeatType: "reverse",
      duration: 1,
    }}
  >
    <Nassa
      size={{ width: 80 }}
      color={hero ? undefined : "rgba(85, 0, 38, 0.4)"}
    />
  </motion.div>
);

export default Panel;
