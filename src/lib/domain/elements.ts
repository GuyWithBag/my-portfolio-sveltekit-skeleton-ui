interface onObserveParams {
    isIntersecting: Function | null,
    isNotIntersecting: Function | null,
    threshold: number,
}

export function onObserve(div: Element | null, { isIntersecting = null, isNotIntersecting = null, threshold = 0 }: onObserveParams) {

    const observerCallback = (entries: any, observer: any) => {
        entries.forEach((entry: any) => {
            // isIntersecting will be true when div is visible
            if (entry.isIntersecting) {
                if (isIntersecting != null) {
                    isIntersecting();
                }
            } else {
                if (isNotIntersecting != null) {
                    isNotIntersecting();
                }
            }
        });
    }

    const observerOptions = { threshold: threshold };
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    observer.observe(div!);
}