import Link from "next/link";

import { useFetch } from "@sextival/hooks";
import { guest as mappingGuest } from "@sextival/server/mappings/";
import { Guest as IGuest } from "@sextival/server/types";
import { Avatar } from "@sextival/ui/avatar/avatar.ui";
import { getInitials } from "@sextival/utils";
import { InfoIcon } from "@sextival/components/icon";
import { Text } from "@sextival/components/skeleton";

interface Props {
  guest_ids: string[];
}

export const ModalGuests = ({ guest_ids }: Props) => {
  return (
    <div className="mt-2 flex flex-col gap-2">
      {guest_ids.map((guest) => (
        <Guest key={guest} id={guest} />
      ))}
    </div>
  );
};

const Guest = ({ id }: { id: string }) => {
  const guest = useFetch<Partial<IGuest> | undefined>(
    `/api/schedule/${id}`,
    mappingGuest,
  );

  return (
    <div className="flex items-center gap-2 lg:justify-between">
      <div className="flex gap-4 items-center">
        <Avatar
          img={guest.data?.cover}
          alt={getInitials(guest.data?.name)}
          className="w-[50px] h-[50px]"
        />
        <span>
          {guest.data && guest.data.name ? guest.data.name : <Text />}
        </span>
      </div>
      <Link href="/edizioni/2023/ospiti">
        <InfoIcon className="cursor-pointer" />
      </Link>
    </div>
  );
};
