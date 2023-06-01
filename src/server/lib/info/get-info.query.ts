import client from "@sextival/server/client";
import { info } from "@sextival/server/mappings";

export const getInfo = async (id: string) => {
  const page = await client.pages.retrieve({ page_id: id });

  return info(page);
};
