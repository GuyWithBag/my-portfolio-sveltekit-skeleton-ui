

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.b24aa451.js","_app/immutable/chunks/index.ecef51ef.js","_app/immutable/chunks/index.0e398a80.js","_app/immutable/chunks/ArrowUp.43d14f67.js"];
export const stylesheets = ["_app/immutable/assets/0.b281926e.css"];
export const fonts = [];
