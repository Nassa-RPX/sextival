export interface AnimatedElement {
  name: string;
  img: string;
}

export type Axis = null | "x" | "y";
export interface Points<T> {
  x: T;
  y: T;
}
