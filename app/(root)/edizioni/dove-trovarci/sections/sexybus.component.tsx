"use client";

import clsx from "clsx";
import { useMemo, useState } from "react";

import { LOCATION } from "@sextival/data";
import { DefaultProps } from "@sextival/types";

export const Sexybus = () => {
  const [selected, setSelected] = useState<1 | 2>(1);

  const location = useMemo(() => LOCATION.SEXYBUS[selected - 1], [selected]);

  return (
    <section className="flex flex-col gap-8 items-center pb-4">
      <h1 className="text-6xl font-bold text-brand-blue">SEXYBUS</h1>

      <p className="xl:w-1/3 mx-auto text-justify">
        Il <strong>SEXYBUS</strong> é un servizio <strong>gratuito</strong>{" "}
        messo a disposizione dallo staff per portarvi al Sextival (e indietro!).
        La tratta è dalla stazione alla location dell&apos;evento. Abbiamo
        deciso alcune corse fisse, che vi riportiamo qui sotto.
      </p>

      <div className="flex gap-2">
        <TabButton selected={selected === 1} onClick={() => setSelected(1)}>
          Sabato 22
        </TabButton>

        <TabButton selected={selected === 2} onClick={() => setSelected(2)}>
          Domenica 23
        </TabButton>
      </div>
      <div className="flex flex-col gap-2 max-w-full">
        <div className="flex flex-col xl:flex-row gap-4 max-w-full">
          <div className="flex flex-col">
            <h2 className="text-xl font-bold">
              ANDATA (Stazione di Rapallo -&gt; Sextival)
            </h2>
            <Table row={location!.andata} />
          </div>
          <div className="flex flex-col">
            <h2 className="text-xl font-bold">
              RITORNO (Sextival -&gt; Stazione di Rapallo)
            </h2>
            <Table row={location!.ritorno} />
          </div>
        </div>

        <div className="mx-auto text-xs">
          *questo treno arriva fino a Sestri Levante
        </div>
      </div>

      <div className="lg:w-1/3 p-4 rounded-md bg-sex-blue-2 bg-opacity-40 ">
        OPPURE POTETE USUFRUIRE DELLE CORSE DEL GENTILISSIMO, MA MENO ROSA,{" "}
        <strong>BUS NUMERO 798</strong> info{" "}
        <a className="font-bold" href="http://www.amt.genova.it/amt/">
          amt.genova.it/amt/
        </a>
      </div>
    </section>
  );
};

const Table = ({ row }: { row: LOCATION.Col[] }) => (
  <div className="flex flex-col overflow-x-auto">
    <div className="inline-block min-w-full">
      <div className="overflow-x-auto">
        <table className="min-w-full border border-brand-rose bg-brand-rose bg-opacity-20 text-center text-sm font-light ">
          <thead className="border-b border-brand-rose bg-brand-rose text-white font-medium ">
            <tr>
              <th scope="col" className="border-r px-6 py-4 border-brand-rose">
                SEXYBUS
              </th>
              <th scope="col" className="border-r px-6 py-4 border-brand-rose">
                Treno consigliato (Levante)
              </th>
              <th scope="col" className="px-6 py-4">
                Treno consigliato (Ponente)
              </th>
            </tr>
          </thead>
          <tbody>
            {row.map((v) => (
              <tr key={v.sexybus} className="border-b border-brand-rose">
                <td className="whitespace-nowrap border-r px-6 py-4 font-medium border-brand-rose">
                  {v.sexybus}
                </td>
                <td className="whitespace-nowrap border-r px-6 py-4 border-brand-rose">
                  <span dangerouslySetInnerHTML={{ __html: v.levante }} />
                </td>

                <td className="whitespace-nowrap px-6 py-4">
                  <span dangerouslySetInnerHTML={{ __html: v.ponente }} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

interface TabButtonProps extends DefaultProps {
  selected: boolean;
  onClick: () => void;
}

const TabButton = ({ selected, onClick, children }: TabButtonProps) => (
  <div
    className={clsx(
      "p-2 rounded-md cursor-pointer text-sm font-bold border-2 border-sex-blue-2 transition-colors text-sex-blue-6",
      selected ? "bg-brand-blue text-white" : "bg-transparent text-brand-blue",
    )}
    onClick={onClick}
  >
    {children}
  </div>
);
