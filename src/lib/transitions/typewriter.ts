export function typewriter(node: HTMLElement, { speed = 0, delay = 0, duration = 500 }) {
    // alert(node.childNodes[0]!.nodeType === Node.TEXT_NODE)
    // alert(node.title)
    // const valid: boolean = node.childNodes.length === 1 && node.childNodes[0]!.nodeType === Node.TEXT_NODE;

    // if (!valid) {
    //     throw new Error(`This transition only works on elements with a single text node child`);
    // }

    const text: string | null = node.innerText;
    let newDuration = duration; 
    if (speed > 0) {
        newDuration = text!.length / (speed * 0.01); 
    }

    return {
        duration: newDuration, 
        delay: delay, 
        tick: (time: number) => {
            const i = Math.trunc(text!.length * time);
            node.innerText = text!.slice(0, i);
        }
    };
}
