import { GetPageResponse } from "@notionhq/client/build/src/api-endpoints";
import { QueryDatabaseResponse } from "@notionhq/client/build/src/api-endpoints";
import { Service } from "../types";

export const services = (services: QueryDatabaseResponse): Array<Service> =>
  services.results.map((partial) => service(partial)).filter((
    s,
  ): s is Service => !!s && !!s.name && !!s.zone && !!s.order);

export const service = (partial: GetPageResponse) => {
  if ("properties" in partial) {
    const properties = partial.properties;
    const Nome = properties.Nome;

    let name = undefined;
    if (Nome && Nome.type === "title" && Nome.title.length > 0) {
      name = Nome.title[0] && Nome.title[0].plain_text;
    }

    const Zona = properties.Zona;
    let zone = undefined;
    if (Zona && Zona.type === "select" && Zona.select?.name) {
      zone = Zona.select.name;
    }

    const Ordine = properties.Ordine;
    let order = 1;
    if (Ordine && Ordine.type === "number" && Ordine.number) {
      order = Ordine.number;
    }

    const id = partial.id;

    return {
      id,
      name,
      zone,
      order,
    };
  }
};
