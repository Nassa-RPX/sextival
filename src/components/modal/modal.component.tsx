import { DefaultProps } from "@sextival/types";
import { Heading } from "@sextival/ui/heading";
import clsx from "clsx";
import { RoundedCloseIcon } from "../icon";

interface Props extends DefaultProps {
  open: boolean;
  onClose: () => void;
  title: string;
}

export const Modal = (props: Props) => {
  return (
    <>
      {props.open
        ? (
          <div
            className={clsx(
              "fixed top-0 left-0 w-screen h-screen bg-sex-red-0 bg-opacity-20 backdrop-blur-sm z-[200] flex items-center justify-center",
              props.className,
            )}
          >
            <div className="flex flex-col min-h-full w-full lg:min-h-[200px] px-8 py-4 gap-4 lg:w-[600px] rounded-md bg-white">
              <div className="flex items-center justify-between">
                <Heading order={2} className="text-lg lg:text-2xl">
                  {props.title}
                </Heading>
                <RoundedCloseIcon onClick={props.onClose} />
              </div>

              {props.children}
            </div>
          </div>
        )
        : <span className="fixed z-[-100]" />}
    </>
  );
};
