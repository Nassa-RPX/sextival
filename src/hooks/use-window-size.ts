import { useEffect, useState } from "react";

export const useWindowSize = () => {
  const [size, setSize] = useState<{ width: number; height: number }>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const height = window.innerHeight;
    const width = window.innerWidth;

    setSize({ width, height });
  }, []);

  return size;
};
