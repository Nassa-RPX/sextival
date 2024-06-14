import clsx from "clsx";
import { useCallback, useState } from "react";

import { Guests } from "./guests";
import { Guest } from "@sextival/server/types";

interface Props {
  idx: number;
  title: string;
  hour: string;
  description: string;
  guests: Array<Guest>;
}

export const Talk = ({ title, hour, description, guests }: Props) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = useCallback(() => setExpanded((state) => !state), []);

  return (
    <div className="flex flex-col lg:flex-row shadow-xl">
      <div className=" lg:basis-1/6 bg-brand-rose p-4 lg:p-8 rounded-t-md lg:rounded-tr-none lg:rounded-l-md flex items-center justify-center text-white text-xl font-bold leading-none text-center">
        {hour}
      </div>
      <div className="flex-1 bg-white bg-opacity-40  text-sex-blue-8 min-h-[100px] flex py-4 px-8 flex-col gap-2 justify-center rounded-b-md lg:rounded-bl-none lg:rounded-r-md ">
        <h3 className="text-xl lg:text-2xl font-bold mr-[10%]">{title}</h3>
        <div className="leading-tight lg:text-justify">
          <p
            className={clsx(
              expanded ? "line-clamp-none" : "line-clamp-3 lg:line-clamp-2",
            )}
          >
            {description}
          </p>
          {description && description.length > 0 && (
            <button className="font-bold ml-1" onClick={toggleExpanded}>
              {!expanded ? "...mostra" : "...nascondi"}
            </button>
          )}
        </div>

        {guests && guests.length > 0 && <Guests guests={guests} />}
      </div>
    </div>
  );
};
