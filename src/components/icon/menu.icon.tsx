import clsx from "clsx";
import { defaultClassName, IconProps } from "./icon.types";

export const MenuIcon = ({ className }: IconProps) => (
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
    <path d="M4 6l16 0"></path>
    <path d="M4 12l16 0"></path>
    <path d="M4 18l16 0"></path>
  </svg>
);
