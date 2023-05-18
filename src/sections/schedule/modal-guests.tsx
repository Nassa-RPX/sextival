import { useFetch } from "@sextival/hooks";
import { mapping } from "@sextival/server/mappings/mapping-guest";
import { Guest as IGuest } from "@sextival/server/types";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

interface Props {
  guest_ids: string[];
}

export const ModalGuests = ({ guest_ids }: Props) => {
  return (
    <div className="mt-2 flex flex-col gap-2">
      {guest_ids.map((guest) => <Guest key={guest} id={guest} />)}
    </div>
  );
};

const Guest = ({ id }: { id: string }) => {
  const guest = useFetch<Partial<IGuest> | undefined>(
    `/api/schedule/${id}`,
    mapping,
  );

  return (
    <>
      {guest && guest.data
        ? (
          <Link href="/2023/ospiti">
            <div className="flex gap-4 items-center cursor-pointer">
              <div
                className={clsx(
                  "w-[50px] h-[50px] rounded-full relative border border-sex-red-4",
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

              <span className="text-md lg:text-xl">{guest.data.name}</span>
            </div>
          </Link>
        )
        : <div className="w-[50px] h-[50px] rounded-full bg-black" />}
    </>
  );
};
