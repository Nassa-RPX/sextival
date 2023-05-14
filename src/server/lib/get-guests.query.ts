import {
  QueryDatabaseResponse,
} from "@notionhq/client/build/src/api-endpoints";
import client from "../client";
import { GUESTS } from "../notion-dabatase";
import { Guest } from "../types";

export const getGuests = async (): Promise<Array<Guest>> => {
  const rawGuests = await client.databases.query({ database_id: GUESTS });
  return mapping(rawGuests);
};

const mapping = (response: QueryDatabaseResponse): Array<Guest> =>
  response.results.map((
    partial,
  ) => {
    if ("properties" in partial) {
      const properties = partial.properties;
      const Nome = properties.Nome!;

      let name = undefined;
      if (Nome.type === "title" && Nome.title.length > 0) {
        name = Nome.title[0]!.plain_text;
      }

      const cover = partial.cover
        ? partial.cover.type === "file"
          ? partial.cover.file.url
          : partial.cover.external.url
        : undefined;

      const Descrizione = properties.Descrizione!;

      let description = undefined;
      if (
        Descrizione.type === "rich_text" && Descrizione.rich_text.length > 0
      ) {
        description = Descrizione.rich_text[0]!.plain_text;
      }

      const Programma = properties.Programma;
      let talk_ids: string[] = [];
      if (Programma?.type === "relation" && Programma.relation.length > 0) {
        talk_ids = Programma.relation.map((v) => v.id);
      }

      return {
        name,
        cover,
        description,
        talk_ids,
      };
    }
  }).filter((v): v is Guest => !!v && !!v.name && !!v.cover && !!v.description);
