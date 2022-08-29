import React from "react";

export interface BaseProps {
  children: React.ReactNode;
}

export interface ComponentProps extends BaseProps {
  className?: string;
}
