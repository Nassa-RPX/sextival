"use client";

import { GroupedSchedule2024, Guest, Type } from "@sextival/server/types";

import { useState } from "react";
import clsx from "clsx";

import { Spacer } from "@sextival/ui/spacer";
import { Talk } from "./talk";

interface Props {
  schedule: GroupedSchedule2024;
  guests: Array<Guest>;
  centered?: boolean;
}

export const Schedule2024 = ({ schedule, guests, centered }: Props) => {
  const [selectedType] = useState<Type>("Intervento");

  return (
    <>
      <Spacer type="y" dimension="sm" />

      {/* <div className="mx-auto flex gap-4 items-center"> */}
      {/*   <TypeButton */}
      {/*     icon={<MicrophoneIcon />} */}
      {/*     selected={selectedType === "Intervento"} */}
      {/*     onClick={() => setSelectedType("Intervento")} */}
      {/*   > */}
      {/*     Talk */}
      {/*   </TypeButton> */}
      {/**/}
      {/*   <TypeButton */}
      {/*     selected={selectedType === "Workshop"} */}
      {/*     onClick={() => setSelectedType("Workshop")} */}
      {/*     icon={<HammerIcon />} */}
      {/*   > */}
      {/*     Workshop */}
      {/*   </TypeButton> */}
      {/* </div> */}

      <Spacer type="y" dimension="md" />

      <div
        className={clsx(
          "flex flex-col gap-4 overflow-hidden",
          centered && "lg:w-4/5 lg:mx-auto mb-4",
        )}
      >
        <span className="text-brand-blue text-3xl font-bold">SABATO 22</span>
      </div>

      <div
        className={clsx(
          "flex flex-col gap-4 overflow-hidden",
          centered && "lg:w-4/5 lg:mx-auto ",
        )}
      >
        {schedule &&
          schedule[22] &&
          schedule[22][selectedType].map((t, i) => (
            <Talk
              key={t.title}
              idx={i}
              title={t.title}
              description={t.description}
              hour={t.hour}
              guests={guests.filter((g) => t.guest_ids.includes(g.id))}
            />
          ))}
      </div>

      <Spacer type="y" dimension="lg" />

      <div
        className={clsx(
          "flex flex-col gap-4  overflow-hidden",
          centered && "lg:w-4/5 lg:mx-auto mb-4",
        )}
      >
        <span className="text-brand-blue text-3xl font-bold">DOMENICA 23</span>
      </div>
      <div
        className={clsx(
          "flex flex-col gap-4  overflow-hidden",
          centered && "lg:w-4/5 lg:mx-auto ",
        )}
      >
        {schedule &&
          schedule[23] &&
          schedule[23][selectedType].map((t, i) => (
            <Talk
              key={t.title}
              idx={i}
              title={t.title}
              description={t.description}
              hour={t.hour}
              guests={guests.filter((g) => t.guest_ids.includes(g.id))}
            />
          ))}
      </div>
    </>
  );
};
