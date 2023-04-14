import { useWindowSize } from "@sextival/hooks";
import clsx from "clsx";
import { PropsWithChildren, useMemo } from "react";
import { motion, Variants } from "framer-motion";
import { RoundedCloseIcon } from "../icon";

interface Props extends PropsWithChildren {
  open: boolean;
  onClose: () => void;
  className?: string;
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
      "fixed z-20 top-0 left-0 bottom-0 right-0 bg-sex-red-2 bg-opacity-90 backdrop-blur-md p-8",
    [],
  );

  return (
    <motion.div
      variants={variants}
      initial="closed"
      animate={open ? "opened" : "closed"}
      className={clsx(defaultClassName, className)}
    >
      <div className="flex items-center justify-between">
        {title && <span className="font-bold">{title}</span>}
        <RoundedCloseIcon
          onClick={onClose}
          className="h-6 w-6 text-sex-red-6"
        />
      </div>
      {children}
    </motion.div>
  );
};
