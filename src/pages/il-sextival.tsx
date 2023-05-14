import { QuoteIcon } from "@sextival/components/icon";
import { Callout } from "@sextival/ui/callout";
import { Heading } from "@sextival/ui/heading";
import { Page } from "@sextival/ui/page";
import { Spacer } from "@sextival/ui/spacer";
import Image from "next/image";
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
        <div className="lg:w-3/4 flex flex-col gap-1 leading-tight ">
          <p>
            Come potreste immaginarvi dal nome dell&apos;evento, il nostro
            obiettivo è parlare di <strong>sesso</strong>.
          </p>

          <p>
            <i>S e s s o</i>. Una parola forse spaventosa, sicuramente confusa,
            nebulosa.
          </p>

          <p>
            Vogliamo parlare di oscenità, insomma.
          </p>

          <p>
            Ma più precisamente, vogliamo parlare di{" "}
            <strong>sessualità</strong>, a 360°.
          </p>

          <p>
            Prima di iniziare però, dobbiamo partire dalle basi. Come si
            definisce la sessualità?
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
      <p>
        Queste parole, che possono risultare sconvolgenti per alcunə,
        illuminanti per altrə, non sono l&apos;espressione del pensiero di una
        parte politica o di qualcunə che ha scelto di stare dalla parte
        “progressista” dei diritti civili, ma vengono da un&apos;ente che fa da
        riferimento scientifico per tutti i paesi aderenti
        all&apos;Organizzazione delle Nazioni Unite: l&apos;Organizzazione
        Mondiale della Sanità (OMS).
      </p>
      <p>
        Spesso si tratta la tematica della sessualità come fosse una questione
        di opinione, se non addirittura come un tema che possa restare non
        discusso, non dibattuto, nascosto sotto ad un tappeto di timore e
        pregiudizio. In realtà, la ricerca scientifica sulla salute sessuale ci
        ha dato risposte chiare su tantissime tematiche, se pur il lavoro da
        fare sia ancora tanto.
      </p>

      <p>
        E l&apos;ignoranza di queste conoscenze, dilagante in tutte le fasce
        anagrafiche della popolazione, crea danni a volte irreparabili, per sé e
        per lə altrə. Per questo vogliamo lottare affinché l&apos;educazione
        sessuale si tramuti in un diritto garantito alle persone cittadine di
        qualsiasi paese.
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
  <section className="flex flex-col gap-2 text-lg lg:w-4/5">
    <Heading order={2} className="text-sex-red-6 text-xl lg:text-4xl">
      CHE COS&apos;È IL SEXTIVAL
    </Heading>

    <p>
      Il{"   "}<strong>Sextival</strong>{" "}
      è un evento, ideato dall&apos;associazione rapallese Nassa Rapallo, volto
      a creare dibattito, informazione e aggregazione attorno ai problemi e alle
      questioni relative alla salute ed educazione sessuale. Rifacendoci alle
      linee guida dell&apos;Organizzazione Mondiale della Sanità (OMS), il
      nostro obiettivo è quello di creare coscienza popolare attorno a queste
      tematiche, anche sottolineando le lacune istituzionali nel nostro
      territorio e paese e riflettendo su come esse possano essere colmate; il
      desiderio è quello di avvicinarci agli standard mondiali di salute
      sessuale (sanciti dall&apos;Agenda 2030 per lo sviluppo sostenibile) e il
      rispetto dei relativi diritti sessuali.
    </p>

    <p>
      L’obiettivo è <strong>duplice</strong>
      : da una parte si intende dare voce alle realtà italiane e, ancor più, del
      territorio ligure che già si occupano del tema della salute sessuale, che
      siano esse associazioni, educatorə, rappresentanti della sanità pubblica,
      artistə e liberə professionistə; dall&apos;altra, si vuole organizzare un
      evento che possa essere divertente, piacevole e aggregativo, in modo da
      stimolare una socialità genuina tra persone con bagagli culturali ed
      esperienziali differenti, attraverso l&apos;organizzazione di workshop,
      musica dal vivo, spettacoli di intrattenimento e momenti di convivialità.
    </p>
  </section>
);

const Sextival2023Info = () => (
  <section className="flex flex-col gap-2 text-lg lg:text-xl lg:w-4/5">
    <Heading order={2} className="text-sex-red-6 text-xl lg:text-4xl">
      Dai, figo. Ma DOVE e QUANDO?
    </Heading>

    <p>
      La seconda edizione del Sextival si svolgerà a{" "}
      <strong>Rapallo (GE)</strong>, a San Pietro, in due giornate{" "}
      <strong>(17 e 18 giugno 2023)</strong>, dove creeremo un ambiente di
      discussione aperto, non giudicante, sicuro ed inclusivo, sia per coloro a
      cui il tema risulti essere completamente nuovo, sia per chi, per motivi di
      lavoro o di vita personale, ha già a cuore molte o alcune delle tematiche
      del Sextival.
    </p>
  </section>
);

export default Sextival;
