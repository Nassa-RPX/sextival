import { ComponentProps } from "@sextival/types/react.types";
import clsx from "clsx";
import Image from "next/image";

interface Props extends ComponentProps {
  img: {
    src: string;
    alt: string;
  };
}

const Page = (props: Props) => {
  return (
    <div className="min-h-screen w-screen bg-red-200 flex flex-col text-slate-800">
      <header className="h-40 w-full bg-sex-gradient-sm rounded-xl rounded-t-none relative">
        <div className="h-44 w-4/5 bg-transparent absolute top-1/3 left-1/2 -translate-x-1/2">
          <div className="h-full w-full bg-red-400 relative rounded-xl">
            <Image
              src={props.img.src}
              alt={props.img.alt}
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
          </div>
        </div>
      </header>

      <div className="py-6"></div>

      <main className={clsx("flex flex-col p-8 lg:p-16", props.className)}>
        {props.children}
      </main>
    </div>
  );
};

export default Page;
