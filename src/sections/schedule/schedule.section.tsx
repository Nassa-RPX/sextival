import { HammerIcon, MicrophoneIcon } from "@sextival/components/icon";
import { Day, GroupedSchedule, Type } from "@sextival/server/types";
import { Spacer } from "@sextival/ui/spacer";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useState } from "react";
import { DayButton } from "./day-button";
import { TypeButton } from "./type-button";
import { Guests } from "./guests";
import { Modal } from "@sextival/components/modal";
import { ModalGuests } from "./modal-guests";

interface Props {
  schedule: GroupedSchedule;
}

export const Schedule = ({ schedule }: Props) => {
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
      <div className="flex mx-auto gap-2">
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

      <div className="flex flex-col gap-2 lg:w-4/5 mx-auto overflow-hidden">
        <AnimatePresence mode="popLayout">
          {schedule && schedule[selectedDay] &&
            schedule[selectedDay][selectedType].map((t, i) => (
              <motion.div
                key={t.title}
                initial={{ x: 300, opacity: 0 }}
                animate={{
                  x: 0,
                  opacity: 1,
                  transition: { duration: .5, delay: i * 0.05 },
                }}
                exit={{
                  x: -300,
                  opacity: 0,
                  transition: { duration: .3, delay: 0 },
                }}
                className="flex"
              >
                <div className="basis-1/6 bg-sex-red-8 p-8 rounded-l-md flex items-center justify-center text-sm lg:text-lg font-bold leading-none text-center text-white">
                  {t.hour}
                </div>
                <div className="flex-1 bg-sex-red-6 min-h-[100px] flex py-4 px-8 flex-col rounded-r-md">
                  <h3 className="text-lg lg:text-xl font-bold">{t.title}</h3>
                  <p className="max-w-3/4 leading-tight">
                    {t.description}
                  </p>

                  <Guests
                    guest_ids={t.guest_ids}
                    onClick={(ids: string[]) => setSelectedGuests(ids)}
                  />
                </div>
              </motion.div>
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
