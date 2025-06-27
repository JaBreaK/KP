import { c as createComponent, a as createAstro, r as renderTemplate, m as maybeRenderHead, f as addAttribute, g as renderComponent } from '../chunks/astro/server_vBMvLF1I.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_FftcqvzB.mjs';
import { $ as $$Header, a as $$Footer } from '../chunks/Footer_fB5ZvKgw.mjs';
import 'clsx';
import { s as supabase } from '../chunks/supabase_Bue7KAyD.mjs';
/* empty css                                 */
import { $ as $$Wapop } from '../chunks/wapop_BfPtY1iM.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Hero;
  return renderTemplate(_a || (_a = __template(["<!-- Hero Carousel Section -->", `<section id="hero-carousel" class="relative overflow-hidden h-screen hero-section"> <!-- Slides Container --> <div id="slides" class="absolute inset-0"> <!-- Slides akan di-inject di sini --> </div> <!-- Dark Overlay for Contrast --> <div class="absolute inset-0 bg-black/30 dark:bg-black/50"></div> <!-- Content --> <div class="relative z-10 container-custom flex items-center justify-center h-full"> <!-- Hero Content --> <div class="text-white text-center px-4"> <h1 class="text-4xl sm:text-6xl font-bold"> <span class="font-brand1 text-[#D4AF37]">DYE</span> <span class="font-display">APPAREL</span> </h1> <p class="mt-4 text-xl">Custom Tanpa Batas</p> <a href="https://wa.me/c/6289601651641" target="_blank" class="mt-6 inline-block btn-outline">
Custom Sekarang
</a> </div> </div> </section> <!-- Script Supabase & Carousel Logic --> <script type="module">
  import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

  // ======= KONFIGURASI SUPABASE =======
  const SUPABASE_URL = 'https://pmfzypvynmyotmvbgafi.supabase.co';
  const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBtZnp5cHZ5bm15b3RtdmJnYWZpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYxNTcxNTgsImV4cCI6MjA2MTczMzE1OH0.NimEhbTS9Rz_GGXpEABU_rWunPB6TUN7S4ufTS7FNiM'; // <-- Ganti dengan anon key Anda
  const TABLE_NAME = 'banner'; // tabel banner
  // Jika kolom 'gambar' hanya menyimpan path (misal 'banner/xxx.png'), 
  // Anda perlu juga BUCKET_NAME untuk resolve public URL. 
  // Jika kolom 'gambar' sudah URL penuh, ignore BUCKET_NAME.
  const BUCKET_NAME = 'images'; 
  // Prefix public URL Supabase Storage (jika butuh parse/resolve):
  const STORAGE_PUBLIC_BASE = \`\${SUPABASE_URL}/storage/v1/object/public/\${BUCKET_NAME}/\`;
  // ==================================

  const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

  // Variabel interval dan index carousel
  let carouselIntervalId = null;
  let carouselCurrentIndex = 0;

  // Inisiasi carousel: fetch data banner, generate slides, set interval
  async function initHeroCarousel() {
    // Bersihkan interval lama jika ada
    if (carouselIntervalId) {
      clearInterval(carouselIntervalId);
      carouselIntervalId = null;
    }
    const slidesContainer = document.getElementById('slides');
    if (!slidesContainer) {
      console.warn('Hero carousel: elemen #slides tidak ditemukan');
      return;
    }
    // Kosongkan kontainer slide agar tak duplikasi
    slidesContainer.innerHTML = '';
    carouselCurrentIndex = 0;

    // 1. Fetch data banner dari Supabase
    const { data: banners, error } = await supabase
      .from(TABLE_NAME)
      .select('gambar') // ambil kolom gambar saja; bisa tambahkan kolom lain jika perlu urutan tertentu
      .order('nama', { ascending: true }); // urutkan sesuai kolom yang diinginkan
    if (error) {
      console.error('Error fetch banner untuk carousel:', error);
      // fallback: Anda bisa menampilkan slide default atau keluar
      return;
    }
    if (!banners || banners.length === 0) {
      console.warn('Tidak ada data banner untuk carousel');
      // opsional: tampilkan fallback slide statis
      return;
    }

    // 2. Generate slide elements berdasarkan data
    banners.forEach((item, idx) => {
      const div = document.createElement('div');
      // Kita beri class absolute inset-0 bg-cover blur opacity-0 transition
      div.className = 'absolute inset-0 bg-center bg-cover filter blur-[3px] opacity-0 transition-opacity duration-1000';
      div.dataset.index = idx;
      // Tentukan URL gambar:
      let imageUrl = item.gambar;
      // Jika kolom 'gambar' menyimpan path saja, resolve menjadi publicUrl:
      if (imageUrl && !imageUrl.startsWith('http://') && !imageUrl.startsWith('https://')) {
        imageUrl = STORAGE_PUBLIC_BASE + imageUrl;
      }
      // Jika masih null/undefined, bisa skip atau gunakan fallback:
      if (!imageUrl) {
        console.warn(\`Banner index \${idx} tidak punya URL gambar, skip slide\`);
        return;
      }
      div.style.backgroundImage = \`url(\${imageUrl})\`;
      slidesContainer.appendChild(div);
    });

    const slideCount = slidesContainer.children.length;
    if (slideCount === 0) {
      console.warn('Tidak ada slide valid setelah generate');
      return;
    }

    // 3. Fungsi untuk menampilkan slide berdasarkan index
    function showSlide(index) {
      const slides = slidesContainer.children;
      if (!slides || slides.length === 0) return;
      // sembunyikan semua
      for (const slide of slides) {
        slide.classList.remove('opacity-100');
        slide.classList.add('opacity-0');
      }
      // tampilkan slide idx
      const idx = index % slideCount;
      slides[idx].classList.remove('opacity-0');
      slides[idx].classList.add('opacity-100');
      carouselCurrentIndex = idx;
    }

    // 4. Next slide
    function nextSlide() {
      showSlide((carouselCurrentIndex + 1) % slideCount);
    }

    // 5. Inisialisasi tampilan pertama dan interval
    showSlide(0);
    carouselIntervalId = setInterval(nextSlide, 5000);
  }

  // Cleanup sebelum Turbo cache halaman
  function cleanupHeroCarousel() {
    if (carouselIntervalId) {
      clearInterval(carouselIntervalId);
      carouselIntervalId = null;
    }
    const slidesContainer = document.getElementById('slides');
    if (slidesContainer) {
      slidesContainer.innerHTML = '';
    }
  }

  // Pada Astro, ketika halaman dimuat ulang via Turbo (partial navigation), 
  // kita hook event astro:page-load agar inisiasi ulang carousel.
  document.addEventListener('astro:page-load', () => {
    initHeroCarousel();
  });
  // Jika tidak pakai Astro/Turbo, Anda bisa inisiasi di DOMContentLoaded:
  document.addEventListener('DOMContentLoaded', () => {
    initHeroCarousel();
  });
  // Jika perlu cleanup pada unload, Anda bisa listen sebelum Turbo cache:
  document.addEventListener('astro:before-leave', () => {
    cleanupHeroCarousel();
  });
<\/script>`], ["<!-- Hero Carousel Section -->", `<section id="hero-carousel" class="relative overflow-hidden h-screen hero-section"> <!-- Slides Container --> <div id="slides" class="absolute inset-0"> <!-- Slides akan di-inject di sini --> </div> <!-- Dark Overlay for Contrast --> <div class="absolute inset-0 bg-black/30 dark:bg-black/50"></div> <!-- Content --> <div class="relative z-10 container-custom flex items-center justify-center h-full"> <!-- Hero Content --> <div class="text-white text-center px-4"> <h1 class="text-4xl sm:text-6xl font-bold"> <span class="font-brand1 text-[#D4AF37]">DYE</span> <span class="font-display">APPAREL</span> </h1> <p class="mt-4 text-xl">Custom Tanpa Batas</p> <a href="https://wa.me/c/6289601651641" target="_blank" class="mt-6 inline-block btn-outline">
Custom Sekarang
</a> </div> </div> </section> <!-- Script Supabase & Carousel Logic --> <script type="module">
  import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

  // ======= KONFIGURASI SUPABASE =======
  const SUPABASE_URL = 'https://pmfzypvynmyotmvbgafi.supabase.co';
  const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBtZnp5cHZ5bm15b3RtdmJnYWZpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYxNTcxNTgsImV4cCI6MjA2MTczMzE1OH0.NimEhbTS9Rz_GGXpEABU_rWunPB6TUN7S4ufTS7FNiM'; // <-- Ganti dengan anon key Anda
  const TABLE_NAME = 'banner'; // tabel banner
  // Jika kolom 'gambar' hanya menyimpan path (misal 'banner/xxx.png'), 
  // Anda perlu juga BUCKET_NAME untuk resolve public URL. 
  // Jika kolom 'gambar' sudah URL penuh, ignore BUCKET_NAME.
  const BUCKET_NAME = 'images'; 
  // Prefix public URL Supabase Storage (jika butuh parse/resolve):
  const STORAGE_PUBLIC_BASE = \\\`\\\${SUPABASE_URL}/storage/v1/object/public/\\\${BUCKET_NAME}/\\\`;
  // ==================================

  const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

  // Variabel interval dan index carousel
  let carouselIntervalId = null;
  let carouselCurrentIndex = 0;

  // Inisiasi carousel: fetch data banner, generate slides, set interval
  async function initHeroCarousel() {
    // Bersihkan interval lama jika ada
    if (carouselIntervalId) {
      clearInterval(carouselIntervalId);
      carouselIntervalId = null;
    }
    const slidesContainer = document.getElementById('slides');
    if (!slidesContainer) {
      console.warn('Hero carousel: elemen #slides tidak ditemukan');
      return;
    }
    // Kosongkan kontainer slide agar tak duplikasi
    slidesContainer.innerHTML = '';
    carouselCurrentIndex = 0;

    // 1. Fetch data banner dari Supabase
    const { data: banners, error } = await supabase
      .from(TABLE_NAME)
      .select('gambar') // ambil kolom gambar saja; bisa tambahkan kolom lain jika perlu urutan tertentu
      .order('nama', { ascending: true }); // urutkan sesuai kolom yang diinginkan
    if (error) {
      console.error('Error fetch banner untuk carousel:', error);
      // fallback: Anda bisa menampilkan slide default atau keluar
      return;
    }
    if (!banners || banners.length === 0) {
      console.warn('Tidak ada data banner untuk carousel');
      // opsional: tampilkan fallback slide statis
      return;
    }

    // 2. Generate slide elements berdasarkan data
    banners.forEach((item, idx) => {
      const div = document.createElement('div');
      // Kita beri class absolute inset-0 bg-cover blur opacity-0 transition
      div.className = 'absolute inset-0 bg-center bg-cover filter blur-[3px] opacity-0 transition-opacity duration-1000';
      div.dataset.index = idx;
      // Tentukan URL gambar:
      let imageUrl = item.gambar;
      // Jika kolom 'gambar' menyimpan path saja, resolve menjadi publicUrl:
      if (imageUrl && !imageUrl.startsWith('http://') && !imageUrl.startsWith('https://')) {
        imageUrl = STORAGE_PUBLIC_BASE + imageUrl;
      }
      // Jika masih null/undefined, bisa skip atau gunakan fallback:
      if (!imageUrl) {
        console.warn(\\\`Banner index \\\${idx} tidak punya URL gambar, skip slide\\\`);
        return;
      }
      div.style.backgroundImage = \\\`url(\\\${imageUrl})\\\`;
      slidesContainer.appendChild(div);
    });

    const slideCount = slidesContainer.children.length;
    if (slideCount === 0) {
      console.warn('Tidak ada slide valid setelah generate');
      return;
    }

    // 3. Fungsi untuk menampilkan slide berdasarkan index
    function showSlide(index) {
      const slides = slidesContainer.children;
      if (!slides || slides.length === 0) return;
      // sembunyikan semua
      for (const slide of slides) {
        slide.classList.remove('opacity-100');
        slide.classList.add('opacity-0');
      }
      // tampilkan slide idx
      const idx = index % slideCount;
      slides[idx].classList.remove('opacity-0');
      slides[idx].classList.add('opacity-100');
      carouselCurrentIndex = idx;
    }

    // 4. Next slide
    function nextSlide() {
      showSlide((carouselCurrentIndex + 1) % slideCount);
    }

    // 5. Inisialisasi tampilan pertama dan interval
    showSlide(0);
    carouselIntervalId = setInterval(nextSlide, 5000);
  }

  // Cleanup sebelum Turbo cache halaman
  function cleanupHeroCarousel() {
    if (carouselIntervalId) {
      clearInterval(carouselIntervalId);
      carouselIntervalId = null;
    }
    const slidesContainer = document.getElementById('slides');
    if (slidesContainer) {
      slidesContainer.innerHTML = '';
    }
  }

  // Pada Astro, ketika halaman dimuat ulang via Turbo (partial navigation), 
  // kita hook event astro:page-load agar inisiasi ulang carousel.
  document.addEventListener('astro:page-load', () => {
    initHeroCarousel();
  });
  // Jika tidak pakai Astro/Turbo, Anda bisa inisiasi di DOMContentLoaded:
  document.addEventListener('DOMContentLoaded', () => {
    initHeroCarousel();
  });
  // Jika perlu cleanup pada unload, Anda bisa listen sebelum Turbo cache:
  document.addEventListener('astro:before-leave', () => {
    cleanupHeroCarousel();
  });
<\/script>`])), maybeRenderHead());
}, "Z:/WEB/kp-dyesablon-main/src/components/Hero.astro", void 0);

