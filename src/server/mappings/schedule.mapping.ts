import { QueryDatabaseResponse } from "@notionhq/client/build/src/api-endpoints";
import { NotionResult, Schedule, Talk } from "../types";

export const schedule = (schedule: QueryDatabaseResponse): Schedule =>
  schedule.results
    .map((partial) => talk(partial))
    .filter(
      (v): v is Talk => !!v && !!v.title && !!v.type && !!v.day && !!v.hour,
    );

export const talk = (partial: NotionResult) => {
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

    const Titolo = p.Titolo;
    let title = undefined;
    if (Titolo && Titolo.type === "title" && Titolo.title.length > 0) {
      title = Array.isArray(Titolo.title) && Titolo.title[0]?.plain_text;
    }

    const Giorno = p.Giorno;
    let day = undefined;
    if (
      Giorno &&
      Giorno.type === "select" &&
      Giorno.select &&
      !("options" in Giorno.select) &&
      Giorno.select.name
    ) {
      day = Giorno.select.name;
    }

    const Ore = p.Ore;
    let hour = undefined;
    if (
      Ore &&
      Ore.type === "select" &&
      Ore.select &&
      !("options" in Ore.select) &&
      Ore.select.name
    ) {
      hour = Ore.select.name;
    }

    const Tipo = p.Tipo;
    let type = undefined;
    if (
      Tipo &&
      Tipo.type === "select" &&
      Tipo.select &&
      !("options" in Tipo.select) &&
      Tipo.select.name
    ) {
      type = Tipo.select.name;
    }

    const Ospiti = p.Ospiti;
    let guest_ids: string[] = [];

    if (
      Ospiti &&
      Ospiti.type === "relation" &&
      Array.isArray(Ospiti.relation) &&
      Ospiti.relation.length > 0
    ) {
      guest_ids = Ospiti.relation.map((v) => v.id);
    }

    return {
      title,
      description,
      day,
      hour,
      guest_ids,
      type,
    };
  }
};
