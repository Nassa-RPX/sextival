import { useFetch } from "@sextival/hooks";
import { mapping } from "@sextival/server/mappings/mapping-guest";
import { Guest as IGuest } from "@sextival/server/types";
import clsx from "clsx";
import Image from "next/image";

interface Props {
  guest_ids: string[];
  onClick?: (ids: string[]) => void;
}

export const Guests = ({ guest_ids, onClick }: Props) => {
  return (
    <div
      className="mt-2 flex cursor-pointer"
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
    mapping,
  );

  return (
    <>
      {guest && guest.data
        ? (
          <div
            className={clsx(
              "w-[40px] h-[40px] rounded-full relative border border-sex-red-4",
              !isFirst && " ml-[-20px]",
            )}
          >
            {guest.data.cover && (
              <Image
                src={guest.data.cover}
                layout="fill"
                className="rounded-full"
              />
            )}
          </div>
        )
        : <div className="w-[40px] h-[40px] rounded-full bg-black" />}
    </>
  );
};
