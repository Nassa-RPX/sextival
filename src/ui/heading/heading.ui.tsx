import { DefaultProps } from "@sextival/types";

interface Props extends DefaultProps {
  order: 1 | 2 | 3;
}

export const Heading = ({ children, className, order }: Props) => {
  return (
    <>
      {order === 1 && <h1 className={className}>{children}</h1>}
      {order === 2 && <h2 className={className}>{children}</h2>}
      {order === 3 && <h3 className={className}>{children}</h3>}
    </>
  );
};
