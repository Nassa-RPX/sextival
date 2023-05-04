import { DefaultProps } from "@sextival/types";
import clsx from "clsx";
import { Heading } from "../heading";

interface Props extends DefaultProps {
  title?: React.ReactNode;
}

export const Page = ({ children, className, title }: Props) => {
  return (
    <div className={clsx("flex flex-col lg:w-4/5 lg:mx-auto ", className)}>
      <div className="mt-[60px] h-[100px] flex items-center justify-center">
        <Heading order={1} className="text-sex-red-4 text-4xl lg:text-6xl">
          {title}
        </Heading>
      </div>
      {children}
    </div>
  );
};
