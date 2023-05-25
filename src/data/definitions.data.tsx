import { AccordionData } from "@sextival/components/accordion/accordion.types";


export const DescriptionDirittiSessuali = () => (
  <div className="flex flex-col gap-4">
    <p>
      Vi è un crescente consenso sul fatto che la salute sessuale non possa
      essere raggiunta e mantenuta senza il rispetto e la protezione di alcuni
      diritti umani. L'applicazione dei diritti umani esistenti alla sessualità
      e alla salute sessuale costituisce i diritti sessuali. I diritti sessuali
      tutelano il diritto di tutte le persone a realizzare ed esprimere la
      propria sessualità e a godere della salute sessuale, nel rispetto dei
      diritti altrui e in un quadro di protezione contro la discriminazione".
      (OMS, 2006a, aggiornato al 2010)
    </p>

    <p>
      La realizzazione della salute sessuale è legata alla misura in cui i
      diritti umani sono rispettati, protetti e soddisfatti. I diritti sessuali
      comprendono alcuni diritti umani già riconosciuti nei documenti
      internazionali e regionali sui diritti umani, in altri documenti di
      consenso e nelle leggi nazionali.
    </p>

    <ul className="flex flex-col gap-2 list-disc">
      <li>Il diritto all'uguaglianza e alla non discriminazione</li>
      <li>
        Il diritto di essere liberi dalla tortura o da trattamenti o punizioni
        crudeli, inumani o degradanti
      </li>
      <li>Il diritto alla privacy</li>
      <li>
        Il diritto al più alto standard di salute raggiungibile (compresa la
        salute sessuale) e alla sicurezza sociale
      </li>
      <li>
        Il diritto di sposarsi e di fondare una famiglia e di contrarre
        matrimonio con il libero e pieno consenso dei coniugi intenzionati, e
        all'uguaglianza nel matrimonio e al suo scioglimento
      </li>
      <li>Il diritto di decidere il numero e la distanza dei propri figli</li>
      <li>Il diritto all'informazione e all'istruzione</li>
      <li>Il diritto alla libertà di opinione e di espressione, e</li>
      <li>
        Il diritto a un rimedio efficace per le violazioni dei diritti
        fondamentali.
      </li>
    </ul>
  </div>
);

export const DEFINITIONS: Array<AccordionData> = [
  {
    label: "Sesso",
    description:
      "Con il termine sesso si riferisce alle caratteristiche biologiche che definiscono gli esseri umani come femmine o maschi. Sebbene questi gruppi di caratteristiche biologiche non si escludano a vicenda, in quanto esistono individui che li possiedono entrambi, essi tendono a differenziare gli esseri umani in maschi e femmine. Nell'uso generale in molte lingue, il termine sesso è spesso usato per indicare 'attività sessuale', ma per scopi tecnici nel contesto delle discussioni sulla sessualità e sulla salute sessuale, si preferisce la definizione di cui sopra.",
  },
  {
    label: "Salute Sessuale",
    description:
      "La salute sessuale è uno stato di benessere fisico, emotivo, mentale e sociale in relazione alla sessualità; non è semplicemente l'assenza di malattia, disfunzione o infermità. La salute sessuale richiede un approccio positivo e rispettoso alla sessualità e alle relazioni sessuali, così come la possibilità di avere esperienze sessuali piacevoli e sicure, senza coercizione, discriminazione e violenza. Affinché la salute sessuale sia raggiunta e mantenuta, i diritti sessuali di tutte le persone devono essere rispettati, protetti e soddisfatti.",
  },
  {
    label: "Sessualità",
    description:
      "La sessualità è un aspetto centrale dell'essere umano per tutta la vita e comprende sesso, identità e ruoli di genere, orientamento sessuale, erotismo, piacere, intimità e riproduzione. La sessualità è sperimentata ed espressa in pensieri, fantasie, desideri, credenze, atteggiamenti, valori, comportamenti, pratiche, ruoli e relazioni. Se la sessualità può includere tutte queste dimensioni, non tutte vengono sempre sperimentate o espresse. La sessualità è influenzata dall'interazione di fattori biologici, psicologici, sociali, economici, politici, culturali, etici, legali, storici, religiosi e spirituali.",
  },
  {
    label: "Diritti Sessuali",
    description: <DescriptionDirittiSessuali />,
  },
];

