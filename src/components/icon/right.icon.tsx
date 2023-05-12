import clsx from "clsx";
import { defaultClassName, IconProps } from "./icon.types";

export const RightIcon = ({ className, onClick }: IconProps) => (
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
    <path d="M9 6l6 6l-6 6"></path>
  </svg>
);
