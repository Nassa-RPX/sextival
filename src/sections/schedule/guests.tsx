import { useFetch } from "@sextival/hooks";
import { guest as guestMapping } from "@sextival/server/mappings";
import { Guest as IGuest } from "@sextival/server/types";
import { Avatar } from "@sextival/ui/avatar/avatar.ui";
import { getInitials } from "@sextival/utils";

interface Props {
  guest_ids: string[];
  onClick?: (ids: string[]) => void;
}

export const Guests = ({ guest_ids, onClick }: Props) => {
  return (
    <div
      className="mt-4 flex cursor-pointer"
      onClick={() => onClick && onClick(guest_ids)}
    >
      {guest_ids.map((guest, i) => (
        <Guest key={guest} id={guest} isFirst={i === 0} />
      ))}
    </div>
  );
};

const Guest = ({ id, isFirst }: { id: string; isFirst: boolean }) => {
  const guest = useFetch<Partial<IGuest> | undefined>(
    `/api/schedule/${id}`,
    guestMapping,
  );

  return (
    <Avatar
      img={guest.data?.cover}
      alt={getInitials(guest.data?.name)}
      isFirst={isFirst}
      isLoading={!guest || !guest.data}
    />
  );
};
