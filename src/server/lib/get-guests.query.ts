import client from "../client";
import { GUESTS } from "../notion-dabatase";
import { Guest } from "../types";
import { mapping } from "../mappings/mapping-guests";

export const getGuests = async (): Promise<Array<Guest>> => {
  const rawGuests = await client.databases.query({ database_id: GUESTS });
  return mapping(rawGuests);
};
