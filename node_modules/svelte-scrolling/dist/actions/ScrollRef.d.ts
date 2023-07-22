/**
 * Adds a reference to the elements that `scrollTo` should scroll
 *
 * @param reference - The reference element
 */
declare const scrollRef: (node: HTMLElement, reference: string) => {
    destroy(): void;
};
export default scrollRef;
