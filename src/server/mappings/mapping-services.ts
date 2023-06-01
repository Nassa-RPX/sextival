import { QueryDatabaseResponse } from "@notionhq/client/build/src/api-endpoints";
import { Service } from "../types";

import { mapping as service } from "./mapping-service";

export const mapping = (services: QueryDatabaseResponse): Array<Service> =>
  services.results.map((partial) => service(partial)).filter((
    s,
  ): s is Service => !!s && !!s.name && !!s.zone);
