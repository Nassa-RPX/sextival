import { DefaultProps } from "@sextival/types";
import clsx from "clsx";

interface Props extends DefaultProps {
  isSelected: boolean;
}

export const Dropdown = (props: Props) => {
  return (
    <div
      className={clsx(
        "absolute top-[110%] right-[50%] translate-x-1/2 min-w-[200px] px-8 py-4 bg-white transition-opacity rounded-lg bg-opacity-30 backdrop-blur-lg font-normal shadow-sex flex flex-col flex-nowrap",
        props.isSelected
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none",
      )}
    >
      {props.children}
    </div>
  );
};
