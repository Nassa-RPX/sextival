import { motion } from "framer-motion";
import clsx from "clsx";

import { DefaultProps } from "@sextival/types";

export const Section = ({ children, className }: DefaultProps) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      className={clsx("w-full flex flex-col py-4", className)}
    >
      {children}
    </motion.section>
  );
};