const $$Koleksi = createComponent(async ($$result, $$props, $$slots) => {
  const { data: templates, error } = await supabase.from("koleksi").select("*");
  if (error) {
    console.error("Gagal ambil data:", error.message);
  }
  return renderTemplate`${maybeRenderHead()}<section class="relative overflow-hidden py-20 bg-white dark:bg-gray-900 px-4 sm:px-6 lg:px-8" data-astro-cid-3dap6a35> <div class="relative z-10 max-w-7xl mx-auto" data-astro-cid-3dap6a35> <h2 class="text-center mb-6 text-gray-900 dark:text-white" data-astro-cid-3dap6a35>
KOLEKSI KAMI
</h2> <div class="grid grid-cols-3 auto-rows-[300px] gap-4" data-astro-cid-3dap6a35> ${templates?.map((item, index) => {
    const spanClass = index === 0 ? "row-span-2" : index === 1 || index === 2 ? "col-span-2" : "";
    return renderTemplate`<div data-animate="fade-up" data-delay="200"${addAttribute(`masonry-item group ${spanClass} h-full`, "class")} data-astro-cid-3dap6a35> <a${addAttribute(`/kategori`, "href")} class="block h-full" data-astro-cid-3dap6a35> <div class="image-wrapper shadow-lg hover:shadow-2xl" data-astro-cid-3dap6a35> <img${addAttribute(item.gambar, "src")}${addAttribute(item.nama, "alt")} class="w-full h-full object-cover" loading="lazy" data-astro-cid-3dap6a35> <div class="title-overlay" data-astro-cid-3dap6a35> <h3 class="text-white text-base font-medium tracking-wide" data-astro-cid-3dap6a35> ${item.nama} </h3> </div> </div> </a> </div>`;
  })} </div> <div data-animate="fade-up" data-delay="300" class="mt-16 bg-gradient-to-r from-[#D4AF37] to-[#BFA332] rounded-2xl p-8 md:p-12 relative overflow-hidden" data-astro-cid-3dap6a35> <!-- overlay blur dengan tint emas --> <div class="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/30 to-[#BFA332]/30 backdrop-blur-xs" data-astro-cid-3dap6a35></div> <div class="relative z-10 text-center md:text-left md:flex items-center justify-between" data-astro-cid-3dap6a35> <div class="mb-6 md:mb-0 md:mr-8" data-astro-cid-3dap6a35> <h3 class="text-2xl md:text-3xl font-bold text-white mb-4" data-astro-cid-3dap6a35>
Siap Tingkatkan Kualitasmu?
</h3> <p class="text-white/80 mb-4" data-astro-cid-3dap6a35>Pilih Desain Terbaik</p> </div> <a href="/kategori" class="inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-300 focus:outline-hidden focus:ring-2 focus:ring-offset-2 bg-white text-[#D4AF37] hover:bg-gray-100 focus:ring-white" data-astro-cid-3dap6a35>
Lebih Banyak
<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor" data-astro-cid-3dap6a35> <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" data-astro-cid-3dap6a35></path> </svg> </a> </div> </div> </div> </section>`;
}, "Z:/WEB/kp-dyesablon-main/src/components/Koleksi.astro", void 0);

