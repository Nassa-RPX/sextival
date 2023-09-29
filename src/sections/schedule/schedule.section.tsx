"use client";

import { HammerIcon, MicrophoneIcon } from "@sextival/components/icon";
import { Day, GroupedSchedule, Type } from "@sextival/server/types";

import { AnimatePresence } from "framer-motion";
import { useCallback, useState } from "react";
import clsx from "clsx";

import { Spacer } from "@sextival/ui/spacer";
import { Modal } from "@sextival/components/modal";

import { DayButton } from "./day-button";
import { TypeButton } from "./type-button";
import { ModalGuests } from "./modal-guests";
import { Talk } from "./talk";

interface Props {
  schedule: GroupedSchedule;
  centered?: boolean;
}

export const Schedule = ({ schedule, centered }: Props) => {
  const [selectedDay, setSelectedDay] = useState<Day>(17);

  const [selectedType, setSelectedType] = useState<Type>(
    "Intervento",
  );

  const onChangeDay = useCallback((day: 17 | 18) => {
    setSelectedDay(day);
  }, []);

  const [selectedGuests, setSelectedGuests] = useState<string[] | undefined>(
    undefined,
  );

  return (
    <>
      <div className={clsx("flex mx-auto gap-2")}>
        <DayButton
          selected={selectedDay === 17}
          onClick={() => onChangeDay(17)}
        >
          Programma del 17
        </DayButton>

        <DayButton
          selected={selectedDay === 18}
          onClick={() => onChangeDay(18)}
        >
          Programma del 18
        </DayButton>
      </div>

      <Spacer type="y" dimension="sm" />

      <div className="mx-auto flex gap-4 items-center">
        <TypeButton
          icon={<MicrophoneIcon />}
          selected={selectedType === "Intervento"}
          onClick={() => setSelectedType("Intervento")}
        >
          Talk
        </TypeButton>

        <TypeButton
          selected={selectedType === "Workshop"}
          onClick={() => setSelectedType("Workshop")}
          icon={<HammerIcon />}
        >
          Workshop
        </TypeButton>
      </div>

      <Spacer type="y" dimension="md" />
      <div
        className={clsx(
          "flex flex-col gap-4 lg:gap-2 overflow-hidden",
          centered && "lg:w-4/5 mx-auto ",
        )}
      >
        <AnimatePresence mode="popLayout">
          {schedule && schedule[selectedDay] &&
            schedule[selectedDay][selectedType].map((t, i) => (
              <Talk
                key={t.title}
                idx={i}
                title={t.title}
                description={t.description}
                hour={t.hour}
                guests_ids={t.guest_ids}
                onClickGuests={(ids) => setSelectedGuests(ids)}
              />
            ))}
        </AnimatePresence>
      </div>

      <Modal
        open={!!selectedGuests}
        onClose={() => setSelectedGuests(undefined)}
        title="Ospitə"
      >
        <ModalGuests guest_ids={selectedGuests!} />
      </Modal>
    </>
  );
};
