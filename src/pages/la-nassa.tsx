import { Page, Spacer } from "@sextival/components/base";
import Grid from "@sextival/components/grid";
import NassaData from "@sextival/data/nassa.data";

const Nassa = () => {
  return (
    <Page
      title="La Nassa"
      cover={{ src: "/content/home-nassa.png", alt: "La Nassa" }}
      layoutId="nassa"
    >
      <Spacer type="y" dimension="md" />
      <div className="md:flex md:justify-evenly md:items-start bg-pink gap-8">
        <p className="md:py-0 md:basis-1/2 xl:basis-1/3 text-md md:text-xl  text-justify">
          Il progetto Nassa nasce nel 2019 a <strong>Sestri Levante</strong>,
          per poi espandersi anche a <strong>Chiavari</strong> l’anno
          successivo.
        </p>

        <p className="mt-2 md:mt-0 md:py-0 md:basis-1/2 xl:basis-1/3 text-md  md:text-xl  text-justify">
          <strong>Nassa Rapallo</strong>, nata a febbraio del 2021, è l’ultima
          delle tre associazioni giovanili ad oggi attive nel Tigullio.
          costituisce un centro di vita associativa, apartitico, aconfessionale,
          a carattere volontario e democratico.
        </p>

        <p className="mt-2 md:mt-0 md:py-0 md:basis-1/2 xl:basis-1/3 text-md md:text-xl  text-justify">
          Lo scopo principale della Nassa è quello di raccogliere le esigenze
          dei giovani per costruire progetti e soluzioni che consentano di
          vivere attivamente il proprio territorio reinventando spazi e luoghi.
        </p>
      </div>

      <Spacer type="y" dimension="md" />

      <p className="md:py-0 md:mx-auto lg:mt-8 xl:w-3/4 xl:mx-auto text-2xl font-bold lg:text-center text-rose-900 leading-tight">
        La Nassa nasce dall’esigenza di trovare e costruire uno spazio in cui
        proporre, inventare, immaginare, creare e essere ascoltati.
      </p>

      <Spacer type="y" dimension="sm" />

      <p className="text-right lg:text-center ">
        A partire da questa idea originaria la nostra esperienza ci ha portato a
        capire che:
      </p>

      <Spacer type="y" dimension="bg" />

      <Grid data={NassaData} />
    </Page>
  );
};

export default Nassa;
