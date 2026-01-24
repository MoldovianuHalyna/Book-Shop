import { useEffect, useMemo, useState } from "react";

const DEFAULT_BREAKPOINT = 1024;

const createQuery = (breakpoint: number) => `(max-width: ${breakpoint}px)`;

const getInitialMatch = (breakpoint: number) => {
  if (typeof window === "undefined" || !window.matchMedia) {
    return false;
  }

  return window.matchMedia(createQuery(breakpoint)).matches;
};

const useIsMobileView = (breakpoint: number = DEFAULT_BREAKPOINT) => {
  const mediaQuery = useMemo(() => createQuery(breakpoint), [breakpoint]);
  const [isMobileView, setIsMobileView] = useState<boolean>(() =>
    getInitialMatch(breakpoint),
  );

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) {
      return undefined;
    }

    const matcher = window.matchMedia(mediaQuery);
    const updateMatch = () => setIsMobileView(matcher.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setIsMobileView(event.matches);
    };

    // Ensure state is in sync on mount.
    updateMatch();

    if (typeof matcher.addEventListener === "function") {
      matcher.addEventListener("change", handleChange);
      return () => matcher.removeEventListener("change", handleChange);
    }

    matcher.addListener(handleChange);
    return () => matcher.removeListener(handleChange);
  }, [mediaQuery]);

  return isMobileView;
};

export default useIsMobileView;
