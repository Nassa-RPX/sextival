import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import clsx from "clsx";

interface Props {
  texts: Array<string>;
  className?: string;
}

export const TextLoop = ({ texts, className }: Props) => {
  const variants: Variants = useMemo(() => ({
    enter: () => {
      return {
        y: -20,
        opacity: 0,
      };
    },
    center: {
      zIndex: 1,
      y: 0,
      opacity: 1,
    },
    exit: () => {
      return {
        zIndex: 0,
        opacity: 0,
      };
    },
  }), []);

  const [index, setIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      let next = index + 1;
      if (next === texts.length) {
        next = 0;
      }
      setIndex(next);
    }, 3 * 1000);
  }, [index, setIndex]);

  return (
    <AnimatePresence>
      <motion.span
        variants={variants}
        key={index}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{
          y: { type: "spring", stiffness: 300, damping: 200},
          opacity: { duration: 0.5 },
        }}
        className={clsx("absolute h-full lg:py-4", className)}
      >
        {texts[index]}
      </motion.span>
    </AnimatePresence>
  );
};
