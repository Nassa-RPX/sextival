import client from "../client";
import { SCHEDULE } from "../notion-dabatase";
import { Schedule } from "../types";
import { mapping } from "../mappings/mapping-schedule";

export const getSchedule = async (): Promise<Schedule | undefined> => {
  const rawSchedule = await client.databases.query({
    database_id: SCHEDULE,
    sorts: [{
      property: "Ore",
      direction: "ascending",
    }],
  });
  
  console.log('raw', rawSchedule)
  
  return mapping(rawSchedule);
};
