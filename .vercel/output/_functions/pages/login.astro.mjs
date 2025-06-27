import { c as createComponent, r as renderTemplate, d as renderHead, g as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_vBMvLF1I.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_FftcqvzB.mjs';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Login$1 = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template([`<html lang="en" data-astro-cid-ch3gdv5f> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Staff Login</title><script type="module">
      import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

      const supabaseUrl = 'https://pmfzypvynmyotmvbgafi.supabase.co';
      const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBtZnp5cHZ5bm15b3RtdmJnYWZpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYxNTcxNTgsImV4cCI6MjA2MTczMzE1OH0.NimEhbTS9Rz_GGXpEABU_rWunPB6TUN7S4ufTS7FNiM';
      const supabase = createClient(supabaseUrl, supabaseKey);

      document.addEventListener('DOMContentLoaded', () => {
        const staffSession = localStorage.getItem('staffSession');
        if (staffSession) {
          window.location.href = '/admin';
          return;
        }

        const form = document.querySelector('.login-form');
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');
        const errorMsg = document.createElement('p');
        errorMsg.id = 'error-msg';
        errorMsg.className = 'text-red-500 text-sm mt-2 hidden';
        form.appendChild(errorMsg);

        form.addEventListener('submit', async e => {
          e.preventDefault();
          errorMsg.textContent = '';
          errorMsg.classList.add('hidden');

          const email = emailInput.value.trim();
          const password = passwordInput.value;

          const { data, error } = await supabase
            .from('staff')
            .select('id, email')
            .eq('email', email)
            .eq('password', password)
            .single();

          if (error || !data) {
            errorMsg.textContent = 'Email atau password salah';
            errorMsg.classList.remove('hidden');
          } else {
            localStorage.setItem('staffSession', JSON.stringify({
              id: data.id,
              email: data.email,
              loggedAt: new Date().toISOString()
            }));
            window.location.href = '/admin';
          }
        });
      });
    <\/script>`, '</head> <body class="bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2]" data-astro-cid-ch3gdv5f> <a href="/" class="back-btn" data-astro-cid-ch3gdv5f> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-ch3gdv5f> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" data-astro-cid-ch3gdv5f></path> </svg>\nBack to Home\n</a> <main class="min-h-screen flex items-center justify-center p-4" data-astro-cid-ch3gdv5f> <div class="bg-white rounded-xl shadow-2xl p-8 md:p-10 w-full max-w-md transform -translate-y-5 animate-fade-in-up" data-astro-cid-ch3gdv5f> <div class="text-center mb-8" data-astro-cid-ch3gdv5f> <div class="mx-auto mb-4 w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center p-2 animate-pulse" data-astro-cid-ch3gdv5f> <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#3498db" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-10 h-10 md:w-12 md:h-12" data-astro-cid-ch3gdv5f> <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" data-astro-cid-ch3gdv5f></path> <circle cx="12" cy="7" r="4" data-astro-cid-ch3gdv5f></circle> </svg> </div> <h1 class="text-2xl font-bold text-slate-800 mb-2" data-astro-cid-ch3gdv5f>STAFF LOGIN</h1> <div class="w-12 h-1 bg-blue-500 rounded-full mx-auto" data-astro-cid-ch3gdv5f></div> </div> <form class="login-form space-y-6" data-astro-cid-ch3gdv5f> <div data-astro-cid-ch3gdv5f> <label for="email" class="block text-sm font-medium text-slate-700 mb-2" data-astro-cid-ch3gdv5f>Email</label> <input id="email" type="email" placeholder="Enter your email" class="w-full px-4 py-3 border-2 border-gray-200 rounded-lg \n                     focus:border-blue-500 focus:ring-2 focus:ring-blue-200 \n                     transition-all duration-300 outline-none \n                     text-gray-800 placeholder-gray-400 \n                     focus:scale-105 focus:shadow-lg" data-astro-cid-ch3gdv5f> </div> <div data-astro-cid-ch3gdv5f> <label for="password" class="block text-sm font-medium text-slate-700 mb-2" data-astro-cid-ch3gdv5f>Password</label> <input id="password" type="password" placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022" class="w-full px-4 py-3 border-2 border-gray-200 rounded-lg \n                     focus:border-blue-500 focus:ring-2 focus:ring-blue-200 \n                     transition-all duration-300 outline-none \n                     text-gray-800 placeholder-gray-400 \n                     focus:scale-105 focus:shadow-lg" data-astro-cid-ch3gdv5f> </div> <button type="submit" class="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold py-4 rounded-lg \n                   hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 \n                   flex items-center justify-center gap-2 group" data-astro-cid-ch3gdv5f>\nSign In\n<span class="group-hover:translate-x-1 transition-transform duration-200 group-hover:animate-bounce" data-astro-cid-ch3gdv5f>\u2192</span> </button> <p class="text-center text-sm text-gray-500 mt-4" data-astro-cid-ch3gdv5f> <a href="/recovery" class="text-blue-600 hover:underline" data-astro-cid-ch3gdv5f>Lupa password?</a> </p> </form> </div> </main> </body></html>'])), renderHead());
}, "Z:/WEB/kp-dyesablon-main/src/components/login.astro", void 0);

const $$Login = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Login - Dye Apparel" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "Loginform", $$Login$1, {})} </main> ` })}`;
}, "Z:/WEB/kp-dyesablon-main/src/pages/login.astro", void 0);

const $$file = "Z:/WEB/kp-dyesablon-main/src/pages/login.astro";
const $$url = "/login";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Login,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
