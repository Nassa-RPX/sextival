import clsx from "clsx";

import { DefaultProps } from "@sextival/types";
import { Heading } from "../heading";

interface Props extends DefaultProps {
  title?: React.ReactNode;
}

export const Page = ({ children, className, title }: Props) => {
  return (
    <div
      className={clsx("flex flex-col  mb-10", !title && "mt-[80px]", className)}
    >
      {title && (
        <div
          className={clsx(
            "mt-[60px] h-[100px] flex items-center justify-center",
          )}
        >
          <Heading
            order={1}
            className="text-4xl lg:text-6xl text-brand-blue text-center"
          >
            {title}
          </Heading>
        </div>
      )}
      {children}
    </div>
  );
};
