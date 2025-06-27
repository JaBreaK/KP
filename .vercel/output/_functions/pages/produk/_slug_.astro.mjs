import { c as createComponent, a as createAstro, g as renderComponent, r as renderTemplate, m as maybeRenderHead, f as addAttribute, u as unescapeHTML } from '../../chunks/astro/server_vBMvLF1I.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_FftcqvzB.mjs';
import { $ as $$Header, a as $$Footer } from '../../chunks/Footer_fB5ZvKgw.mjs';
import { $ as $$Wapop } from '../../chunks/wapop_BfPtY1iM.mjs';
import { s as supabase } from '../../chunks/supabase_Bue7KAyD.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  const { data: allProducts, error } = await supabase.from("produk").select("slug");
  if (error) {
    console.error("Gagal fetch slugs:", error.message);
    return [];
  }
  return allProducts.map((p) => ({
    params: { slug: p.slug }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const { data: [post], error: postError } = await supabase.from("produk").select("nama, gambar, kategori, deskripsi").eq("slug", slug).limit(1);
  if (postError) {
    console.error("Gagal ambil produk:", postError.message);
  }
  if (!post) {
    return Astro2.redirect("/404");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${post.nama} \u2013 Dye Apparel`, "description": post.deskripsi }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main class="container-custom py-16"> <article class="max-w-3xl mx-auto space-y-8"> <div class="mb-8"> <a href="/kategori" class="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor"> <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd"></path> </svg>
Back to Kategori
</a> </div> <div class="flex items-center justify-between"> <h1 class="text-4xl font-bold text-gray-900 dark:text-white">${post.nama}</h1> <button class="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500" type="button"><a href="https://wa.me/6282213866521">Custom Sekarang</a> </button> </div> <img${addAttribute(post.gambar, "src")}${addAttribute(post.nama, "alt")} class="w-full h-auto rounded-xl object-cover shadow-lg"> <div class="prose prose-lg dark:prose-invert">${unescapeHTML(post.deskripsi)}</div> <div class="flex flex-wrap gap-2"> ${post.kategori.map((cat) => renderTemplate`<span class="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-white rounded-full text-sm"> ${cat} </span>`)} </div> </article> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })} ${renderComponent($$result, "Wapop", $$Wapop, {})}`;
}, "Z:/WEB/kp-dyesablon-main/src/pages/produk/[slug].astro", void 0);

const $$file = "Z:/WEB/kp-dyesablon-main/src/pages/produk/[slug].astro";
const $$url = "/produk/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
