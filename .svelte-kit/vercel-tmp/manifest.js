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
		client: {"start":"_app/immutable/entry/start.0c80ffaa.js","app":"_app/immutable/entry/app.9070d455.js","imports":["_app/immutable/entry/start.0c80ffaa.js","_app/immutable/chunks/index.ecef51ef.js","_app/immutable/chunks/singletons.33f4d2cf.js","_app/immutable/chunks/index.0e398a80.js","_app/immutable/entry/app.9070d455.js","_app/immutable/chunks/index.ecef51ef.js"],"stylesheets":[],"fonts":[]},
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
