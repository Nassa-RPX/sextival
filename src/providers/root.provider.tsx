"use client";

import { PropsWithChildren } from "react";
import { AnimatePresence } from "framer-motion";
import { Next13ProgressBar } from "next13-progressbar";

// TODO: change progress-bar color
export const RootProvider = ({ children }: PropsWithChildren) => (
  <AnimatePresence mode="wait">
    <Next13ProgressBar
      height="4px"
      color="#0A2FFF"
      options={{ showSpinner: true  }}
      showOnShallow
    />
    {children}
  </AnimatePresence>
);
