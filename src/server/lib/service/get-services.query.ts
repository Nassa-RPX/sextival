import client from "@sextival/server/client";
import { services } from "@sextival/server/mappings";
import { SERVICES } from "@sextival/server/notion-dabatase";
import { Service } from "@sextival/server/types";
import { groupBy } from "@sextival/utils";

const groupServices = (services: Service[]) => {
  const g = groupBy(services, (s) => s.zone);
  const s: Record<string, Service[]> = {};
  Object.entries(g).forEach(([key, service]) => {
    s[key] = service.sort((a, b) => a.order > b.order ? 1 : -1);
  });
  return s;
};

export const getServices = async () => {
  const rawSchedule = await client.databases.query({
    database_id: SERVICES,
    sorts: [{
      property: "Zona",
      direction: "ascending",
    }],
  });

  const service = services(rawSchedule);
  return { services: service, groupedServices: groupServices(service) };
};
