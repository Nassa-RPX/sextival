import { DefaultProps } from "@sextival/types";
import clsx from "clsx";
import { useMemo } from "react";

interface Props extends DefaultProps {
  order: 1 | 2 | 3;
}

export const Heading = ({ children, className, order }: Props) => {
  const defaultCN = useMemo(() => "font-bold text-2022-sex-dblue", []);

  return (
    <>
      {order === 1 && <h1 className={clsx(defaultCN, className)}>{children}
      </h1>}
      {order === 2 && <h2 className={clsx(defaultCN, className)}>{children}
      </h2>}
      {order === 3 && <h3 className={clsx(defaultCN, className)}>{children}
      </h3>}
    </>
  );
};
