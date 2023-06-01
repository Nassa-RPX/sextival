import client from "@sextival/server/client";
import { services } from "@sextival/server/mappings";
import { SERVICES } from "@sextival/server/notion-dabatase";

export const getServices = async () => {
  const rawSchedule = await client.databases.query({
    database_id: SERVICES,
    sorts: [{
      property: "Zona",
      direction: "ascending",
    }],
  });

  return services(rawSchedule);
};
