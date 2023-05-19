import { useFetch } from "@sextival/hooks";
import { mapping } from "@sextival/server/mappings/mapping-schedule";
import { GroupedSchedule } from "@sextival/server/types";
import { Heading } from "@sextival/ui/heading";
import { Section } from "@sextival/ui/section";
import { groupBy } from "@sextival/utils";
import { useEffect, useState } from "react";
import { Schedule } from "../schedule";

export const HomeSchedule = () => {
  const { data } = useFetch("/api/schedule", mapping);
  const [schedule, setSchedule] = useState<GroupedSchedule | undefined>(
    undefined,
  );

  useEffect(() => {
    if (!data) return;
    const groupedByDay = groupBy(data, (s) => s.day);
    const grouped = {
      17: groupBy(groupedByDay["Giorno 1"]!, (i) => i.type),
      18: groupBy(groupedByDay["Giorno 2"]!, (i) => i.type),
    };

    setSchedule(grouped);
  }, [data]);

  return (
    <Section>
      <Heading
        order={2}
        className="text-2xl lg:text-6xl mx-auto text-sex-blue-4"
      >
        PROGRAMMA
      </Heading>

      {schedule ? <Schedule schedule={schedule} /> : <span>Loading...</span>}
    </Section>
  );
};
