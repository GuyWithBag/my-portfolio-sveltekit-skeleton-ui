

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.6e6a2ac6.js","_app/immutable/chunks/index.ecef51ef.js","_app/immutable/chunks/ArrowUp.43d14f67.js","_app/immutable/chunks/index.0e398a80.js"];
export const stylesheets = ["_app/immutable/assets/2.200e5e22.css"];
export const fonts = [];
