import { useEffect, useRef, useState } from "react";

export interface UseMediaQueryOptions {
  getInitialValueInEffect: boolean;
}

type MediaQueryCallback = (event: { matches: boolean; media: string }) => void;

/**
 * Older versions of Safari (shipped withCatalina and before) do not support addEventListener on matchMedia
 * https://stackoverflow.com/questions/56466261/matchmedia-addlistener-marked-as-deprecated-addeventlistener-equivalent
 */
function attachMediaListener(
  query: MediaQueryList,
  callback: MediaQueryCallback,
) {
  try {
    query.addEventListener("change", callback);
    return () => query.removeEventListener("change", callback);
  } catch (e) {
    query.addListener(callback);
    return () => query.removeListener(callback);
  }
}

function getInitialValue(query: string, initialValue?: boolean) {
  if (typeof initialValue === "boolean") {
    return initialValue;
  }

  if (typeof window !== "undefined" && "matchMedia" in window) {
    return window.matchMedia(query).matches;
  }

  return false;
}

type Breakpoint = "xs" | "sm" | "md" | "lg" | "xl";

const breakpoints: Record<Breakpoint, number> = {
  "xs": 0,
  "sm": 576,
  "md": 768,
  "lg": 992,
  "xl": 1200,
};

export function useMediaQuery(
  breakpoint: Breakpoint,
  max?: boolean,
  initialValue?: boolean,
  { getInitialValueInEffect }: UseMediaQueryOptions = {
    getInitialValueInEffect: true,
  },
) {
  
  const query = `(${max? 'max-width' : 'min-width'}:${breakpoints[breakpoint]}px)`
  
  const [matches, setMatches] = useState(
    getInitialValueInEffect
      ? initialValue
      : getInitialValue(query, initialValue),
  );
  const queryRef = useRef<MediaQueryList>();

  useEffect(() => {
    if ("matchMedia" in window) {
      queryRef.current = window.matchMedia(query);
      setMatches(queryRef.current.matches);
      return attachMediaListener(
        queryRef.current,
        (event) => setMatches(event.matches),
      );
    }

    return undefined;
  }, [query]);

  return matches;
}
