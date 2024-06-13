
import { getPage, getService } from "@sextival/server/lib";
import { Service } from "@sextival/server/types";
import { Markdown } from "@sextival/ui/markdown";
import { Page } from "@sextival/ui/page";

type Params = {
  params: { id: string };
};

// TODO: go-back function
export default async function Servizio({ params }: Params) {
  const service = await getService(params.id);
  const content = await getPage(params.id);

  if (!service) {
    return <div>Errore</div>;
  }

  return (
    <Page>
      <section className="flex flex-col gap-4 lg:w-3/4 text-lg">
        {/* <div */}
        {/*   className="flex items-center gap-2" */}
        {/*   onClick={() => router.push("/cassetta/servizi")} */}
        {/* > */}
        {/*   <LeftIcon className="w-6 lg:w-6 h-6 lg:h-6 cursor-pointer" /> */}
        {/*   <span className="font-bold">INDIETRO</span> */}
        {/* </div> */}

        <h2 className="text-3xl lg:text-4xl font-bold leading-none text-sex-red-4">
          {service && service.name}
        </h2>

        {service && <Tag service={service} />}
        <div className="w-full flex flex-col gap-4 leading-snug">
          {content.parent && <Markdown content={content.parent} />}
        </div>
      </section>
    </Page>
  );
}

const Tag = ({ service }: { service: Partial<Service> }) => {
  return (
    <div className="py-2 w-[150px] text-center rounded-md bg-sex-red-4 bg-opacity-60 text-sex-red-8 text-opacity-90 text-sm font-bold">
      {service && service.zone}
    </div>
  );
};
