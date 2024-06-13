"use client";

import { DefaultProps } from "@sextival/types";
import clsx from "clsx";
import Link from "next/link";

interface Props extends DefaultProps {
  url: string;
}

const YoutubeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    strokeWidth="2"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="font-normal"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M3 5m0 4a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v6a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z">
    </path>
    <path d="M10 9l5 3l-5 3z"></path>
  </svg>
);

export const VideoLocation = ({ children, className, url }: Props) => (
  <Link
    href={url}
    className={clsx(
      "p-2 bg-red-100 lg:p-4 border-2 border-red-500 flex flex-col lg:flex-row text-center items-center gap-1 lg:gap-2 font-medium text-red-500 rounded-md leading-none",
      className,
    )}
  >
    <YoutubeIcon />
    <span>{children}</span>
  </Link>
);
