import { LinkIcon } from "@sextival/components/icon";
import { getServices } from "@sextival/server/lib";
import { Service } from "@sextival/server/types";
import { Page } from "@sextival/ui/page";
import { Spacer } from "@sextival/ui/spacer";
import { groupBy } from "@sextival/utils";
import clsx from "clsx";
import { NextPage } from "next";
import Link from "next/link";
import { useMemo, useState } from "react";

const Servizi: NextPage<{ services: Array<Service> }> = (
  { services },
) => {
  const groupedServices = useMemo(() => {
    return groupBy(services, (s) => s.zone);
  }, [services]);

  const [zoneSelected, setZoneSeletected] = useState<string | undefined>(
    Object.keys(groupedServices)[0],
  );

  return (
    <Page title="SERVIZI">
      <div className="flex border-2 border-sex-red-8 bg-sex-red-4 rounded-md overflow-x-auto whitespace-nowrap">
        {Object.keys(groupedServices).map((zone, id) => (
          <span
            key={id}
            className={clsx(
              "flex-1 p-4 transition-colors text-center border-sex-red-8 border-l font-bold text-sex-red-10 cursor-pointer",
              id === 0 && "border-l-0",
              zoneSelected === zone && "bg-sex-red-8",
            )}
            onClick={() => setZoneSeletected(zone)}
          >
            {zone}
          </span>
        ))}
      </div>

      <Spacer type="y" dimension="sm" />

      <div className="bg-sex-red-4 rounded-md">
        {zoneSelected && groupedServices[zoneSelected] &&
          groupedServices[zoneSelected]!.map((service, id) => (
            <div
              className={clsx(
                "flex border-t-2 border-t-sex-red-8 border-opacity-40 p-4 gap-2",
                id === 0 && "!border-t-0",
              )}
              key={service.id}
            >
              <Link href={`/cassetta/servizi/${service.id}`}>
                <a className="flex gap-2 font-bold ">
                  {service.name}

                  <LinkIcon />
                </a>
              </Link>
            </div>
          ))}
      </div>
    </Page>
  );
};

export async function getServerSideProps() {
  // Get the posts

  const services = await getServices();

  // Return the result
  return {
    props: {
      services,
    },
  };
}

export default Servizi;
