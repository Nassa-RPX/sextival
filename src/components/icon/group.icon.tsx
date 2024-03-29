import clsx from "clsx";
import { defaultClassName, IconProps } from "./icon.types";

export const GroupIcon = ({ className, onClick }: IconProps) => (
  <svg
    onClick={onClick && onClick}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    strokeWidth="2"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={clsx(defaultClassName, className)}
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M10 13a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
    <path d="M8 21v-1a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v1"></path>
    <path d="M15 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
    <path d="M17 10h2a2 2 0 0 1 2 2v1"></path>
    <path d="M5 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
    <path d="M3 13v-1a2 2 0 0 1 2 -2h2"></path>
  </svg>
);
