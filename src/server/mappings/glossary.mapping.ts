import { QueryDatabaseResponse } from "@notionhq/client/build/src/api-endpoints";
import { Glossary, NotionResult } from "../types";

export const glossaries = (glossarys: QueryDatabaseResponse): Array<Glossary> =>
  glossarys.results.map((partial) => glossary(partial)).filter((
    i,
  ): i is Glossary => !!i && !!i.name && !!i.description);

export const glossary = (partial: NotionResult) => {
  if ("properties" in partial) {
    const properties = partial.properties;
    const Nome = properties.Nome;

    let name = undefined;
    if (
      Nome && Nome.type === "title" &&
      Nome.title.length > 0
    ) {
      name = Array.isArray(Nome.title) && Nome.title[0] &&
        Nome.title[0].plain_text;
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
