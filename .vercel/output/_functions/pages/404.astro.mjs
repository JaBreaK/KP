import { c as createComponent, g as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_vBMvLF1I.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_FftcqvzB.mjs';
import { $ as $$Header, a as $$Footer } from '../chunks/Footer_fB5ZvKgw.mjs';
import { $ as $$Wapop } from '../chunks/wapop_BfPtY1iM.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Page Not Found - Dye Sablon" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main> <section class="py-20 md:py-32"> <div class="container-custom text-center"> <h1 class="text-9xl font-bold text-primary-600 dark:text-primary-400 mb-8">404</h1> <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Page Not Found</h2> <p class="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
Belom ada apa2 brokss!!
</p> <div class="flex justify-center gap-4 flex-wrap"> <a href="/" class="btn-primary">
Return Home
</a> <a href="/contact" class="btn-secondary">
Contact Support
</a> </div> </div> </section> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })} ${renderComponent($$result, "Wapop", $$Wapop, {})}`;
}, "Z:/WEB/kp-dyesablon-main/src/pages/404.astro", void 0);

const $$file = "Z:/WEB/kp-dyesablon-main/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
