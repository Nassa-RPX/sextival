import client from "../client";
import { mapping } from "../mappings/mapping-service";

export const getService = async (id: string) => {
  const page = await client.pages.retrieve({ page_id: id });

  return mapping(page);
};
