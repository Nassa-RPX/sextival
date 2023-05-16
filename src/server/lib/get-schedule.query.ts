import client from "../client";
import { SCHEDULE } from "../notion-dabatase";
import { Schedule } from "../types";
import { mapping } from "../mappings/mapping-schedule";

export const getSchedule = async (): Promise<Schedule> => {
  const rawSchedule = await client.databases.query({ database_id: SCHEDULE });
  return mapping(rawSchedule);
};
