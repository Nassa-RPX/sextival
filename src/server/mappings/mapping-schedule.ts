import { QueryDatabaseResponse } from "@notionhq/client/build/src/api-endpoints";
import { Schedule, Talk } from "../types";

import { mapping as talk } from "./mapping-talk";

export const mapping = (schedule: QueryDatabaseResponse): Schedule =>
  schedule.results.map((partial) => talk(partial)).filter((v): v is Talk =>
    !!v && !!v.title && !!v.type && !!v.day && !!v.hour
  );
