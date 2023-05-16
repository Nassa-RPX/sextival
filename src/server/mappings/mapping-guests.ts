import { QueryDatabaseResponse } from "@notionhq/client/build/src/api-endpoints";
import { Guest } from "../types";

import { mapping as guest } from "./mapping-guest";

export const mapping = (response: QueryDatabaseResponse): Array<Guest> =>
  response.results.map((
    partial,
  ) => guest(partial)).filter((v): v is Guest =>
    !!v && !!v.name && !!v.cover && !!v.description
  );
