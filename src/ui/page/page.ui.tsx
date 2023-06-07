import clsx from "clsx";
import Head from "next/head";

import { DefaultProps } from "@sextival/types";
import { toTitleCase } from "@sextival/utils";
import { Heading } from "../heading";

interface Props extends DefaultProps {
  title?: React.ReactNode;
  meta?: {
    description?: string;
  };
}

export const Page = ({ children, className, title, meta }: Props) => {
  return (
    <>
      <Head>
        {typeof title === "string"
          ? <title>Sextival - {toTitleCase(title)}</title>
          : <title>Sextival</title>}

        {meta && meta.description && (
          <meta
            name="description"
            content={meta.description}
          />
        )}
      </Head>
      <div
        className={clsx(
          "flex flex-col overflow-x-hidden",
          !title && "mt-[80px]",
          className,
        )}
      >
        {title && (
          <div
            className={clsx(
              "mt-[60px] h-[100px] flex items-center justify-center",
            )}
          >
            <Heading order={1} className="text-sex-red-4 text-4xl lg:text-6xl">
              {title}
            </Heading>
          </div>
        )}
        {children}
      </div>
    </>
  );
};
