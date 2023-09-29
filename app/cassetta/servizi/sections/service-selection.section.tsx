"use client";
import clsx from "clsx";
import { useState } from "react";

import { Service } from "@sextival/server/types";
import { Spacer } from "@sextival/ui/spacer";
import Link from "next/link";
import { LinkIcon } from "@sextival/components/icon";

type Props = {
  groupedServices: Record<string, Service[]>;
};

export const ServiceSelection = ({ groupedServices }: Props) => {
  const [zoneSelected, setZoneSeletected] = useState<string | undefined>(
    Object.keys(groupedServices)[0],
  );

  return (
    <>
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
              <Link
                className="flex gap-2 font-bold "
                href={`/cassetta/servizi/${service.id}`}
              >
                {service.name}

                <LinkIcon />
              </Link>
            </div>
          ))}
      </div>
    </>
  );
};
