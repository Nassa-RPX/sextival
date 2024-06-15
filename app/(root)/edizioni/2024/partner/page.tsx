import { PARTNER } from "@sextival/data";
import { Page } from "@sextival/ui/page";
import Image from "next/image";

const Partner = () => {
  return (
    <Page title="PARTNER">
      <section className="flex flex-col gap-4 w-[80%] mx-auto">
        {PARTNER.map((partner) => (
          <div
            key={partner.name}
            className="bg-white bg-opacity-30 backdrop-blur-md border border-white p-6 rounded-md shadow-sm text-brand-blue flex w-full gap-4 "
          >
            <Image
              src={partner.logo}
              alt={`Logo esercente: ${partner.name}`}
              width={200}
              height={200}
              className="rounded-md shadow-md"
            />

            <div className="flex flex-col gap-2 h-full">
              <h2 className="text-xl font-bold ">{partner.name}</h2>
              <p className="mr-[5%] text-black">{partner.description}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="flex flex-col gap-4 mt-8 mx-auto">
        <span className="text-2xl font-semibold">
          Un grande ringraziamento al principale sostenitore del Sextival:
        </span>
        <Image
          src={"/partner/sanpaolo.png"}
          width={300}
          height={125}
          alt="Logo Fondazione Compagnia di San Paolo"
          className="mx-auto"
        />
      </section>
    </Page>
  );
};

export default Partner;
