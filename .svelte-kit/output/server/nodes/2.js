

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.bf9ac5e4.js","_app/immutable/chunks/index.c2390a1b.js","_app/immutable/chunks/ArrowUp.4bbfde67.js","_app/immutable/chunks/index.e78fc114.js","_app/immutable/chunks/preload-helper.a4192956.js"];
export const stylesheets = ["_app/immutable/assets/2.d0fe3175.css"];
export const fonts = [];
