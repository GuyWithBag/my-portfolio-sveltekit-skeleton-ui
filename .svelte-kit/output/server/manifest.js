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
		client: {"start":"_app/immutable/entry/start.fa80376f.js","app":"_app/immutable/entry/app.989a4ebc.js","imports":["_app/immutable/entry/start.fa80376f.js","_app/immutable/chunks/index.ecef51ef.js","_app/immutable/chunks/singletons.8b3a2a46.js","_app/immutable/chunks/index.0e398a80.js","_app/immutable/entry/app.989a4ebc.js","_app/immutable/chunks/preload-helper.cf010ec4.js","_app/immutable/chunks/index.ecef51ef.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
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
