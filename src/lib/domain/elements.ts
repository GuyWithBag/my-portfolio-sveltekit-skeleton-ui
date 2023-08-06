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

export const download = async (url: string, filename: string) => {
    const data: Response = await fetch(url)
    const blob: Blob = await data.blob()
    const objectUrl = URL.createObjectURL(blob)

    const link = document.createElement('a')

    link.setAttribute('href', objectUrl)
    link.setAttribute('download', filename)
    link.style.display = 'none'

    document.body.appendChild(link)
  
    link.click()
  
    document.body.removeChild(link)
}