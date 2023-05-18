import { DefaultProps, Icon } from "@sextival/types";
import clsx from "clsx";

interface Props extends DefaultProps {
  selected: boolean;
  onClick: () => void;
  icon: Icon;
}

export const TypeButton = (
  { selected, onClick, children, icon: Icon }: Props,
) => (
  <div
    className={clsx(
      "py-2 flex gap-2 px-4 rounded-md cursor-pointer transition-colors bg-sex-blue-2 ",
      selected ? "bg-opacity-80" : "bg-opacity-30",
    )}
    onClick={onClick}
  >
    {Icon}
    <span>{children}</span>
  </div>
);
