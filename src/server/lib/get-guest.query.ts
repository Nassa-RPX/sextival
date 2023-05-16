import client from "../client";

export const getGuest = (id: string) => client.pages.retrieve({ page_id: id });
