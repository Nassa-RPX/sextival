import clsx from "clsx";
import { defaultClassName, IconProps } from "./icon.types";

export const NetIcon = ({ className, onClick }: IconProps) => (
  <svg
    onClick={onClick && onClick}
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
    <path d="M8 18a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z"></path>
    <path d="M20 6a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z"></path>
    <path d="M8 6a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z"></path>
    <path d="M20 18a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z"></path>
    <path d="M14 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z"></path>
    <path d="M7.5 7.5l3 3"></path>
    <path d="M7.5 16.5l3 -3"></path>
    <path d="M13.5 13.5l3 3"></path>
    <path d="M16.5 7.5l-3 3"></path>
  </svg>
);
