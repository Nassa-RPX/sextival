import client from "@sextival/server/client";
import { guests } from "@sextival/server/mappings";
import { GUESTS } from "@sextival/server/notion-dabatase";
import { Guest } from "@sextival/server/types";

export const getGuests = async (): Promise<Array<Guest>> => {
  const rawGuests = await client.databases.query({ database_id: GUESTS });
  return guests(rawGuests);
};
