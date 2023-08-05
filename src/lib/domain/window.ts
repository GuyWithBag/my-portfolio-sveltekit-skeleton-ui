export function isLargeScreen(): boolean {
    let mediaQuery: MediaQueryList = window.matchMedia("(min-width: 1024px)")
    return mediaQuery.matches
}

