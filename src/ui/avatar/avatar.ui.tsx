import { DefaultProps } from "@sextival/types";
import clsx from "clsx";
import Image from "next/image";
import { useMemo } from "react";

interface Props extends DefaultProps {
  img: string | undefined;
  alt: string;
  isFirst: boolean;
  isLoading?: boolean;
}

export const Avatar = ({ isLoading, isFirst, img, alt, className }: Props) => {
  const avatarClassName = useMemo(() =>
    clsx(
      "w-[40px] h-[40px] rounded-full relative border-2 border-sex-red-4 bg-sex-red-2 text-xs text-sex-red-8 font-bold",
      !isFirst && " ml-[-20px]",
      className,
    ), [isFirst]);

  return (
    <>
      {!isLoading
        ? (
          <>
            {img
              ? (
                <div
                  className={avatarClassName}
                >
                  <Image
                    src={img}
                    layout="fill"
                    className="rounded-full"
                  />
                </div>
              )
              : (
                <div
                  className={clsx(
                    avatarClassName,
                    "flex items-center justify-center",
                  )}
                >
                  {alt}
                </div>
              )}
          </>
        )
        : (
          <div
            className={avatarClassName}
          />
        )}
    </>
  );
};
