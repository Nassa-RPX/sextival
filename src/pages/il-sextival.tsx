import { Page } from "@sextival/ui/page";
import { Spacer } from "@sextival/ui/spacer";

const Sextival = () => {
  return (
    <Page
      title={"Il Sextival"}
    >
      <SextivalTagline />
      <Spacer type="y" dimension="md" />
      <SextivalAbout />
    </Page>
  );
};

const SextivalTagline = () => (
  <div className="text-center italic text-xl">
    <p>
      “La <strong>sessualità</strong> è un aspetto centrale dell'essere umano per tutta la vita e
      comprende sesso, identità e ruoli di genere, orientamento sessuale,
      erotismo, piacere, intimità e riproduzione. La sessualità è sperimentata
      ed espressa in pensieri, fantasie, desideri, credenze, atteggiamenti,
      valori, comportamenti, pratiche, ruoli e relazioni.
    </p>

    <p className="mt-2">
      Se la sessualità può includere tutte queste dimensioni, non tutte vengono
      sempre sperimentate o espresse. La sessualità è influenzata
      dall'interazione di fattori <strong>biologici, psicologici, sociali, economici,
      politici, culturali, etici, legali, storici, religiosi e spirituali.</strong> ” </p>
  </div>
);

const SextivalAbout = () => (
  <div className="text-xl">
    <p>
      Il Sextival è un evento volto a creare dibattito, informazione e
      aggregazione attorno ai problemi e alle questioni relative alla salute
      sessuale. Rifacendosi alle linee guida dell’Organizzazione Mondiale della
      Sanità (OMS), vuole colmare il divario tra la realtà del nostro territorio
      e l’attuale definizione di salute sessuale e i relativi diritti sessuali.
    </p>
    <Spacer type="y" dimension="sm" />
    <p className="pt-2">
      L’evento si svolgerà a Rapallo (GE), a San Pietro, in due giornate (25 e
      26 giugno 2022) in cui creare un ambiente di discussione aperto, non
      giudicante, sicuro ed inclusivo, sia per coloro a cui il tema risulti
      essere completamente nuovo, sia per chi, per motivi di lavoro o di vita
      personale, ha già a cuore molte o alcune delle tematiche del Sextival.
    </p>
    <p className="pt-2">
      L’obiettivo è duplice: da una parte si intende dare voce alle realtà
      italiane e, ancor più, del nostro territorio che già si occupano del tema
      della salute sessuale, che siano esse associazioni, educatrici ed
      educatori, rappresentanti della sanità pubblica, artisti e liberi
      professionisti; dall’altra, si vuole organizzare un evento che possa
      essere divertente, piacevole e aggregativo, non solamente scolastico o
      seminariale, in modo da stimolare una socialità genuina tra persone con
      bagagli culturali ed esperienziali differenti attraverso l’organizzazione
      di workshop, musica dal vivo, spettacoli di intrattenimento e momenti di
      convivialità.
    </p>
  </div>
);

export default Sextival;
