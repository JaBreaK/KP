import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_CG2ZwLDn.mjs';
import { manifest } from './manifest_Cd-a4jqn.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/admin/bahan.astro.mjs');
const _page3 = () => import('./pages/admin/banner.astro.mjs');
const _page4 = () => import('./pages/admin/katalog.astro.mjs');
const _page5 = () => import('./pages/admin/koleksi.astro.mjs');
const _page6 = () => import('./pages/admin.astro.mjs');
const _page7 = () => import('./pages/coba.astro.mjs');
const _page8 = () => import('./pages/kategori.astro.mjs');
const _page9 = () => import('./pages/login.astro.mjs');
const _page10 = () => import('./pages/produk/_slug_.astro.mjs');
const _page11 = () => import('./pages/produk.astro.mjs');
const _page12 = () => import('./pages/recovery.astro.mjs');
const _page13 = () => import('./pages/tentangkami.astro.mjs');
const _page14 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/admin/bahan/index.astro", _page2],
    ["src/pages/admin/banner/index.astro", _page3],
    ["src/pages/admin/katalog/index.astro", _page4],
    ["src/pages/admin/koleksi/index.astro", _page5],
    ["src/pages/admin/index.astro", _page6],
    ["src/pages/coba/index.astro", _page7],
    ["src/pages/kategori.astro", _page8],
    ["src/pages/login.astro", _page9],
    ["src/pages/produk/[slug].astro", _page10],
    ["src/pages/produk/index.astro", _page11],
    ["src/pages/recovery.html", _page12],
    ["src/pages/tentangkami.astro", _page13],
    ["src/pages/index.astro", _page14]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "de38e8b9-5954-40b7-bcd2-cd09421cdb24",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
