import { renderers } from './renderers.mjs';
import { manifest } from './manifest_Be0TxbKU.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';

const _page0 = () => import('./chunks/generic_GEGeBkWE.mjs');
const _page1 = () => import('./chunks/about-us_8FvF_R_I.mjs');
const _page2 = () => import('./chunks/contact-us_nepm0itX.mjs');
const _page3 = () => import('./chunks/services_B8rEix7B.mjs');
const _page4 = () => import('./chunks/index_Cod9jbnL.mjs');

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
    "middlewareSecret": "d5a2e309-85f7-4a3b-9b73-d72e36ad7b3d"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
