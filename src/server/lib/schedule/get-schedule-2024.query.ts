import client from "@sextival/server/client";
import { schedule } from "@sextival/server/mappings";
import { SCHEDULE_2024 } from "@sextival/server/notion-dabatase";
import { Schedule } from "@sextival/server/types";
import { groupBy } from "@sextival/utils";

const groupSchedule = (schedule: Schedule) => {
  const grouped = groupBy(schedule || [], (s) => s.day);

  return {
    22: groupBy(grouped["Giorno1"] ? grouped["Giorno1"] : [], (i) => i.type),
    23: groupBy(grouped["Giorno2"] ? grouped["Giorno2"] : [], (i) => i.type),
  };
};

export const getSchedule2024 = async () => {
  const raw = await client.databases.query({
    database_id: SCHEDULE_2024,

    sorts: [
      {
        property: "Ore",
        direction: "ascending",
      },
    ],
  });

  return groupSchedule(schedule(raw));
};
