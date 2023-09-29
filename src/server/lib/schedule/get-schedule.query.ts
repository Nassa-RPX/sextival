import client from "@sextival/server/client";
import { schedule } from "@sextival/server/mappings";
import { SCHEDULE } from "@sextival/server/notion-dabatase";
import { Schedule } from "@sextival/server/types";
import { groupBy } from "@sextival/utils";

const groupSchedule = (schedule: Schedule) => {
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
};

export const getSchedule = async () => {
  const raw = await client.databases.query({
    database_id: SCHEDULE,
    sorts: [{
      property: "Ore",
      direction: "ascending",
    }],
  });

  return groupSchedule(schedule(raw));
};
