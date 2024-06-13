import clsx from "clsx";
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

export const Talk = ({
  title,
  hour,
  description,
  guests_ids,
  onClickGuests,
}: Props) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = useCallback(() => setExpanded((state) => !state), []);

  return (
    <div className="flex flex-col lg:flex-row shadow-xl">
      <div className=" lg:basis-1/6 bg-brand-rose p-4 lg:p-8 rounded-t-md lg:rounded-tr-none lg:rounded-l-md flex items-center justify-center text-white text-xl font-bold leading-none text-center">
        {hour}
      </div>
      <div className="flex-1 bg-white bg-opacity-40  text-sex-blue-8 min-h-[100px] flex py-4 px-8 flex-col rounded-b-md lg:rounded-bl-none lg:rounded-r-md ">
        <h3 className="text-xl lg:text-2xl font-bold">{title}</h3>
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

        <Guests guest_ids={guests_ids} onClick={onClickGuests} />
      </div>
    </div>
  );
};
