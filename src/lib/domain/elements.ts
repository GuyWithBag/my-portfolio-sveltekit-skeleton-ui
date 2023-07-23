interface onObserveParams {
    isIntersecting: Function | null, 
    isNotIntersection: Function | null, 
    threshold: number, 
}

export function onObserve(div: Element | null, { isIntersecting = null, isNotIntersection = null, threshold = 0 }: onObserveParams) {

    const observerCallback = (entries: any, observer: any) => {
        entries.forEach((entry: any) => {
            // isIntersecting will be true when div is visible
            if (entry.isIntersecting) {
                if (isIntersecting != null) {
                    isIntersecting(); 
                }
            } else {
                if (isNotIntersection != null) {
                    isNotIntersection(); 
                }
            }
        });
    }
    
    const observerOptions = { threshold: threshold };
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    observer.observe(div!);   
}