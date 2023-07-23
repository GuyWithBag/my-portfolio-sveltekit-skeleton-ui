import { cubicInOut } from "svelte/easing";

export function spin(node: HTMLElement, {duration = 0, times = 1, easing = cubicInOut}) {
    let opacity = +getComputedStyle(node).opacity; 
    return {
        duration: duration, 
        easing: easing, 
        // The value of t passed to the css method
        // varies between zero and one during an "in" transition
        // and between one and zero during an "out" transition.
        css: (t: number) => {
            // Svelte takes care of applying the easing function.
            const degrees = 360 * times; // through which to spin
            return `
                opacity: ${t * opacity}; 
                transform-origin: center center;
                transform: scale(${t}) rotate(${t * degrees}deg);
            `;
            
        }
    };
}