import type { SmoothOptions } from '../types/options';
declare const smoothScroll: (options: SmoothOptions, callback: (positon: number) => void) => Promise<void>;
export default smoothScroll;
