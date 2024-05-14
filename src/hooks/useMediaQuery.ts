import React from 'react';

export function useMediaQuery(query: string) {
  const isClient = typeof window !== 'undefined';

  const subscribe = React.useCallback(
    (callback: (ev: MediaQueryListEvent) => any ) => {
      if (isClient) {
        const matchMedia = window.matchMedia(query);
        matchMedia.addEventListener("change", callback);
        return () => {
          matchMedia.removeEventListener("change", callback);
        };
      }
    },
    [query, isClient]
  );

  const getSnapshot = () => {
    return isClient ? window.matchMedia(query).matches : false;
  };

  const getServerSnapshot = () => {
    throw Error("useMediaQuery is a client-only hook");
  };

  return React.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
