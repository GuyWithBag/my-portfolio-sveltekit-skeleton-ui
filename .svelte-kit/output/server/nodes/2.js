

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.f34b80d5.js","_app/immutable/chunks/index.ecef51ef.js","_app/immutable/chunks/ArrowUp.1e679276.js","_app/immutable/chunks/index.0e398a80.js","_app/immutable/chunks/preload-helper.cf010ec4.js"];
export const stylesheets = ["_app/immutable/assets/2.eaec3f01.css"];
export const fonts = [];
