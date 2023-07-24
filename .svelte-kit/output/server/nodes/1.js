

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.321c2138.js","_app/immutable/chunks/index.ecef51ef.js","_app/immutable/chunks/singletons.7ec950d9.js","_app/immutable/chunks/index.0e398a80.js"];
export const stylesheets = [];
export const fonts = [];
