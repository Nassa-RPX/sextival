import { useCallback, useRef, useState } from "react";

const useMainScroll = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [snapType, setSnapType] = useState<"snap-proximity" | "snap-mandatory">(
    "snap-proximity"
  );

  const handleMainScroll = useCallback(() => {
    const firstPanel = window.innerHeight;
    const firstPanel80 = firstPanel * 0.8;
    const currentScroll = ref.current?.scrollTop;

    if (!currentScroll) return;
    if (currentScroll >= firstPanel80 && snapType === "snap-proximity")
      setSnapType("snap-mandatory");
    else if (currentScroll < firstPanel80 && snapType === "snap-mandatory")
      setSnapType("snap-proximity");
  }, [snapType]);

  return { ref, snapType, handleScroll: handleMainScroll };
};

export default useMainScroll;
