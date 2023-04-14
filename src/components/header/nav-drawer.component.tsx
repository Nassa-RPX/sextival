import { PAGES } from "@sextival/data";
import Link from "next/link";
import { Drawer } from "../drawer";

interface Props {
  open: boolean;
  onClose: () => void;
}

export const NavDrawer = ({ open, onClose }: Props) => {
  return (
    <Drawer
      open={open}
      onClose={onClose}
      className="lg:hidden flex flex-col"
      title="Navigazione"
    >
      {PAGES.map((page) => {
        return (
          <>
            {page.link && <Link href={page.link}>{page.label}</Link>}
            {page.subLinks && (
              <>
                <span>{page.label}</span>
                <div className="flex flex-col ml-2">
                  {page.subLinks.map((sub) => (
                    <Link href={sub.link}>{sub.label}</Link>
                  ))}
                </div>
              </>
            )}
          </>
        );
      })}
    </Drawer>
  );
};
