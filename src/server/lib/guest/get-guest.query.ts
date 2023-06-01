import client from "@sextival/server/client";

export const getGuest = (id: string) => client.pages.retrieve({ page_id: id });
