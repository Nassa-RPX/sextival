import { QueryDatabaseResponse } from "@notionhq/client/build/src/api-endpoints";
import { getGuests } from "@sextival/server/lib";
import { Guest } from "@sextival/server/types";
import { Heading } from "@sextival/ui/heading";
import { Page } from "@sextival/ui/page";
import { NextPage } from "next";
import Image from "next/image";

const Guests: NextPage<
  { guests: Array<Guest>; schedule: QueryDatabaseResponse }
> = (
  { guests },
) => {
  return (
    <Page title="Lə OSPITə">
      <div className="grid gap-8 flex-wrap md:grid-cols-2 xl:grid-cols-3">
        {guests.map((g) => (
          <div
            key={g.name}
            className="flex-1 flex flex-col gap-6 bg-sex-blue-2 shadow-sm shadow-shadow-blue bg-opacity-20 p-8 rounded-md"
          >
            <div className="flex gap-6 items-center ">
              <div className="relative w-[60px] h-[60px] rounded-xl">
                <Image
                  alt={g.name}
                  src={g.cover}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
              <Heading order={2} className="text-xl leading-tight">
                {g.name}
              </Heading>
            </div>
            <p className="text-md leading-tight ">
              {g.description}
            </p>
          </div>
        ))}
      </div>
    </Page>
  );
};

export async function getServerSideProps() {
  // Get the posts
  const guests = await getGuests();
  // Return the result
  return {
    props: {
      guests,
    },
  };
}
export default Guests;
