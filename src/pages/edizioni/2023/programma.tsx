import { NextPage } from "next";
import { useMemo } from "react";

import { getSchedule } from "@sextival/server/lib";
import { GroupedSchedule, Schedule } from "@sextival/server/types";
import { Page } from "@sextival/ui/page";
import { groupBy } from "@sextival/utils";

import { Schedule as ScheduleSection } from "@sextival/sections/schedule";

// TODO: clean this mess
// TODO: try to add an animation on day's change

const Programma: NextPage<{ schedule: Schedule }> = ({ schedule }) => {
  const groupedSchedule: GroupedSchedule = useMemo(() => {
    console.log("schedule", schedule);
    const grouped = groupBy(schedule, (s) => s.day);

    console.log("grouped", grouped);

    return {
      17: groupBy(grouped["Giorno 1"]!, (i) => i.type),
      18: groupBy(grouped["Giorno 2"]!, (i) => i.type),
    };
  }, [schedule]);

  return (
    <Page title="PROGRAMMA">
      <ScheduleSection schedule={groupedSchedule} />
    </Page>
  );
};

export async function getServerSideProps() {
  // Get the posts
  const schedule = await getSchedule();

  console.log("SERVER SCHEDULE", schedule);

  // Return the result
  return {
    props: {
      schedule,
    },
  };
}

export default Programma;
