import { useRouter } from "next/router";
import { useEffect } from "react";

export const useOnRouterChange = (callback: () => void) => {
  const { pathname } = useRouter();

  useEffect(() => {
    callback();
  }, [pathname]);
};
