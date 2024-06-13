import { Heading } from "@sextival/ui/heading";
import Image from "next/image";
import Link from "next/link";

export const About = () => (
  <section className="text-xl relative">
    <div className="lg:w-3/4 pt-4 lg:pt-0 bg-brand-lilac backdrop-blur-md bg-opacity-20 flex flex-col gap-4 leading-tight">
      <Heading order={2} className="text-brand-red text-xl lg:text-4xl">
        SEX-CHE?
      </Heading>

      <p>
        Nel 2022, in Liguria, nell&apos;area geografica con il più alto tasso di
        anzianità di tutta Europa, la nostra associazione, Nassa Rapallo, ha
        deciso di mettere in piedi la prima edizione del
        <strong>Sextival</strong>, il festival dell&apos;educazione e della
        salute sessuale.
      </p>

      <p>
        La struttura è semplice: due giorni di workshop, seminari e interventi
        riguardanti le tematiche di salute ed educazione sessuale, in un
        ambiente divertente, piacevole e aggregativo, capace di stimolare una
        socialità genuina tra persone con bagagli culturali ed esperienziali
        differenti, anche grazie a tanto cibo locale e musica dal vivo.
      </p>

      <p>
        Oh, un <strong>successo</strong>.
      </p>

      <p>
        Il Sextival si è configurato come uno degli eventi di più forte impatto
        nella storia recente del nostro territorio.
      </p>

      <p>
        Al nostro festival hanno partecipato attivistə, divulgatorə e
        professionistə incredibili - per citare alcuni nomi, ci hanno raggiunto
        Daphne Bohemién, Iacopo Melio, Nicola Macchione, Maximiliano Ulivieri e
        tantə tantə altrə - che ci hanno raccontato l&apos;importanza
        dell’educazione alla sessualità attraverso le loro competenze ed
        esperienze individuali. Diritti sessuali delle persone con disabilità,
        il rapporto fra queerness e fede, malattie invisibilizzate, parafilie,
        feticci, omogenitorialità… Le tematiche trattate sono state moltissime,
        e per avere un quadro più specifico di che cosa abbiamo costruito
        l&apos;anno scorso, puoi trovare tutte le informazioni{" "}
        <Link href="/edizioni/2022">in questa sezione</Link>.
      </p>
    </div>
    <div className="absolute right-0 top-[-30%] lg:top-[-15%] lg:rotate-45  z-[-2]">
      <Image
        src="https://pub-017f84a06d12468b8456a49acac6a458.r2.dev/blob/13.png"
        alt="blob2"
        loading="lazy"
        width={400}
        height={400}
      />
    </div>
  </section>
);
