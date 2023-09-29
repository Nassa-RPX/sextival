"use client";

import { defaultClassName, IconProps } from "./icon.types";
import { motion } from "framer-motion";

interface Props extends IconProps {
  selected?: boolean;
}

export const DownIcon = ({ className, selected }: Props) => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    strokeWidth="2"
    stroke="currentColor"
    fill="none"
    animate={{ rotate: selected ? 180 : 0 }}
    className={className || defaultClassName}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M6 9l6 6l6 -6"></path>
  </motion.svg>
);
