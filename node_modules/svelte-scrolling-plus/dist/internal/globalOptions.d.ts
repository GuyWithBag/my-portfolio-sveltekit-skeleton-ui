import type { GlobalOptions } from '../types/options';
export declare const getGlobalOptions: () => GlobalOptions;
/**
 * Override global options
 *
 * @param options - The global options
 */
declare const setGlobalOptions: (options: GlobalOptions) => void;
export default setGlobalOptions;
