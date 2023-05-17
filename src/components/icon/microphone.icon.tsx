import clsx from "clsx";
import { defaultClassName, IconProps } from "./icon.types";

export const MicrophoneIcon = ({ className, onClick }: IconProps) => (
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
    className={clsx(defaultClassName, onClick && "cursor-pointer", className)}
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M15 12.9a5 5 0 1 0 -3.902 -3.9"></path>
    <path d="M15 12.9l-3.902 -3.899l-7.513 8.584a2 2 0 1 0 2.827 2.83l8.588 -7.515z">
    </path>
  </svg>
);
