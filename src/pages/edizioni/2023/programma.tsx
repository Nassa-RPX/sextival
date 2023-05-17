import { NextPage } from "next";
import { useCallback, useMemo, useState } from "react";
import clsx from "clsx";

import { getSchedule } from "@sextival/server/lib";
import { Schedule } from "@sextival/server/types";
import { Page } from "@sextival/ui/page";
import { Spacer } from "@sextival/ui/spacer";
import { groupBy } from "@sextival/utils";
import { DefaultProps, Icon } from "@sextival/types";
import { HammerIcon, MicrophoneIcon } from "@sextival/components/icon";

// TODO: clean this mess
// TODO: try to add an animation on day's change

const Schedule: NextPage<{ schedule: Schedule }> = ({ schedule }) => {
  const groupedSchedule = useMemo(() => {
    const grouped = groupBy(schedule, (s) => s.day);

    return {
      17: groupBy(grouped["Giorno 1"]!, (i) => i.type),
      18: groupBy(grouped["Giorno 2"]!, (i) => i.type),
    };
  }, [schedule]);

  const [selectedDay, setSelectedDay] = useState<17 | 18>(17);

  const [selectedType, setSelectedType] = useState<"Workshop" | "Intervento">(
    "Intervento",
  );

  const onChangeDay = useCallback((day: 17 | 18) => {
    setSelectedDay(day);
  }, []);

  return (
    <Page title="PROGRAMMA">
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

      <Spacer type="y" dimension="md" />

      <div className="flex gap-4 items-center">
        <TypeButton
          icon={<MicrophoneIcon />}
          selected={selectedType === "Intervento"}
          onClick={() => setSelectedType("Intervento")}
        >
          Interventi
        </TypeButton>

        <TypeButton
          selected={selectedType === "Workshop"}
          onClick={() => setSelectedType("Workshop")}
          icon={<HammerIcon />}
        >
          Workshop
        </TypeButton>
        <span className="text-sex-blue-8 text-opacity-70">
          Scegli il tipo di intervento
        </span>
      </div>

      <Spacer type="y" dimension="sm" />

      <div className="flex flex-col gap-4">
        {groupedSchedule && groupedSchedule[selectedDay] &&
          groupedSchedule[selectedDay][selectedType].map((t) => (
            <div key={t.title} className="flex">
              <div className="basis-1/5 bg-sex-red-8 p-8 rounded-l-md flex items-center justify-center text-sm lg:text-lg font-bold leading-none text-center text-white">
                {t.hour}
              </div>
              <div className="flex-1 bg-sex-red-6 min-h-[100px] flex py-4 px-8 flex-col rounded-r-md">
                <h3 className="text-lg lg:text-xl font-bold">{t.title}</h3>
                <p className="max-w-3/4 leading-tight">
                  {t.description}
                </p>
              </div>
            </div>
          ))}
      </div>
    </Page>
  );
};

interface DayButtonProps extends DefaultProps {
  selected: boolean;
  onClick: () => void;
}

const DayButton = (
  { selected, onClick, children }: DayButtonProps,
) => (
  <div
    onClick={onClick}
    className={clsx(
      "py-3 px-8 rounded-md cursor-pointer transition-colors text-lg",
      selected ? "bg-sex-red-6 text-white" : "bg-sex-red-0",
    )}
  >
    {children}
  </div>
);

interface TypeButtonProps extends DefaultProps {
  selected: boolean;
  onClick: () => void;
  icon: Icon;
}

const TypeButton = (
  { selected, onClick, children, icon: Icon }: TypeButtonProps,
) => (
  <div
    className={clsx(
      "py-2 flex gap-2 px-4 rounded-md cursor-pointer transition-colors bg-sex-blue-2 ",
      selected ? "bg-opacity-80" : "bg-opacity-30",
    )}
    onClick={onClick}
  >
    {Icon}
    <span>{children}</span>
  </div>
);

export async function getServerSideProps() {
  // Get the posts
  const schedule = await getSchedule();

  // Return the result
  return {
    props: {
      schedule,
    },
  };
}

export default Schedule;
