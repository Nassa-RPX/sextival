import clsx from "clsx";
import { defaultClassName, IconProps } from "./icon.types";

export const LinkIcon = ({ className }: IconProps) => (
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
    className={clsx(defaultClassName, className)}
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6">
    </path>
    <path d="M11 13l9 -9"></path>
    <path d="M15 4h5v5"></path>
  </svg>
);
