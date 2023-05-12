import { NextPage } from "next";

import { Page } from "@sextival/ui/page";
import { Section } from "@sextival/ui/section";
import { Heading } from "@sextival/ui/heading";

import { Grid } from "@sextival/sections/2022/grid";
import { Gallery } from "@sextival/sections/2022/gallery";
import { Sponsor } from "@sextival/sections/2022/sponsor";

const Edizione2022: NextPage = () => {
  return (
    <Page title="EDIZIONE 2022" className="gap-2">
      <Grid />

      <Section className="gap-1 lg:w-3/4 lg:text-lg">
        <Heading order={2} className="text-2xl">COSA ABBIAMO IMPARATO</Heading>

        <div className="flex flex-col gap-4">
          <p>
            Alzi la mano chi di voi avrebbe mai immaginato di rispondere a “Che
            fai questo weekend?” con “Vado a un festival del sesso a Rapallo”. E
            dire che vi avevamo avvisati QUI! Ebbene, è successo davvero. In
            treno, macchina, moto, ma con coraggio anche a piedi, siamo andatɜ
            nella periferia di Rapallo per ascoltare talk sull’educazione e
            salute sessuale, mangiare, bere e stare in compagnia.
          </p>
          <p>
            Due giorni di incontri, interventi di alto livello e tanti spunti di
            riflessione organizzati dall&apos;Associazione Nassa di Rapallo.
            Ecco alcune parole chiave che racchiudono ciò di cui abbiamo
            parlato.
          </p>
        </div>
        <a
          href="https://walloutmagazine.com/quello-che-abbiamo-imparato-dal-sextival-di-rapallo/"
          className="font-bold text-sex-red-4"
        >
          Leggi il bellissimo articolo di Wall:out!
        </a>
        <span className="opacity-50 text-sm">
          Vi ruberemo l&apos;idea per i prossimi anni
        </span>
      </Section>

      <Gallery />
      <Sponsor />
    </Page>
  );
};

export default Edizione2022;
