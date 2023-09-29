"use client";
import { useMemo, useRef } from "react";

import { useWindowInfo } from "@sextival/hooks";
import { DefaultProps } from "@sextival/types";

import { Section } from "./section.ui";

export const FullSection = ({ children }: DefaultProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const info = useWindowInfo(ref);

  const sectionHeight = useMemo(
    () => info ? `${info.height - info.positionY}px` : "100vh",
    [info],
  );

  return (
    <Section ref={ref} style={{ height: sectionHeight }}>{children}</Section>
  );
};
