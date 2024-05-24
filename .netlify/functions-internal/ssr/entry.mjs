import { renderers } from './renderers.mjs';
import { manifest } from './manifest_BvHzbN_h.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';

const _page0 = () => import('./chunks/generic_BghEG4Pi.mjs');
const _page1 = () => import('./chunks/about-us_BFn71kJH.mjs');
const _page2 = () => import('./chunks/contact-us_Bl598tER.mjs');
const _page3 = () => import('./chunks/services_CZCPACCp.mjs');
const _page4 = () => import('./chunks/index_Crn3xFqG.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about-us.astro", _page1],
    ["src/pages/contact-us.astro", _page2],
    ["src/pages/services.astro", _page3],
    ["src/pages/index.astro", _page4]
]);
const middleware = (_, next) => next();
const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware
});
const _args = {
    "middlewareSecret": "b1231fb6-5229-40e0-9414-4d767dba1697"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };