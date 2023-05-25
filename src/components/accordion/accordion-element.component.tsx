import { AccordionData } from "./accordion.types";
import { AnimatePresence, motion } from "framer-motion";
import { DownIcon } from "../icon";
import { AccordionContent } from "./accordion-content.component";

interface Props {
  data: AccordionData;
  isOpen: boolean;
  idx: number;
  setExpanded: (i: false | number) => void;
}

export const AccordionElement = (
  { data, isOpen, setExpanded, idx }: Props,
) => {
  return (
    <>
      <motion.header
        initial={false}
        animate={{
          backgroundColor: isOpen ? "#9492F8" : "rgba(148, 146, 248, 0.41)",
        }}
        onClick={() => setExpanded(isOpen ? false : idx)}
        className="p-4 cursor-pointer flex items-center justify-between rounded-md text-2xl font-bold text-sex-blue-8"
      >
        <span>
          {data.label}
        </span>

        <DownIcon selected={isOpen} />
      </motion.header>
      <AnimatePresence initial={false} mode="wait">
        {isOpen && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: {
                opacity: 1,
                height: "auto",
                transition: { duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] },
              },

              collapsed: {
                opacity: 0,
                height: 0,
                transition: { duration: 0.1 },
              },
            }}
          >
            <AccordionContent>
              {data.description}
            </AccordionContent>
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
};
