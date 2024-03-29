import { NextPage } from "next";
import { useMemo } from "react";

import { getSchedule } from "@sextival/server/lib";
import { GroupedSchedule, Schedule } from "@sextival/server/types";
import { Page } from "@sextival/ui/page";
import { groupBy } from "@sextival/utils";

import { Schedule as ScheduleSection } from "@sextival/sections/schedule";

const Programma: NextPage<{ schedule: Schedule }> = ({ schedule }) => {
  const groupedSchedule: GroupedSchedule = useMemo(() => {
    const grouped = groupBy(schedule || [], (s) => s.day);

    return {
      17: groupBy(
        grouped["Giorno 1"] ? grouped["Giorno 1"] : [],
        (i) => i.type,
      ),
      18: groupBy(
        grouped["Giorno 2"] ? grouped["Giorno 2"] : [],
        (i) => i.type,
      ),
    };
  }, [schedule]);

  if (!schedule || schedule.length === 0) return <span>Error</span>;

  return (
    <Page title="PROGRAMMA">
      <ScheduleSection schedule={groupedSchedule} centered />
    </Page>
  );
};

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

export default Programma;
