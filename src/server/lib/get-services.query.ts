import client from "../client";
import { SERVICES } from "../notion-dabatase";
import { mapping } from "../mappings/mapping-services";

export const getServices = async () => {
  const rawSchedule = await client.databases.query({
    database_id: SERVICES,
    sorts: [{
      property: "Zona",
      direction: "ascending",
    }],
  });

  return mapping(rawSchedule);
};
