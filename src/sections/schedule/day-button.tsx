import { DefaultProps } from "@sextival/types";
import clsx from "clsx";

interface Props extends DefaultProps {
  selected: boolean;
  onClick: () => void;
}

export const DayButton = (
  { selected, onClick, children }: Props,
) => (
  <div
    onClick={onClick}
    className={clsx(
      "py-3 px-8 rounded-md cursor-pointer transition-colors text-lg",
      selected ? "bg-sex-red-6 text-white" : "bg-sex-red-0",
    )}
  >
    {children}
  </div>
);
