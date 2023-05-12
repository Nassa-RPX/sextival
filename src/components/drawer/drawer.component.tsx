import { useMemo } from "react";
import { motion, Variants } from "framer-motion";
import clsx from "clsx";

import { useWindowSize } from "@sextival/hooks";
import { DefaultProps } from "@sextival/types";
import { RoundedCloseIcon } from "../icon";

interface Props extends DefaultProps {
  open: boolean;
  onClose: () => void;
  title?: string;
}

export const Drawer = (
  { title, children, open, onClose, className }: Props,
) => {
  const { width } = useWindowSize();

  const variants: Variants = useMemo(() => ({
    closed: {
      x: width,
    },
    opened: {
      x: 0,
      transition: {
        type: "tween",
      },
    },
  }), [width]);

  const defaultClassName = useMemo(
    () =>
      "fixed z-20 w-screen top-0 left-0 bottom-0 right-0 bg-sex-blue-2 bg-opacity-70 backdrop-blur-lg p-8",
    [],
  );

  return (
    <motion.div
      variants={variants}
      initial="closed"
      animate={open ? "opened" : "closed"}
      className={clsx(
        defaultClassName,
        className,
        !open && "pointer-events-none",
        open ? "opacity-100" : "opacity-0",
      )}
    >
      <div className="flex items-center justify-between mb-6">
        {title && <span className="font-bold text-2xl">{title}</span>}
        <RoundedCloseIcon
          onClick={onClose}
          className="h-6 w-6 text-sex-blue-6"
        />
      </div>
      {children}
    </motion.div>
  );
};
