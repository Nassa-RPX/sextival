import { GetPageResponse } from "@notionhq/client/build/src/api-endpoints";

export const mapping = (partial: GetPageResponse) => {
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

    const id = partial.id;

    return {
      id,
      name,
      zone,
    };
  }
};
