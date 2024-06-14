import { getGuests } from "@sextival/server/lib/guest/get-guests-2024";
import { Page } from "@sextival/ui/page";

const Ospiti = async () => {
  const guests = await getGuests();

  return (
    <Page title="OSPITI">
      <section className="w-full grid gri-cols-1 md:grid-cols-4 gap-4 text-brand-blue">
        {guests.map((guest) => (
          <div
            key={guest.id}
            className="bg-white bg-opacity-40 border border-white backdrop-blur-md rounded-lg shadow-md flex flex-col p-6 gap-2 mb-4"
          >
            <h2 className="font-bold text-lg">{guest.name}</h2>
            <p className="text-sm max-h-[200px] overflow-y-scroll text-black">
              {guest.description}
            </p>
          </div>
        ))}
      </section>
    </Page>
  );
};

export default Ospiti;
