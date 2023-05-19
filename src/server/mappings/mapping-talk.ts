import { GetPageResponse } from "@notionhq/client/build/src/api-endpoints";

export const mapping = (partial: GetPageResponse) => {
  if ("properties" in partial) {
    const p = partial.properties;

    const Descrizione = p.Descrizione;
    let description = null;
    if (
      Descrizione && Descrizione.type === "rich_text" &&
      Descrizione.rich_text.length > 0
    ) {
      description = Descrizione.rich_text[0]?.plain_text;
    }

    const Titolo = p.Titolo;
    let title = undefined;
    if (Titolo && Titolo.type === "title" && Titolo.title.length > 0) {
      title = Titolo.title[0]?.plain_text;
    }

    const Giorno = p.Giorno;
    let day = undefined;
    if (Giorno && Giorno.type === "select" && Giorno.select?.name) {
      day = Giorno.select.name;
    }

    const Ore = p.Ore;
    let hour = undefined;
    if (Ore && Ore.type === "select" && Ore.select?.name) {
      hour = Ore.select.name;
    }

    const Tipo = p.Tipo;
    let type = undefined;
    if (Tipo && Tipo.type === "select" && Tipo.select?.name) {
      type = Tipo.select.name;
    }

    const Ospiti = p.Ospiti;
    let guest_ids: string[] = [];

    if (Ospiti && Ospiti.type === "relation" && Ospiti.relation.length > 0) {
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