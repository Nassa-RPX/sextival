import { DefaultProps } from "@sextival/types";
import clsx from "clsx";

interface Props extends DefaultProps {
  bg?: "red" | "blue";
}

export const Callout = ({ children, className, bg = "blue" }: Props) => (
  <div
    className={clsx(
      "my-4  text-xl bg-sex-blue-2 bg-opacity-40 backdrop-blur-md py-4 px-8 rounded-md",
      bg === "blue" ? "bg-sex-blue-2" : "bg-sex-red-2",
      className,
    )}
  >
    {children}
  </div>
);
