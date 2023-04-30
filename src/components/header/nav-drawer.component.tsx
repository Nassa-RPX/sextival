import Link from "next/link";

import { PAGES } from "@sextival/data";
import { Drawer } from "../drawer";
import { Fragment } from "react";

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
            {page.link && <Link href={page.link}>{page.label}</Link>}
            {page.subLinks && (
              <>
                <span>{page.label}</span>
                <div className="flex flex-col ml-2">
                  {page.subLinks.map((sub) => (
                    <Link key={sub.link} href={sub.link}>{sub.label}</Link>
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
