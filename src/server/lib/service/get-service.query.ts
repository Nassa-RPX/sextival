import client from "@sextival/server/client";
import { service } from "@sextival/server/mappings";

export const getService = async (id: string) => {
  const page = await client.pages.retrieve({ page_id: id });

  return service(page);
};
