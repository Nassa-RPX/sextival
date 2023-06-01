import client from "@sextival/server/client";
import { schedule } from "@sextival/server/mappings";
import { SCHEDULE } from "@sextival/server/notion-dabatase";
import { Schedule } from "@sextival/server/types";

export const getSchedule = async (): Promise<Schedule | undefined> => {
  const rawSchedule = await client.databases.query({
    database_id: SCHEDULE,
    sorts: [{
      property: "Ore",
      direction: "ascending",
    }],
  });

  return schedule(rawSchedule);
};
