"use client";

import React, { Fragment, useEffect, useMemo, useRef, useState } from "react";
import { motion, Variants } from "framer-motion";
import clsx from "clsx";
import Link from "next/link";

import { PAGES } from "@sextival/data";
import useScroll from "@sextival/hooks/use-scroll";

import { DownIcon, MenuIcon } from "../icon";
import { NavDrawer } from "./nav-drawer.component";
import {
  useMediaQuery,
  useOnClickOutside,
  useOnRouterChange,
  useScrollLock,
} from "@sextival/hooks";
import { Dropdown } from "../dropdown/dropdown.component";
import { usePathname } from "next/navigation";

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

type Props = {
  type: "home" | "root";
};

export const Header = ({ type }: Props) => {
  const [selected, setSelected] = useState<string | undefined>(undefined);
  const scroll = useScroll();
  const isDesktop = useMediaQuery("lg");
  const scrollThreshold = useMemo(() => 50, []);
  const isScrolled = useMemo(
    () => scroll.y > scrollThreshold,
    [scroll, scrollThreshold],
  );
  const ref = useRef<HTMLDivElement | null>(null);

  useOnRouterChange(() => isDesktop && selected && setSelected(undefined));
  useOnClickOutside(ref, () => {
    isDesktop && selected && setSelected(undefined);
  });
  const { lock } = useScrollLock(false);

  const [openNav, setOpenNav] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    lock(false);
    setOpenNav(false);
  }, [pathname]);

  return (
    <>
      <motion.div
        ref={ref}
        className={clsx(
          "fixed left-0 right-0 h-[60px] px-[5%]  lg:px-8 flex lg:justify-center items-center transition-colors rounded-md",
          type === "home" ? "bg-brand-blue mx-0" : "bg-transparent lg:mx-[10%]",
          isScrolled &&
            "bg-sex-blue-4 lg:bg-brand-lilac bg-opacity-50 lg:bg-opacity-75 backdrop-blur-md ",
        )}
        style={{ zIndex: 1000 }}
        variants={variants}
        initial={{ y: -100, opacity: 0 }}
        animate={isScrolled ? "scrolled" : "base"}
      >
        <div
          onClick={() => {
            lock(true);
            setOpenNav(true);
          }}
          className="lg:hidden cursor-pointer"
        >
          <MenuIcon
            className={clsx(
              "w-6 h-6",
              type === "root" ? "text-brand-blue" : "text-white",
            )}
          />
        </div>

        <div className="hidden lg:flex gap-8 text-white">
          {PAGES.main.map(({ label, link, subLinks }) => {
            return (
              <Fragment key={label}>
                {link && (
                  <Link
                    href={link}
                    key={link}
                    className={clsx(
                      "font-bold",
                      type === "root" && "text-brand-blue",
                    )}
                  >
                    {label}
                  </Link>
                )}
                {subLinks && (
                  <div className="relative">
                    <div
                      className="flex items-center cursor-pointer relative"
                      onClick={() => {
                        selected === label
                          ? setSelected(undefined)
                          : setSelected(label);
                      }}
                    >
                      <span>{label}</span>
                      <DownIcon selected={selected === label} />
                    </div>
                    <Dropdown isSelected={selected === label}>
                      {subLinks.map((sub) => (
                        <div key={sub.link}>
                          <Link href={sub.link}>{sub.label}</Link>
                        </div>
                      ))}
                    </Dropdown>
                  </div>
                )}
              </Fragment>
            );
          })}

          {PAGES.other.map(({ label, link, subLinks }) => {
            return (
              <Fragment key={label}>
                {link && (
                  <Link
                    href={link}
                    key={link}
                    className={clsx(type === "root" && "text-brand-blue")}
                  >
                    {label}
                  </Link>
                )}
                {subLinks && (
                  <div
                    className={clsx(
                      "relative",
                      type === "root" && "text-brand-blue",
                    )}
                  >
                    <div
                      className="flex items-center cursor-pointer relative"
                      onClick={() => {
                        selected === label
                          ? setSelected(undefined)
                          : setSelected(label);
                      }}
                    >
                      <span>{label}</span>
                      <DownIcon selected={selected === label} />
                    </div>
                    <Dropdown isSelected={selected === label}>
                      {subLinks.map((sub) => (
                        <div key={sub.link}>
                          <Link href={sub.link}>{sub.label}</Link>
                        </div>
                      ))}
                    </Dropdown>
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
