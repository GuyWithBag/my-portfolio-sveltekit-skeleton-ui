import type { GlobalOptions } from '../types/options';
/**
 * Scroll to the top of the page
 *
 * @param options - An optional param with global options
 */
export declare const scrollTop: (options?: Partial<GlobalOptions>) => Promise<void>;
/**
 * Scroll to the end of the page
 *
 * @param options - An optional param with global options
 */
export declare const scrollBottom: (options?: Partial<GlobalOptions>) => Promise<void>;
/**
 * Scroll to element
 *
 * @param reference - The element reference
 * @param options - An optional param with global options
 */
export declare const scrollElement: (reference: string, options?: Partial<GlobalOptions>) => Promise<void>;
/**
 * Scroll to a position on the page
 *
 * @param position - The position
 * @param options - An optional param with global options
 */
export declare const scrollPosition: (position: number, options?: Partial<GlobalOptions>) => Promise<void>;
