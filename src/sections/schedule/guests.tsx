import { Guest as IGuest } from "@sextival/server/types";
import { Avatar } from "@sextival/ui/avatar/avatar.ui";
import { getInitials } from "@sextival/utils";

interface Props {
  guests: Array<IGuest>;
}

export const Guests = ({ guests }: Props) => {
  return (
    <div className="max-w-full overflow-x-scroll flex flex-wrap gap-2">
      {guests.map((guest) => (
        <Guest key={guest.id} guest={guest} />
      ))}
    </div>
  );
};

const Guest = ({ guest }: { guest: IGuest }) => {
  return (
    <div className="inline-block">
      <div className=" flex-grow flex gap-2 items-center">
        <Avatar img={guest.cover} alt={getInitials(guest.name)} />
        <span className="text-sm">{guest.name}</span>
      </div>
    </div>
  );
};
