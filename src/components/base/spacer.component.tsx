import clsx from "clsx";
import { useMemo } from "react";

interface SpacerProps {
  type: "y" | "x" | "full";
  dimension: "sm" | "md" | "bg";
}

const Spacer = ({ type, dimension }: SpacerProps) => {
  const d = useMemo(() => {
    return dimension === "sm" ? "2" : dimension === "md" ? "4" : "6";
  }, [dimension]);

  const t = useMemo(() => {
    return type === "y" ? "py" : type === "x" ? "px" : "p";
  }, [type]);

  const className = useMemo(() => {
    return `${t}-${d}`;
  }, [t, d]);

  return <div className={clsx(className)}></div>;
};

export default Spacer;
