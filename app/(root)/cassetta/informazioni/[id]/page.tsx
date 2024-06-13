import { getInfo, getPage } from "@sextival/server/lib";
import { Markdown } from "@sextival/ui/markdown";
import { Page } from "@sextival/ui/page";

type Params = { params: { id: string } };

// TODO re-add go back functionality

export default async function Informazione({ params }: Params) {
  const info = await getInfo(params.id);
  const content = await getPage(params.id);

  return (
    <Page>
      <section className="flex flex-col gap-4 mx-auto lg:w-4/5 text-lg mb-6">
        {/* <div */}
        {/*   className="flex items-center gap-2" */}
        {/*   onClick={() => router.push("/cassetta/informazioni")} */}
        {/* > */}
        {/*   <LeftIcon className="w-6 lg:w-6 h-6 lg:h-6 cursor-pointer" /> */}
        {/*   <span className="font-bold">INDIETRO</span> */}
        {/* </div> */}

        {info && info.name && (
          <h2 className="text-4xl lg:text-6xl font-bold leading-none text-sex-red-4">
            {info && info.name.toUpperCase()}
          </h2>
        )}

        {content && content.parent && (
          <div className="w-full flex flex-col gap-4 text-justify leading-snug">
            <Markdown content={content.parent} />
          </div>
        )}
      </section>
    </Page>
  );
}