const $$Bahan = createComponent(async ($$result, $$props, $$slots) => {
  const { data: bahan, error } = await supabase.from("bahan").select("*");
  if (error) {
    console.error("Gagal ambil data bahan:", error.message);
  }
  return renderTemplate`${maybeRenderHead()}<section id="materials" class="section"> <div class="container-custom"> <div class=" max-w-3xl mx-auto mb-16"> <h2 class="text-center mb-6 text-gray-900 dark:text-white">Terbuat Dari Bahan Terbaik</h2> </div> <div data-animate="fade-up" data-delay="400" class="grid md:grid-cols-3 gap-8"> ${bahan?.map((item, index) => renderTemplate`<div class="card p-6 border border-gray-200 dark:border-gray-700 slide-up"${addAttribute({ animationDelay: `${index * 150}ms` }, "style")}> <img${addAttribute(item.gambar, "src")}${addAttribute(item.nama, "alt")} class="w-full h-40 object-cover rounded-lg mb-4" loading="lazy"> <h3 class="font-semibold text-lg text-gray-900 dark:text-white mb-2"> ${item.nama} </h3> <p class="text-gray-700 dark:text-gray-300 text-sm"> ${item.desk} </p> </div>`)} </div> </div> </section>`;
}, "Z:/WEB/kp-dyesablon-main/src/components/bahan.astro", void 0);

