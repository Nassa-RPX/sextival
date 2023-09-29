import { GetPageResponse } from "@notionhq/client/build/src/api-endpoints";
import { getGuest } from "@sextival/server/lib";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<GetPageResponse>,
) {
  try {
    const id = _req.query.id as string;
    const data = await getGuest(id);

    res.status(200).json(data);
  } catch (e) {
    res.status(500);
  }
}
