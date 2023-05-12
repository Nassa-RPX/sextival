import Link from "next/link";

import { PAGES } from "@sextival/data";
import { Drawer } from "../drawer";
import { Fragment } from "react";
import { RightIcon } from "../icon";
import clsx from "clsx";

interface Props {
  open: boolean;
  onClose: () => void;
}

export const NavDrawer = ({ open, onClose }: Props) => {
  return (
    <Drawer
      open={open}
      onClose={() => {
        onClose();
      }}
      className="lg:hidden flex flex-col"
      title="Navigazione"
    >
      {PAGES.map((page) => {
        return (
          <Fragment key={`mobile-${page.label}`}>
            {page.link && (
              <NavLink link={page.link} label={page.label} level="first" />
            )}
            {page.subLinks && (
              <>
                <NavHeader label={page.label} />
                <div className="flex flex-col ml-4">
                  {page.subLinks.map((sub) => (
                    <NavLink key={sub.link} {...sub} />
                  ))}
                </div>
              </>
            )}
          </Fragment>
        );
      })}
    </Drawer>
  );
};

const NavHeader = ({ label }: { label: string }) => (
  <div className="mt-4 w-3/4 py-2 px-4 border-2 border-sex-blue-4 rounded-md  text-sex-blue-4 font-bold">
    {label}
  </div>
);

const NavLink = (
  { link, label, level = "second" }: {
    link: string;
    label: string;
    level?: "first" | "second";
  },
) => (
  <Link href={link}>
    <a
      className={clsx(
        "font-bold mt-2 flex items-center gap-2",
        level === "first" && "mt-4",
      )}
    >
      <span>{label}</span>

      <RightIcon />
    </a>
  </Link>
);
