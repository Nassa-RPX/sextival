import client from "@sextival/server/client";
import { infos } from "@sextival/server/mappings";
import { INFO } from "@sextival/server/notion-dabatase";
import { Info } from "@sextival/server/types";

export const getInfos = async (): Promise<Array<Info> | undefined> => {
  const raw = await client.databases.query({
    database_id: INFO,
  });

  return infos(raw);
};
