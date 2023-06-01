import { GetPageResponse } from "@notionhq/client/build/src/api-endpoints";
import { QueryDatabaseResponse } from "@notionhq/client/build/src/api-endpoints";
import { Info } from "../types";

export const infos = (infos: QueryDatabaseResponse): Array<Info> =>
  infos.results.map((partial) => info(partial)).filter((
    i,
  ): i is Info => !!i && !!i.name && !!i.description);

export const info = (partial: GetPageResponse) => {
  if ("properties" in partial) {
    const properties = partial.properties;
    const Nome = properties.Nome;

    let name = undefined;
    if (Nome && Nome.type === "title" && Nome.title.length > 0) {
      name = Nome.title[0] && Nome.title[0].plain_text;
    }

    const Descrizione = properties.Descrizione;
    let description = null;
    if (
      Descrizione && Descrizione.type === "rich_text" &&
      Descrizione.rich_text.length > 0
    ) {
      const plainT = Descrizione.rich_text.map((t) => t.plain_text);
      description = plainT.join("");
    }

    const id = partial.id;

    return {
      id,
      name,
      description,
    };
  }
};
