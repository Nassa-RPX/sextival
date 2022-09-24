import { ReactNode } from "react";

export type GridData = {
  icon: () => JSX.Element;
  title: string | ReactNode;
  description: string | ReactNode;
};
