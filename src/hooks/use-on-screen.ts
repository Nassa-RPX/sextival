import { RefObject, useEffect, useState } from "react";

export const useOnScreen = <T extends HTMLElement>(
  ref: RefObject<T>,
  rootMargin = 0,
) => {
  // State and setter for storing whether element is visible
  const [isIntersecting, setIntersecting] = useState<boolean | undefined>(
    false,
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
        setIntersecting(entry?.isIntersecting);
      },
      {
        rootMargin: `${rootMargin}px`,
      },
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      ref.current && observer.unobserve(ref.current);
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return isIntersecting;
};