const $$Faq = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="py-16 bg-white dark:bg-gray-800"> <div class="container-custom"> <div class="max-w-4xl mx-auto"> <!-- FAQ Categories Navigation --> <div class="flex flex-wrap justify-center gap-4 mb-12"></div> <!-- General FAQs --> <div id="general" class="mb-16"> <h2 data-animate="fade-up" data-delay="500" class="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center"> <span class="inline-block rounded-full bg-primary-100 dark:bg-primary-900 p-2 mr-3"> <svg class="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> </span>
Pertanyaan Umum
</h2> <div class="space-y-6"> <div data-animate="fade-up" data-delay="600" class="card p-6 border border-gray-200 dark:border-gray-700"> <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">Bagaimana cara order?</h3> <p class="text-gray-600 dark:text-gray-300"></p><ol> <li>1. Hubungi kami via WhatsApp</li> <li>2. Kirim desain dan detail pesanan</li> <li>3. Kami kirim invoice dan mockup</li> <li>4. Produksi setelah pembayaran DP</li> <li>5. Pesanan dikirim sesuai jadwal</li> </ol>  </div> <div data-animate="fade-up" data-delay="700" class="card p-6 border border-gray-200 dark:border-gray-700"> <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">Apakah saya bisa pesan desain sendiri?</h3> <p class="text-gray-600 dark:text-gray-300">
Ya, tentu! Kamu bisa kirim desainmu sendiri dalam format PNG, JPG, atau PDF. Kami juga menyediakan jasa desain jika kamu belum punya desain sendiri.
</p> </div> <div data-animate="fade-up" data-delay="800" class="card p-6 border border-gray-200 dark:border-gray-700"> <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">Minimum order berapa?</h3> <p class="text-gray-600 dark:text-gray-300">
Untuk sablon, minimal order biasanya 12 pcs. Untuk bordir, minimal 6 pcs. Tapi kami juga menerima order satuan untuk produk tertentu—hubungi kami untuk info lengkap.
</p> </div> <div data-animate="fade-up" data-delay="900" class="card p-6 border border-gray-200 dark:border-gray-700"> <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">Berapa lama proses produksinya?</h3> <p class="text-gray-600 dark:text-gray-300">
Waktu produksi tergantung jumlah dan jenis pesanan. Untuk pesanan standar 12–24 pcs, biasanya 3–7 hari kerja. Kami juga menyediakan layanan express jika dibutuhkan.
</p> </div> </div> </div> </div> </div> </section>`;
}, "Z:/WEB/kp-dyesablon-main/src/components/faq.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Dye Apparel" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main> <!-- Hero animasi fade-up, delay 100ms --> ${renderComponent($$result2, "Hero", $$Hero, {})} <!-- Features animasi fade-up, delay 200ms --> ${renderComponent($$result2, "Koleksi", $$Koleksi, {})} <!-- Bahan animasi fade-up, delay 300ms --> ${renderComponent($$result2, "Bahan", $$Bahan, {})} <!-- Faq animasi fade-up, delay 400ms --> ${renderComponent($$result2, "Faq", $$Faq, {})} </main>  ${renderComponent($$result2, "Footer", $$Footer, {})}  ` })} ${renderComponent($$result, "Wapop", $$Wapop, {})}`;
}, "Z:/WEB/kp-dyesablon-main/src/pages/index.astro", void 0);

const $$file = "Z:/WEB/kp-dyesablon-main/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
