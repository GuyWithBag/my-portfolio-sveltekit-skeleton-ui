import type { ScrollToOptions } from '../types/options';
/**
 * Listens for click (touchstart) events and scrolls to elements with smooth animation
 *
 * @param options - The element reference or global options
 */
declare const scrollTo: (node: HTMLElement, options: string | ScrollToOptions) => {
    destroy(): void;
};
export default scrollTo;
