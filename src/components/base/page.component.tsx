import { useRouter } from "next/router";
import Image from "next/image";
import clsx from "clsx";
import { motion } from "framer-motion";

import { BackIcon } from "../icon";
import { ComponentProps } from "@sextival/types/react.types";
import { fadeInUp } from "@sextival/utils/animations";

interface Props extends ComponentProps {
  cover: {
    src: string;
    alt: string;
  };
  title: string;
  layoutId?: string;
}

const Page = (props: Props) => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-red-200 flex flex-col text-slate-800">
      <header className="h-40 lg:h-60 w-full max-w-screen bg-sex-gradient-sm rounded-xl rounded-t-none lg:rounded-none relative" />

      <motion.div layoutId={`about-animation-${props.layoutId}`}>
        <div className="h-44 lg:h-80 w-4/5 lg:w-1/2 bg-transparent relative -translate-y-2/3 lg:-translate-y-2/3 mx-auto">
          <Image
            src={props.cover.src}
            alt={props.cover.alt}
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
          />

          <div
            className="absolute py-2 lg:py-3  px-4 lg:px-5 rounded-tl-xl rounded-br-xl bg-slate-100 hover:cursor-pointer"
            onClick={() => {
              router.back();
            }}
          >
            <BackIcon />
          </div>

          {/* TODO: choose a better color for the bg */}
          <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 ">
            <h1 className="text-center text-3xl lg:text-5xl font-bold text-white drop-shadow-lg">
              {props.title}
            </h1>
          </div>
        </div>
      </motion.div>

      <motion.main
        initial="initial"
        animate="animate"
        exit="exit"
        variants={fadeInUp}
      >
        <section
          className={clsx(
            "flex flex-col p-8 lg:w-2/3 lg:mx-auto -translate-y-12 lg:-translate-y-40 pt-0",
            props.className
          )}
        >
          {props.children}
        </section>
      </motion.main>
    </div>
  );
};

export default Page;
