import { DefaultProps } from "@sextival/types";
import clsx from "clsx";

interface Props extends DefaultProps {
  order: 1 | 2 | 3;
}

const defaultCN = "font-bold text-2022-sex-dblue";

export const Heading = ({ children, className, order }: Props) => {
  return (
    <>
      {order === 1 && (
        <h1 className={clsx(defaultCN, "text-4xl", className)}>{children}</h1>
      )}
      {order === 2 && (
        <h2 className={clsx(defaultCN, "text-3xl", className)}>{children}</h2>
      )}
      {order === 3 && (
        <h3 className={clsx(defaultCN, "text-lg", className)}>{children}</h3>
      )}
    </>
  );
};
