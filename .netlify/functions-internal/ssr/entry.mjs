import { renderers } from './renderers.mjs';
import { manifest } from './manifest_DysJm7xz.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_m6_ZaoiC.mjs');
const _page1 = () => import('./chunks/about-us_KpbEi9wt.mjs');
const _page2 = () => import('./chunks/services_DNDflqkw.mjs');
const _page3 = () => import('./chunks/index_CQgox3ip.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about-us.astro", _page1],
    ["src/pages/services.astro", _page2],
    ["src/pages/index.astro", _page3]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "b45955d2-03e8-4e83-b31a-fedd286a7034"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
