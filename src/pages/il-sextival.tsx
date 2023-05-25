import { Accordion } from "@sextival/components/accordion";
import { QuoteIcon } from "@sextival/components/icon";
import { Callout } from "@sextival/ui/callout";
import { Heading } from "@sextival/ui/heading";
import { Page } from "@sextival/ui/page";
import { Spacer } from "@sextival/ui/spacer";
import Image from "next/image";
import Link from "next/link";
//
const Sextival = () => {
  return (
    <Page
      title={"IL SEXTIVAL"}
      className="mb-40"
    >
      <SextivalTagline />

      <Spacer type="y" dimension="md" />

      <SextivalAbout />

      <Spacer type="y" dimension="md" />
      <SextivalWhat />

      <Spacer type="y" dimension="md" />
      <Sextival2023Info />

      <Spacer type="y" dimension="lg" />
      <Accordion
        data={[{ label: "Prova", description: "weee" }, {
          label: "prova 2",
          description: "weee2",
        }]}
      />
    </Page>
  );
};

const SextivalTagline = () => (
  <section>
    <div className="text-lg flex flex-col lg:flex-row">
      <div className="lg:rotate-[30deg] z-[-2]">
        <Image
          alt="blob2"
          src="https://pub-017f84a06d12468b8456a49acac6a458.r2.dev/blob/10.png"
          width={500}
          height={250}
          objectFit="contain"
          loading="lazy"
        />
      </div>

      <div className="flex-1 ">
        <div className="lg:w-3/4 flex flex-col gap-2 leading-tight ">
          <p>
            <strong>Sesso</strong>.{" "}
            <i>Sessualità</i>. Piacere. Godere. Erotismo. Ruoli e identità di
            genere. Masturbazione. Malattie sessualmente trasmissibili.
            Poliamore. AIDS.
          </p>
          <p>
            Per moltə queste parole possono essere promotrici di disturbo. Per
            altrə, possono essere motivo di una qualche baraonda interiore. Il
            motivo è semplice: di sesso, in pubblico, non se ne parla. Di sesso,
            di piacere, di erotismo, se ne parla di nascosto, in privato: come
            se ci fosse qualcosa di cui vergognarsi. Sui palchi, di informazione
            sessuale non se ne parla mai. Ed è cosi che si diffonde una
            pericolosa ignoranza, che va combattuta ad ogni costo.
          </p>
          <p>
            E il <strong>Sextixal</strong> ha fatto, e farà, esattamente questo.
          </p>
        </div>
      </div>
    </div>

    <Callout bg="blue" className="lg:w-3/4 lg:mx-auto italic">
      <QuoteIcon className="h-8 w-8 lg:h-12 lg:w-12" />
      <p>
        “La <strong>sessualità</strong>{" "}
        è un aspetto centrale dell&apos;essere umano per tutta la vita e
        comprende sesso, identità e ruoli di genere, orientamento sessuale,
        erotismo, piacere, intimità e riproduzione. La sessualità è sperimentata
        ed espressa in pensieri, fantasie, desideri, credenze, atteggiamenti,
        valori, comportamenti, pratiche, ruoli e relazioni.
      </p>

      <p className="mt-2">
        Se la sessualità può includere tutte queste dimensioni, non tutte
        vengono sempre sperimentate o espresse. La sessualità è influenzata
        dall&apos;interazione di fattori{" "}
        <strong>
          biologici, psicologici, sociali, economici, politici, culturali,
          etici, legali, storici, religiosi e spirituali.
        </strong>{" "}
        ”
      </p>
      <QuoteIcon className="h-8 w-8 lg:h-12 lg:w-12 ml-auto" />
    </Callout>
  </section>
);

const SextivalAbout = () => (
  <section className="text-xl relative">
    <div className="lg:w-3/4 pt-4 lg:pt-0 bg-sex-blue-0 backdrop-blur-md bg-opacity-60 flex flex-col gap-4 leading-tight">
      <Heading order={2} className="text-sex-red-6 text-xl lg:text-4xl">
        SEX-CHE?
      </Heading>

      <p>
        Nel 2022, in Liguria, nell&apos;area geografica con il più alto tasso di
        anzianità di tutta Europa, la nostra associazione, Nassa Rapallo, ha
        deciso di mettere in piedi la prima edizione del<strong>
          Sextival
        </strong>, il festival dell&apos;educazione e della salute sessuale.
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

const SextivalWhat = () => (
  <section className="flex flex-col gap-2 text-lg lg:text-xl lg:w-4/5">
    <Heading order={2} className="text-sex-red-6 text-xl lg:text-4xl">
      QUALI SONO GLI OBIETTIVI
    </Heading>

    <p>
      Il nostro obiettivo primario è quello di creare cultura intorno alla
      tematica della sessualità, seguendo al più possibile le definizioni e i
      protocolli offerti dall&apos;Organizzazione Mondiale della Sanità, e
      perseguendo gli obiettivi dell&apos;Agenda 2030 per lo sviluppo
      sostenibile – che sì, comprende pure la salute sessuale. Se non lo sapevi,
      ecco cosa ci stiamo a fare qui.
    </p>

    <p>
      In secondo luogo, il nostro desiderio è quello di creare una rete di
      associazioni, enti e personalità dedite all&apos;argomento, tentando di
      colmare alcune delle gravi lacune delle nostre istituzioni nel garantire
      alla sua cittadinanza livelli soddisfacenti di salute sessuale. Grazie a
      queste collaborazioni, potremo creare progetti a lungo termine che vadano
      a beneficio di tutto il territorio, per tutte le persone.
    </p>
  </section>
);

const Sextival2023Info = () => (
  <section className="flex flex-col gap-2 text-lg lg:text-xl lg:w-4/5">
    <Heading order={2} className="text-sex-red-6 text-xl lg:text-4xl">
      UN PO&apos; DI DEFINIZIONI
    </Heading>

    <p>
      Le parole citate all&apos;inizio di questa pagina, come abbiamo detto,
      possono risultare sconvolgenti per alcunə, ma anche illuminanti per altrə.
      Il punto che a noi sta a cure è che molte delle loro definizioni non sono
      labili come le potremmo pensare. Le definizioni di sesso, sessualità,
      diritti sessuali e salute sessuale non sono espressione del pensiero di
      una parte politica o di chi ha scelto di stare dalla parte “progressista”
      dei diritti civili, ma vengono da un ente che fa da riferimento
      scientifico per tutti i paesi aderenti all&apos;Organizzazione delle
      Nazioni Unite: l&apos;<strong>
        Organizzazione Mondiale della Sanità
      </strong>{" "}
      (OMS).
    </p>

    <p>
      Infatti, se pur spesso si tratti la tematica della sessualità come fosse
      una questione di opinione, se non addirittura come un tema che possa
      restare non discusso, non dibattuto o nascosto sotto ad un tappeto di
      timore e pregiudizio, la ricerca scientifica sulla salute sessuale ha già
      dato, da tempo, risposte risposte molto chiare su molte di queste
      questioni, se pur il lavoro di ricerca sia ancora tanto. L&apos;ignoranza
      di queste conoscenze, dilagante in tutte le fasce anagrafiche della
      popolazione, crea danni a volte irreparabili, per sé e per lə altrə. Per
      questo vogliamo lottare affinché l&apos;<i>educazione sessuale</i>{" "}
      si tramuti in un diritto garantito alle persone cittadine di qualsiasi
      paese.
    </p>
  </section>
);

export default Sextival;
