import { QueryDatabaseResponse } from "@notionhq/client/build/src/api-endpoints";
import { getGuests, getSchedule } from "@sextival/server/lib";
import { Page } from "@sextival/ui/page";
import { NextPage } from "next";

type Response = QueryDatabaseResponse;

const Guests: NextPage<{ guests: Response; schedule: Response }> = (
  { guests, schedule },
) => {
  console.log("guests", guests);
  console.log("schedule", schedule);

  return (
    <Page title="Lə Ospitə">
      <h1 className="text-xl">OSPITI</h1>
      <h1 className="text-xl">PROGRAMMA</h1>
    </Page>
  );
};

export async function getServerSideProps() {
  // Get the posts
  const guests = await getGuests();
  const schedule = await getSchedule();

  // Return the result
  return {
    props: {
      guests,
      schedule,
    },
  };
}
export default Guests;
