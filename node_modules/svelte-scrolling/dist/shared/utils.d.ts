import type { ElementReference } from '../types/reference';
export declare const sanitize: (hash: string) => string;
export declare const getElement: (elementsList: Array<ElementReference>, reference: string) => HTMLElement | null;
export declare const getPosition: (element: HTMLElement) => number;
