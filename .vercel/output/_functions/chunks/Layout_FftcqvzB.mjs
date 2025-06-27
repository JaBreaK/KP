import { c as createComponent, a as createAstro, f as addAttribute, e as renderScript, r as renderTemplate, b as renderSlot, d as renderHead, g as renderComponent } from './astro/server_vBMvLF1I.mjs';
import 'kleur/colors';
/* empty css                         */
import 'clsx';
/* empty css                         */

const $$Astro$1 = createAstro();
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "Z:/WEB/kp-dyesablon-main/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "Z:/WEB/kp-dyesablon-main/node_modules/astro/components/ClientRouter.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title,
    description = "Nyablonn Disini brok!!"
  } = Astro2.props;
  return renderTemplate(_a || (_a = __template([`<html lang="id" x-data="{
  darkMode: localStorage.getItem('darkMode') === null
    ? true
    : localStorage.getItem('darkMode') === 'true'
}" x-init="$watch('darkMode', val => localStorage.setItem('darkMode', val))" :class="{ 'dark': darkMode }"> <head>`, '<script src="https://unpkg.com/alpinejs" defer><\/script><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"', '><meta name="description"', "><title>", '</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@800&display=swap" rel="stylesheet"><link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&display=swap" rel="stylesheet"><link href="https://fonts.googleapis.com/css2?family=Quintessential&display=swap" rel="stylesheet"><!-- Quill styles --><link href="https://cdn.quilljs.com/1.3.6/quill.snow.css" rel="stylesheet"><!-- Quill core -->', "", "", '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css">', '</head> <body class="antialiased bg-white dark:bg-secondary-950 text-secondary-900 dark:text-secondary-100 transition-colors duration-300"> <div id="page-wrapper" class="page-transition-wrapper"> ', " </div> ", " ", " </body> </html>"])), renderScript($$result, "Z:/WEB/kp-dyesablon-main/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts"), addAttribute(Astro2.generator, "content"), addAttribute(description, "content"), title, renderScript($$result, "Z:/WEB/kp-dyesablon-main/src/layouts/Layout.astro?astro&type=script&index=1&lang.ts"), renderScript($$result, "Z:/WEB/kp-dyesablon-main/src/layouts/Layout.astro?astro&type=script&index=2&lang.ts"), renderComponent($$result, "ViewTransitions", $$ClientRouter, {}), renderHead(), renderSlot($$result, $$slots["default"]), renderScript($$result, "Z:/WEB/kp-dyesablon-main/src/layouts/Layout.astro?astro&type=script&index=3&lang.ts"), renderScript($$result, "Z:/WEB/kp-dyesablon-main/src/layouts/Layout.astro?astro&type=script&index=4&lang.ts"));
}, "Z:/WEB/kp-dyesablon-main/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
