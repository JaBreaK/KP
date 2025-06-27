import { c as createComponent, a as createAstro, r as renderTemplate, b as renderSlot, d as renderHead, e as renderScript, f as addAttribute } from './astro/server_vBMvLF1I.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */
/* empty css                         */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Layoutadmin = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layoutadmin;
  const {
    title,
    description = "Nyablonn Disini brok!!"
  } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en" data-astro-cid-ffze5pap> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>', '</title><!-- Deskripsi meta, bisa digunakan SEO atau social preview --><meta name="description"', '><!-- QuillJS CSS jika memang butuh editor --><link href="https://cdn.quilljs.com/1.3.6/quill.snow.css" rel="stylesheet">', "", '</head> <body class="antialiased text-gray-800" data-astro-cid-ffze5pap> <!-- Overlay untuk mobile (hanya muncul saat sidebar terbuka) --> <div id="sidebar-overlay" class="fixed inset-0  hidden z-40 md:hidden" data-astro-cid-ffze5pap></div> <div class="flex h-screen bg-gray-100" data-astro-cid-ffze5pap> <!-- Sidebar --> <aside id="sidebar" class="fixed inset-y-0 left-0 w-64 bg-white border-r transform -translate-x-full transition-transform duration-200 ease-in-out z-50\n                  md:relative md:translate-x-0 md:flex md:flex-col" data-astro-cid-ffze5pap> <div class="p-4 flex flex-col flex-1" data-astro-cid-ffze5pap> <!-- Logo / Judul Sidebar --> <a href="/admin" class="text-2xl font-semibold block mb-6 flex items-center" data-astro-cid-ffze5pap> <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 mr-2 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-ffze5pap> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" data-astro-cid-ffze5pap></path> </svg>\nAdmin Panel\n</a> <!-- Navigasi --> <nav class="space-y-2 flex-1 overflow-auto" data-astro-cid-ffze5pap> <a href="/admin/" data-path="/admin/" class="sidebar-link" data-astro-cid-ffze5pap> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 sidebar-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-ffze5pap> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" data-astro-cid-ffze5pap></path> </svg>\nDashboard\n</a> <a href="/admin/katalog" data-path="/admin/katalog" class="sidebar-link" data-astro-cid-ffze5pap> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 sidebar-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-ffze5pap> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" data-astro-cid-ffze5pap></path> </svg>\nKatalog\n</a> <a href="/admin/banner" data-path="/admin/banner" class="sidebar-link" data-astro-cid-ffze5pap> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 sidebar-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-ffze5pap> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" data-astro-cid-ffze5pap></path> </svg>\nBanner\n</a> <a href="/admin/koleksi" data-path="/admin/koleksi" class="sidebar-link" data-astro-cid-ffze5pap> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 sidebar-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-ffze5pap> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" data-astro-cid-ffze5pap></path> </svg>\nKoleksi\n</a> <a href="/admin/bahan" data-path="/admin/bahan" class="sidebar-link" data-astro-cid-ffze5pap> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 sidebar-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-ffze5pap> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" data-astro-cid-ffze5pap></path> </svg>\nBahan\n</a> <!-- Tambah link lain sesuai kebutuhan --> </nav> </div> </aside> <!-- Konten utama --> <div class="flex-1 flex flex-col" data-astro-cid-ffze5pap> <!-- Header --> <header class="flex items-center justify-between bg-white px-4 py-2 shadow-sm" data-astro-cid-ffze5pap> <div class="flex items-center" data-astro-cid-ffze5pap> <!-- Tombol toggle sidebar untuk mobile --> <button id="btn-sidebar-toggle" class="mr-2 md:hidden focus:outline-none" aria-label="Toggle sidebar" data-astro-cid-ffze5pap> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-ffze5pap> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" data-astro-cid-ffze5pap></path> </svg> </button> <h1 class="text-xl font-semibold text-gray-800" data-astro-cid-ffze5pap>', '</h1> </div> <div class="relative" data-astro-cid-ffze5pap> <!-- Profile button & dropdown --> <button id="profile-button" class="flex items-center space-x-2 focus:outline-none" data-astro-cid-ffze5pap> <img src="https://raw.githubusercontent.com/JaBreaK/db/refs/heads/main/kiles-removebg-preview.png" alt="Avatar" class="w-8 h-8 rounded-full" data-astro-cid-ffze5pap> <span id="admin-name" class="text-sm font-medium text-gray-700" data-astro-cid-ffze5pap>Admin</span> <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-ffze5pap> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-astro-cid-ffze5pap></path> </svg> </button> <div id="profile-menu" class="hidden absolute right-0 mt-2 w-40 bg-white border rounded shadow-md z-10" data-astro-cid-ffze5pap> <button id="btn-logout" class="w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-700" data-astro-cid-ffze5pap>Logout</button> <button id="recovery" class="w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-700" data-astro-cid-ffze5pap>Ganti Password</button> </div> </div> </header> <!-- Main content slot --> <main class="p-4 overflow-auto" data-astro-cid-ffze5pap> ', ` </main> </div> </div> <!-- Script global: logout, dropdown profil, highlight active link --> <script type="module" is:client>
    // Logout handler
    document.getElementById("btn-logout")?.addEventListener("click", () => {
      localStorage.removeItem("staffSession");
      window.location.replace("/login");
    });
    // Ganti password
    document.getElementById("recovery")?.addEventListener("click", () => {
      window.location.replace("/recovery");
    });

    // Dropdown profil
    const profileButton = document.getElementById('profile-button');
    const profileMenu = document.getElementById('profile-menu');
    if (profileButton) {
      profileButton.addEventListener("click", (e) => {
        e.stopPropagation();
        profileMenu.classList.toggle('hidden');
      });
      document.addEventListener("click", (e) => {
        if (!profileButton.contains(e.target) && !profileMenu.contains(e.target)) {
          profileMenu.classList.add("hidden");
        }
      });
    }

    // Ambil nama dari email di localStorage staffSession
    try {
      const session = JSON.parse(localStorage.getItem("staffSession"));
      const email = session?.email ?? "";
      if (email.includes("@")) {
        const name = email.split("@")[0].toUpperCase();
        document.getElementById("admin-name").textContent = name;
      }
    } catch (e) {
      console.warn("Gagal parsing staffSession:", e);
    }

    // Highlight active link di sidebar
    document.addEventListener("DOMContentLoaded", () => {
      const currentPath = window.location.pathname;
      const links = document.querySelectorAll(".sidebar-link");
      links.forEach(link => {
        const path = link.getAttribute("data-path");
        if (path && (currentPath === path || currentPath.startsWith(path + "/"))) {
          link.classList.add("active");
        }
      });
    });
  <\/script> <!-- Script toggling sidebar di mobile --> <script is:client>
    document.addEventListener("DOMContentLoaded", () => {
      const sidebar = document.getElementById("sidebar");
      const overlay = document.getElementById("sidebar-overlay");
      const btnToggle = document.getElementById("btn-sidebar-toggle");

      if (sidebar && overlay && btnToggle) {
        const openSidebar = () => {
          sidebar.classList.remove("-translate-x-full");
          overlay.classList.remove("hidden");
        };
        const closeSidebar = () => {
          sidebar.classList.add("-translate-x-full");
          overlay.classList.add("hidden");
        };

        btnToggle.addEventListener("click", (e) => {
          e.stopPropagation();
          if (sidebar.classList.contains("-translate-x-full")) {
            openSidebar();
          } else {
            closeSidebar();
          }
        });

        // Klik overlay tutup sidebar
        overlay.addEventListener("click", () => {
          closeSidebar();
        });

        // Klik di luar sidebar & tombol, tutup sidebar
        document.addEventListener("click", (e) => {
          if (
            !sidebar.contains(e.target) &&
            !btnToggle.contains(e.target) &&
            !sidebar.classList.contains("-translate-x-full")
          ) {
            closeSidebar();
          }
        });

        // Pastikan ketika resize window
        const mql = window.matchMedia("(min-width: 768px)");
        mql.addEventListener("change", (e) => {
          if (e.matches) {
            // Desktop: tampilkan sidebar, sembunyikan overlay
            sidebar.classList.remove("-translate-x-full");
            overlay.classList.add("hidden");
          } else {
            // Mobile: sembunyikan sidebar default
            sidebar.classList.add("-translate-x-full");
          }
        });
        // Inisialisasi awal
        if (window.matchMedia("(min-width: 768px)").matches) {
          sidebar.classList.remove("-translate-x-full");
          overlay.classList.add("hidden");
        } else {
          sidebar.classList.add("-translate-x-full");
        }
      }
    });
  <\/script> </body> </html>`])), title, addAttribute(description, "content"), renderScript($$result, "Z:/WEB/kp-dyesablon-main/src/layouts/Layoutadmin.astro?astro&type=script&index=0&lang.ts"), renderHead(), title, renderSlot($$result, $$slots["default"]));
}, "Z:/WEB/kp-dyesablon-main/src/layouts/Layoutadmin.astro", void 0);

export { $$Layoutadmin as $ };
