import { env } from "../env/server.mjs";
import { Client } from "@notionhq/client";

const client = new Client({
  auth: env.NOTION_SECRET,
});

export default client;
