import { QueryDatabaseResponse } from "@notionhq/client/build/src/api-endpoints";
import type { NextApiRequest, NextApiResponse } from "next";

import client from "@sextival/server/client";
import { SCHEDULE } from "@sextival/server/notion-dabatase";

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<QueryDatabaseResponse>,
) {
  try {
    const data = await client.databases.query({
      database_id: SCHEDULE,
      sorts: [{
        property: "Ore",
        direction: "ascending",
      }],
    });

    res.status(200).json(data);
  } catch (e) {
    res.status(500);
  }
}
