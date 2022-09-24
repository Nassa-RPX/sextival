import { MegaphoneIcon } from "./../components/icon/megaphone.icon";
import { GridData } from "@sextival/components/grid/types";
import { BakerIcon } from "@sextival/components/icon/baker.icon";
import { BulbIcon } from "@sextival/components/icon/bulb.icon";
import { PuzzleIcon } from "@sextival/components/icon/puzzle.icon";

const NassaData: Array<GridData> = [
  {
    icon: BakerIcon,
    title: "Incontro ed ascolto",
    description:
      "Creare occasioni di incontro e ascolto è il punto di partenza per approfondire il legame tra i giovani e il loro territorio",
  },
  {
    icon: BulbIcon,
    title: "Produrre cambiamento",
    description:
      "L’incontro e l’ascolto reciproco rappresentano la base per raccogliere le idee e produrre un cambiamento significativo nella comunità",
  },
  {
    icon: MegaphoneIcon,
    title: "Partecipazione attiva",
    description:
      "Il confronto tra le voci dei giovani è una forma di partecipazione attiva alla vita sociale, politica e culturale della città come l’insieme di tutto ciò che appartiene allo spazio della vita comune, cioè alla vita della città e dei suoi cittadini.",
  },
  {
    icon: PuzzleIcon,
    title: "Giovani e amministrazioni",
    description:
      "Il dialogo tra giovani e amministrazioni del territorio costituisce uno strumento per la promozione di un cambiamento e per l’apertura verso nuove modalità di vivere la propria città.",
  },
];

export default NassaData;
