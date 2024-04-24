import { renderers } from './renderers.mjs';
import { manifest } from './manifest_DcKFziTE.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_m6_ZaoiC.mjs');
const _page1 = () => import('./chunks/about-us_DomYFGT4.mjs');
const _page2 = () => import('./chunks/services_Uojx0AAD.mjs');
const _page3 = () => import('./chunks/index_DTbpE8JH.mjs');
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
    "middlewareSecret": "9a6dde54-411a-44b0-bb74-e0fbd529fb48"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
