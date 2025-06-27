import { c as createComponent, a as createAstro, m as maybeRenderHead, r as renderTemplate } from '../chunks/astro/server_vBMvLF1I.mjs';
import 'kleur/colors';
import 'clsx';
import { s as supabase } from '../chunks/supabase_Bue7KAyD.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  let message = "";
  if (Astro2.request.method === "POST") {
    const formData = await Astro2.request.formData();
    const file = formData.get("file");
    if (file && file instanceof File) {
      const { data, error } = await supabase.storage.from("nama-bucket").upload(`public/${file.name}`, file);
      message = error ? "Upload gagal!" : "Upload berhasil!";
    } else {
      message = "File tidak ditemukan!";
    }
  }
  return renderTemplate`<html> ${maybeRenderHead()}<body> <h1>Upload Gambar</h1> <form method="POST" enctype="multipart/form-data"> <input type="file" name="file"> <button type="submit">Upload</button> </form> <p>${message}</p> </body></html>`;
}, "Z:/WEB/kp-dyesablon-main/src/pages/coba/index.astro", void 0);

const $$file = "Z:/WEB/kp-dyesablon-main/src/pages/coba/index.astro";
const $$url = "/coba";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
