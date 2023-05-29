import client from "../client";
import { SCHEDULE } from "../notion-dabatase";
import { QueryDatabaseResponse } from "@notionhq/client/build/src/api-endpoints";

export const getSchedule = (): Promise<QueryDatabaseResponse> => {
  return client.databases.query({
    database_id: SCHEDULE,
    sorts: [{
      property: "Ore",
      direction: "ascending",
    }],
  });
};
