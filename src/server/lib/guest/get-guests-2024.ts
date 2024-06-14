import client from "@sextival/server/client";
import { GUESTS_2024 } from "@sextival/server/notion-dabatase";

export type Guest = {
  id: string;
  name: string;
  description: string;
  talk_ids: string[];
  cover: string;
};

export const getGuests = async (): Promise<Array<Guest>> => {
  const rawGuests = await client.databases.query({ database_id: GUESTS_2024 });
  return guests(rawGuests);
};

import { QueryDatabaseResponse } from "@notionhq/client/build/src/api-endpoints";
import { NotionResult } from "@sextival/server/types";

export const guest = (partial: NotionResult) => {
  if ("properties" in partial) {
    const p = partial.properties;

    const Descrizione = p.Descrizione;
    let description = null;
    if (
      Descrizione &&
      Descrizione.type === "rich_text" &&
      Descrizione.rich_text.length > 0
    ) {
      // description = Descrizione.rich_text[0]?.plain_text;
      const plainT = Descrizione.rich_text.map((t) => t.plain_text);
      description = plainT.join("");
    }

    const Titolo = p.Nome;
    let name = undefined;
    if (Titolo && Titolo.type === "title" && Titolo.title.length > 0) {
      name = Array.isArray(Titolo.title) && Titolo.title[0]?.plain_text;
    }

    const Programma = p.Programma;
    let talk_ids: string[] = [];

    if (
      Programma &&
      Programma.type === "relation" &&
      Array.isArray(Programma.relation) &&
      Programma.relation.length > 0
    ) {
      talk_ids = Programma.relation.map((v) => v.id);
    }

    return {
      id: partial.id,
      name,
      cover: "",
      description,
      talk_ids,
    };
  }
};

export const guests = (response: QueryDatabaseResponse): Array<Guest> => {
  return response.results
    .map((partial) => guest(partial))
    .filter((v): v is Guest => !!v && !!v.name);
};
