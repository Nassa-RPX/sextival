import { QuoteIcon } from "@sextival/components/icon";
import { Callout } from "@sextival/ui/callout";
import Image from "next/image";

export const Tagline = () => (
  <section>
    <div className="text-lg flex flex-col lg:flex-row">
      <div className="lg:rotate-[30deg] z-[-2]">
        <Image
          alt="blob2"
          src="https://pub-017f84a06d12468b8456a49acac6a458.r2.dev/blob/10.png"
          width={500}
          height={250}
          style={{ objectFit: "contain" }}
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
