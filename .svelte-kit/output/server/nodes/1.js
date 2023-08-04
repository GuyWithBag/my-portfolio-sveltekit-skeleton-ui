

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.7b150c41.js","_app/immutable/chunks/index.ecef51ef.js","_app/immutable/chunks/singletons.33f4d2cf.js","_app/immutable/chunks/index.0e398a80.js"];
export const stylesheets = [];
export const fonts = [];
