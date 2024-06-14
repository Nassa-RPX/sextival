import clsx from "clsx";
import Image from "next/image";
import { useMemo } from "react";

import { DefaultProps } from "@sextival/types";

interface Props extends DefaultProps {
  img: string | undefined;
  alt: string;
}

export const Avatar = ({ img, alt, className }: Props) => {
  const avatarClassName = useMemo(
    () =>
      clsx(
        "w-[30px] h-[30px] rounded-full relative border-2 border-sex-blue-4 bg-sex-blue-2 text-xs text-sex-blue-8 font-bold",
        className,
      ),
    [className],
  );

  return (
    <>
      {img ? (
        <div className={avatarClassName}>
          <Image alt={alt} src={img} fill={true} className="rounded-full" />
        </div>
      ) : (
        <div
          className={clsx(avatarClassName, "flex items-center justify-center")}
        >
          {alt}
        </div>
      )}
    </>
  );
};
