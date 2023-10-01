import client from "@sextival/server/client";
import { SCHEDULE } from "@sextival/server/notion-dabatase";

export async function GET(
  _req: Request,
) {
  try {
    const data = await client.databases.query({
      database_id: SCHEDULE,
      sorts: [{
        property: "Ore",
        direction: "ascending",
      }],
    });

    return new Response(JSON.stringify(data), {status: 200});
  } catch (e) {
    return new Response(null, { status: 500});
  }
}
