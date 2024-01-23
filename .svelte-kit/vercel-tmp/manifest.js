export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["downloads/LoejeeMiguel_Dulaugon_Resume.pdf","favicon.png"]),
	mimeTypes: {".pdf":"application/pdf",".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.d5a9114b.js","app":"_app/immutable/entry/app.f0060e0a.js","imports":["_app/immutable/entry/start.d5a9114b.js","_app/immutable/chunks/index.c2390a1b.js","_app/immutable/chunks/singletons.76af7d79.js","_app/immutable/chunks/index.e78fc114.js","_app/immutable/entry/app.f0060e0a.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/index.c2390a1b.js"],"stylesheets":[],"fonts":[]},
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
