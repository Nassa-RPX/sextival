import { RefObject, useEffect, useState } from "react";

interface WindowInfo {
  width: number;
  height: number;
  positionX: number;
  positionY: number;
}

export const useWindowInfo = <T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
) => {
  const [state, setState] = useState<WindowInfo | undefined>(undefined);

  useEffect(() => {
    if (window && ref.current) {
      const width = window.innerWidth;
      const height = window.innerHeight;

      const positionY = ref.current.offsetTop;
      const positionX = ref.current.offsetLeft;

      setState({ width, height, positionY, positionX });
    }
  }, []);

  return state;
};
