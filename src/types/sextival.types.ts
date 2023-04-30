import { PropsWithChildren } from "react";

export interface DefaultProps extends PropsWithChildren {
  className?: string;
}

export type Icon = JSX.Element;
