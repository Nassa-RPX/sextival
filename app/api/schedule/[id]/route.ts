import { getGuest } from "@sextival/server/lib";

type Params = {params: {id: string}};

export async function GET(
  _req: Request,
  context: Params
) {
  try {
    const id = context.params.id;
    const data = await getGuest(id);

    return new Response(JSON.stringify(data), { status: 200});
  } catch (e) {
    return new Response(null, {status: 500})
  }
}
