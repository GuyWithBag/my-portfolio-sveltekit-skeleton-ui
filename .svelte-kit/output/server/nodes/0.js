

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.923742ef.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/index.c2390a1b.js","_app/immutable/chunks/index.e78fc114.js","_app/immutable/chunks/ArrowUp.4bbfde67.js"];
export const stylesheets = ["_app/immutable/assets/0.9ce0670c.css"];
export const fonts = [];
