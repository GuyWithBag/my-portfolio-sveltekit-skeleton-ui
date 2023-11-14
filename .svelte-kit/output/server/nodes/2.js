

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.2390adaa.js","_app/immutable/chunks/index.ecef51ef.js","_app/immutable/chunks/ArrowUp.3e4c1588.js","_app/immutable/chunks/index.0e398a80.js","_app/immutable/chunks/preload-helper.cf010ec4.js"];
export const stylesheets = ["_app/immutable/assets/2.eaec3f01.css"];
export const fonts = [];
