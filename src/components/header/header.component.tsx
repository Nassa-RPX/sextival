import React, { Fragment, useMemo, useState } from "react";
import { motion, Variants } from "framer-motion";
import clsx from "clsx";
import Link from "next/link";

import { PAGES } from "@sextival/data";
import useScroll from "@sextival/hooks/use-scroll";

import { DownIcon, MenuIcon } from "../icon";
import { NavDrawer } from "./nav-drawer.component";
import { useMediaQuery, useScrollLock } from "@sextival/hooks";

const variants: Variants = {
  base: {
    y: 0,
    opacity: 1,
  },
  scrolled: {
    y: 10,
    opacity: 1,
  },
};

export const Header = () => {
  const [selected, setSelected] = useState(false);
  const scroll = useScroll();
  const isDesktop = useMediaQuery("lg");
  const scrollThreshold = useMemo(() => isDesktop ? 200 : 50, [isDesktop]);
  const isScrolled = useMemo(() => scroll.y > scrollThreshold, [
    scroll,
    scrollThreshold,
  ]);

  const { lock } = useScrollLock(false);

  const [openNav, setOpenNav] = useState(false);

  return (
    <>
      <motion.div
        className={clsx(
          "fixed left-0 right-0 h-[60px] mx-[5%] px-[5%] lg:mx-[10%] lg:px-8 flex justify-between items-center transition-colors z-10 rounded-md",
          isScrolled &&
            "bg-sex-red-4 lg:bg-sex-red-0 bg-opacity-50 lg:bg-opacity-75 backdrop-blur-md ",
        )}
        variants={variants}
        initial={{ y: -100, opacity: 0 }}
        animate={isScrolled ? "scrolled" : "base"}
      >
        <h1 className="text-2xl lg:text-4xl font-black text-sex-blue">
          SEXTIVAL
        </h1>

        <div
          onClick={() => {
            console.log("hello");
            lock(true);
            setOpenNav(true);
          }}
          className="lg:hidden cursor-pointer"
        >
          <MenuIcon className="w-6 h-6 text-sex-blue" />
        </div>

        <div className="hidden lg:flex gap-8 text-sex-blue font-bold text-md">
          {PAGES.map(({ label, link, subLinks }) => {
            return (
              <Fragment key={label}>
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
                          : "opacity-0 pointer-events-none",
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
              </Fragment>
            );
          })}
        </div>
      </motion.div>

      <NavDrawer
        open={openNav}
        onClose={() => {
          lock(false);
          setOpenNav(false);
        }}
      />
    </>
  );
};
