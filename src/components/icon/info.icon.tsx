import clsx from "clsx";
import { defaultClassName, IconProps } from "./icon.types";

export const InfoIcon = ({ className, onClick }: IconProps) => (
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
    onClick={onClick && onClick}
    className={clsx(defaultClassName, onClick && "cursor-pointer", className)}
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
    <path d="M12 9h.01"></path>
    <path d="M11 12h1v4h1"></path>
  </svg>
);
