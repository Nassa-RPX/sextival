import { motion } from "framer-motion";

import { DefaultProps } from "@sextival/types";

export const AccordionContent = ({ children }: DefaultProps) => (
  <motion.div
    variants={{
      collapsed: { scale: 0.8, transition: { duration: 0.1 } },
      open: { scale: 1, transition: { duration: 0.4 } },
    }}
    className="ml-8 flex flex-col gap-2 text-md lg:text-lg"
  >
    {children}
  </motion.div>
);
