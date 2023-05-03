import clsx from "clsx";

type Type = "y" | "x" | "full";
type Dimension = "sm" | "md" | "lg";

interface Props {
  className?: string;
  type?: Type;
  dimension?: Dimension;
}

const t = (type?: Type, equal?: Type) => type === equal;
const d = (dimension?: Dimension, equal?: Dimension) => dimension === equal;

export const Spacer = ({ className, type: ty, dimension: di }: Props) => (
  <span
    className={clsx(
      className,
      t(ty, "y") && d(di, "sm") && "py-2",
      t(ty, "y") && d(di, "md") && "py-4",
      t(ty, "y") && d(di, "lg") && "py-8",
      
      
      t(ty, "x") && d(di, "sm") && "px-2",
      t(ty, "x") && d(di, "md") && "px-4",
      t(ty, "x") && d(di, "lg") && "px-8",
      
      t(ty, "full") && d(di, "sm") && "p-2",
      t(ty, "full") && d(di, "md") && "p-4",
      t(ty, "full") && d(di, "lg") && "p-8",
    )}
  />
);
