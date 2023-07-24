export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.f3267084.js","app":"_app/immutable/entry/app.8fa85610.js","imports":["_app/immutable/entry/start.f3267084.js","_app/immutable/chunks/index.ecef51ef.js","_app/immutable/chunks/singletons.84e0f411.js","_app/immutable/chunks/index.0e398a80.js","_app/immutable/entry/app.8fa85610.js","_app/immutable/chunks/index.ecef51ef.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
