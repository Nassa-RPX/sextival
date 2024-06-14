import { Heading } from "@sextival/ui/heading";

export const Support = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-between gap-4 lg:gap-8">
      <div className="order-2 lg:order-1 flex flex-col gap-4 text-lg lg:-text-xl">
        <p>
          Siamo tantə, giovani, con capacità diverse e desbelinatə. Ma siam’{" "}
          <strong>misci</strong>.
        </p>

        <p>
          Il Sextival vuole prima di tutto essere una fonte di informazioni per
          chiunque, perché i diritti, anche quelli sessuali, non si pagano.
          Questo significa che chi verrà a seguire l&apos;evento dovrà poterlo
          fare gratuitamente e che lo spazio disponibile, un classico spazio da
          sagra, sia privo di barriere architettoniche. Per organizzare tutto
          questo, ci sono molte spese ad incombere minacciose sulle nostre
          ambizioni.
        </p>

        <Heading order={2} className="text-sex-red-6 text-xl lg:text-4xl">
          COME AIUTARCI
        </Heading>

        <p>
          Puoi lasciarci un contributo economico attraverso la pagina del nostro
          crowdfunding! Qualsiasi donazione sarà un bene prezioso e siamo gratə
          a tuttə coloro che decideranno di contribuire. Ovviamente, se non hai
          la possibilità economica ma desideri darci un sostegno, puoi - o devi?
          - diffondere la pagina del crowdfunding ad amicə e familiari, seguirci
          sui social, scriverci per darci dei consigli su come trovare sponsor e
          fondi aggiuntivi, o contattarci per fare da volontariə nel Sexystaff.
        </p>

        <p>
          E poi partecipate, venite a vederci. Siamo sicurə che non ve ne
          pentirete.
        </p>

        <p>
          Unisciti alla nostra giovane rivoluzione. E ricordati:
          <strong>stay sexy</strong>.
        </p>
      </div>

      <iframe
        className="order-1 lg:order-2 w-full h-[550px]"
        src="https://www.produzionidalbasso.com/projects/34843/widget"
      ></iframe>
    </section>
  );
};
