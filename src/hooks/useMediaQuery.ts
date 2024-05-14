import React from "react";

export function useMediaQuery(query: string) {
    const [matches, setMatches] = React.useState(false);

    React.useEffect(() => {
        let isMounted = true;
        if (typeof window !== 'undefined') {
            const matchMedia = window.matchMedia(query);
            const handleChange = (ev: MediaQueryListEvent) => {
                if (isMounted) {
                    setMatches(ev.matches);
                }
            };
            matchMedia.addEventListener("change", handleChange);
            setMatches(matchMedia.matches);
            return () => {
                matchMedia.removeEventListener("change", handleChange);
                isMounted = false;
            };
        }
    }, [query]);

    return matches;
}
