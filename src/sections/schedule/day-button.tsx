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
      "py-3 px-8 text-center rounded-md cursor-pointer transition-colors font-bold text-md lg:text-lg leading-tight",
      selected
        ? "bg-sex-blue-4 text-white"
        : "bg-transparent border border-sex-blue-4 text-sex-blue-4",
    )}
  >
    {children}
  </div>
);
