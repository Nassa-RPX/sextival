import clsx from "clsx";
import { motion } from "framer-motion";
import { useCallback, useState } from "react";

import { Guests } from "./guests";

interface Props {
  idx: number;
  title: string;
  hour: string;
  description: string;
  guests_ids: string[];
  onClickGuests: (ids: string[]) => void;
}

export const Talk = (
  { idx, title, hour, description, guests_ids, onClickGuests }: Props,
) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = useCallback(() => setExpanded((state) => !state), [
    expanded,
  ]);

  return (
    <motion.div
      initial={{ x: 300, opacity: 0 }}
      animate={{
        x: 0,
        opacity: 1,
        transition: { duration: .5, delay: idx * 0.05 },
      }}
      exit={{
        x: -300,
        opacity: 0,
        transition: { duration: .3, delay: 0 },
      }}
      className="flex"
    >
      <div className="basis-1/6 bg-sex-red-8 p-8 rounded-l-md flex items-center justify-center text-sm lg:text-lg font-bold leading-none text-center text-white">
        {hour}
      </div>
      <div className="flex-1 bg-sex-red-6 min-h-[100px] flex py-4 px-8 flex-col rounded-r-md">
        <h3 className="text-lg lg:text-xl font-bold">{title}</h3>
        <div className="lg:w-3/5 leading-tight">
          <p className={clsx(expanded ? "line-clamp-none" : "line-clamp-2")}>
            {description}
          </p>
          {description && description.length > 0 && (
            <button
              className="font-bold ml-1"
              onClick={toggleExpanded}
            >
              {!expanded ? "...mostra" : "...nascondi"}
            </button>
          )}
        </div>

        <Guests
          guest_ids={guests_ids}
          onClick={onClickGuests}
        />
      </div>
    </motion.div>
  );
};
