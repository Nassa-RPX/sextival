import { ComponentProps } from "@sextival/types/react.types";
import clsx from "clsx";
import Image from "next/image";
import { BackIcon } from "../icon";

interface Props extends ComponentProps {
  cover: {
    src: string;
    alt: string;
  };
  title: string;
}

const Page = (props: Props) => {
  return (
    <div className="min-h-screen bg-red-200 flex flex-col text-slate-800">
      <header className="h-40 lg:h-60 w-full max-w-screen bg-sex-gradient-sm rounded-xl rounded-t-none lg:rounded-none relative" />

      <div className="h-44 lg:h-80 w-4/5 lg:w-1/2 bg-transparent relative -translate-y-1/2 lg:-translate-y-1/2 mx-auto">
        <Image
          src={props.cover.src}
          alt={props.cover.alt}
          layout="fill"
          objectFit="cover"
          className="rounded-xl"
        />

        {/* TODO: add onclick functionality */}
        <div className="absolute py-4 px-6 rounded-tl-xl rounded-br-xl bg-white">
          <BackIcon />
        </div>

        {/* TODO: choose a better color for the bg */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-red-600 rounded-xl rounded-b-none">
          <h1 className="py-2 px-6 lg:p-6 font-bold text-2xl lg:text-4xl text-center text-white drop-shadow-md">
            {props.title}
          </h1>
        </div>
      </div>

      <main
        className={clsx(
          "flex flex-col p-8 lg:w-2/3 lg:mx-auto -translate-y-12 lg:-translate-y-32 pt-0",
          props.className
        )}
      >
        {props.children}
      </main>
    </div>
  );
};

export default Page;
