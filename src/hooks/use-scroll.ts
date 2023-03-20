import { useEffect, useState } from "react";

const useScroll = () => {
  const [scroll, setScroll] = useState({ y: 0, x: 0 });

  const scrolling = () => {
    const position = typeof window !== "undefined"
      ? { y: window.pageYOffset, x: window.pageXOffset }
      : { y: 0, x: 0 };
      
      setScroll(position)
  };

  useEffect(() => {
    window.addEventListener("scroll", scrolling);
    return () => window.removeEventListener("scroll", scrolling);
  }, []);

  return scroll;
};

export default useScroll;
