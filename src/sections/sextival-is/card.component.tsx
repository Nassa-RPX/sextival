import { DefaultProps } from "@sextival/types";
import clsx from "clsx";

type Props = DefaultProps;

const Root = ({ children, className }: Props) => {
  return (
    <div
      className={clsx(
        "flex-1 rounded-md flex flex-col",
        className,
      )}
    >
      {children}
    </div>
  );
};

const Icon = ({ children, className }: Props) => (
  <div className={clsx(className)}>{children}</div>
);

const Title = ({ children, className }: Props) => (
  <h1 className={clsx("font-bold text-xl leading-tight", className)}>
    {children}
  </h1>
);

const Body = ({ children, className }: Props) => (
  <div className={clsx("flex-1", className)}>{children}</div>
);

export { Body, Icon, Root, Title };
