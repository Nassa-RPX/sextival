import client from "@sextival/server/client";
import { schedule } from "@sextival/server/mappings";
import { SCHEDULE } from "@sextival/server/notion-dabatase";

export const getSchedule = async () => {
  const raw = await client.databases.query({
    database_id: SCHEDULE,
    sorts: [{
      property: "Ore",
      direction: "ascending",
    }],
  });

  return schedule(raw);
};
