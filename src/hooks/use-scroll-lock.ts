import { useEffect, useState } from "react";

// import { useIsomorphicLayoutEffect } from 'usehooks-ts'

interface UseScrollLock {
  locked: boolean;
  lock: (locked: boolean) => void;
}

export const useScrollLock = (
  initialLocked = false,
  rootId = "root", // Default to `___gatsby` to not introduce breaking change
): UseScrollLock => {
  const [locked, setLocked] = useState(initialLocked);

  useEffect(() => {
    if (!locked) {
      return;
    }

    // Save initial body style
    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;

    // Lock body scroll
    document.body.style.overflow = "hidden";

    // Get the scrollBar width
    const root = document.getElementById(rootId); // or root
    const scrollBarWidth = root ? root.offsetWidth - root.scrollWidth : 0;

    // Avoid width reflow
    if (scrollBarWidth) {
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    }

    return () => {
      document.body.style.overflow = originalOverflow;

      if (scrollBarWidth) {
        document.body.style.paddingRight = originalPaddingRight;
      }
    };
  }, [locked]);

  // Update state if initialValue changes
  useEffect(() => {
    if (locked !== initialLocked) {
      setLocked(initialLocked);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialLocked]);

  return {
    locked,
    lock: setLocked,
  };
};
