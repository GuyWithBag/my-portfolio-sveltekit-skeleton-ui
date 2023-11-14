

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.75d4f915.js","_app/immutable/chunks/preload-helper.cf010ec4.js","_app/immutable/chunks/index.ecef51ef.js","_app/immutable/chunks/index.0e398a80.js","_app/immutable/chunks/ArrowUp.3e4c1588.js"];
export const stylesheets = ["_app/immutable/assets/0.16f647f3.css"];
export const fonts = [];
