import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";
import { DownIcon } from "../icon";
import { motion} from 'framer-motion';

type Pages = Array<{
  label: string;
  link?: string;
  subLinks?: Array<{ label: string; link: string }>;
}>;

const PAGES: Pages = [
  {
    label: "CHI SIAMO",
    subLinks: [
      { label: "Il Sextival", link: "/il-sextival" },
      { label: "Edizione 2022", link: "/edizione-2022" },
    ],
  },
  { label: "LA NASSA", link: "/la-nassa" },
  { label: "PARTNER", link: "/partner" },
];

export const Header = () => {
  const [selected, setSelected] = useState(false);

  return (
    <motion.div className="my-4 lg:my-8 flex justify-between items-center" initial={{y:-100, opacity: 0}} animate={{y:0, opacity: 1}}>
      <h1 className="text-2xl lg:text-4xl font-black text-sex-blue">
        SEXTIVAL
      </h1>
      <div className="flex gap-8 text-sex-blue font-bold text-md">
        {PAGES.map(({ label, link, subLinks }) => {
          return (
            <>
              {link && (
                <Link href={link} key={link}>
                  {label}
                </Link>
              )}
              {subLinks && (
                <div className="relative">
                  <div
                    className="flex items-center cursor-pointer relative"
                    onClick={() => setSelected(!selected)}
                  >
                    <span>{label}</span>
                    <DownIcon />
                  </div>
                  <div
                    className={clsx(
                      "absolute top-[110%] right-[50%] translate-x-1/2 min-w-[200px] px-8 py-4 bg-white transition-opacity rounded-lg bg-opacity-30 font-normal shadow-sex flex flex-col flex-nowrap",
                      selected
                        ? "opacity-100 pointer-events-auto"
                        : "opacity-0 pointer-events-none"
                    )}
                  >
                    {subLinks.map((sub) => (
                      <div key={sub.link}>
                        <Link href={sub.link}>{sub.label}</Link>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          );
        })}
      </div>
    </motion.div>
  );
};
