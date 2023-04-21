import { TAGLINE } from "@sextival/data";
import { Section } from "@sextival/ui/section";
import { TextLoop } from "@sextival/components/text-loop";
import * as Card from "./card.component";
import { GroupIcon, NetIcon } from "@sextival/components/icon";

export const SextivalIs = () => {
  return (
    <Section className="text-sex-blue">
      <h1 className="text-4xl lg:text-[80px] font-bold lg:text-center text-sex-red-4">
        SEXTIVAL È
      </h1>

      <div className="relative mt-2 lg:mt-4 w-full min-h-[40px] lg:min-h-[80px] flex lg:justify-center items-center">
        <TextLoop
          texts={TAGLINE}
          className="absolute text-4xl lg:text-[80px] font-bold bg-sex-gradient-text text-transparent bg-clip-text"
        />
      </div>

      <div className="mt-4 lg:w-4/5 mx-auto lg:text-center text-xl lg:text-3xl">
        Il <strong>Sextival</strong>{" "}
        è un evento volto a creare dibattito, informazione e aggregazione
        attorno ai problemi e alle questioni relative alla salute sessuale.
      </div>

      <div className="mt-4 lg:w-4/5 mx-auto lg:text-center text-xl lg:text-3xl">
        Rifacendosi alle linee guida dell’Organizzazione Mondiale della Sanità
        (OMS), vuole colmare il divario tra la realtà del nostro territorio e
        l’attuale definizione di salute sessuale e i relativi diritti sessuali.
      </div>

      <div className="mt-4 w-full lg:text-center text-xl lg:text-3xl font-bold text-sex-red-4">
        Il nostro è un obiettivo duplice
      </div>

      <div className="mt-6 w-full flex flex-col lg:flex-row lg:justify-between gap-4 lg:gap-12">
        <Card.Root className="py-4 bg-sex-red-2 bg-opacity-30 items-center">
          <Card.Icon>
            <NetIcon className="text-sex-red-2 h-8 w-8 lg:h-12 lg:w-12" />
          </Card.Icon>
          <Card.Title className="text-sex-red-4 text-2xl lg:text-3xl">
            Rete
          </Card.Title>
          <Card.Body className="mt-2 text-md lg:text-xl lg:w-3/4 px-4 lg:px-0 mx-auto text-center leading-snug">
            dare voce alle realtà italiane e, ancor più, del nostro territorio
            che già si occupano del tema della salute sessuale
          </Card.Body>
        </Card.Root>

        <Card.Root className="py-4 bg-sex-red-2 bg-opacity-30 items-center">
          <Card.Icon>
            <GroupIcon className="text-sex-red-2 h-8 w-8 lg:h-12 lg:w-12" />
          </Card.Icon>
          <Card.Title className="text-sex-red-4 text-2xl lg:text-3xl">
            Aggregazione
          </Card.Title>
          <Card.Body className="mt-2 text-md lg:text-xl lg:w-3/4 px-4 lg:px-0 mx-auto text-center leading-snug">
            un evento che possa essere piacevole e aggregativo per stimolare una
            socialità genuina tra persone con bagagli esperienziali differenti
          </Card.Body>
        </Card.Root>
      </div>
    </Section>
  );
};
