

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.2a08f6d4.js","_app/immutable/chunks/index.c2390a1b.js","_app/immutable/chunks/singletons.c46f2305.js","_app/immutable/chunks/index.e78fc114.js"];
export const stylesheets = [];
export const fonts = [];
