import { motion, MotionStyle } from "framer-motion";
import clsx from "clsx";

import { DefaultProps } from "@sextival/types";
import { forwardRef } from "react";

interface Props extends DefaultProps {
  style?: MotionStyle;
}

export const Section = forwardRef<HTMLDivElement, Props>(
  ({ children, style, className }, ref) => {
    return (
      <motion.section
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        style={style}
        className={clsx(
          "w-full flex flex-col py-4",
          className,
        )}
      >
        {children}
      </motion.section>
    );
  },
);
