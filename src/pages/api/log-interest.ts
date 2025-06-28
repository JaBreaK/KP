// src/pages/api/log-interest.ts (MODIFIKASI)
import type { APIRoute } from 'astro';
import { supabase } from '../../lib/supabase'; // Pastikan path ini benar

export const POST: APIRoute = async ({ request }) => {
  const { nama_produk } = await request.json();

  if (!nama_produk) {
    return new Response(JSON.stringify({ message: 'Data produk tidak lengkap.' }), { status: 400 });
  }

  // Siapkan data untuk dimasukkan ke tabel pesan_masuk
  const dataToInsert = {
    nama: 'Minat Custom (Otomatis)', // Placeholder untuk nama
    email: 'system@log.com',        // Placeholder untuk email
    deskripsi: `Pengguna tertarik untuk custom produk: "${nama_produk}"`,
    is_read: true // Langsung tandai sudah dibaca agar tidak muncul di notifikasi
  };

  const { error } = await supabase
    .from('pesan_masuk') // DIUBAH: Menyimpan ke tabel pesan_masuk
    .insert([dataToInsert]);

  if (error) {
    console.error('Supabase log interest error:', error.message);
    return new Response(JSON.stringify({ message: 'Gagal mencatat minat.' }), { status: 200 });
  }

  return new Response(JSON.stringify({ message: 'Minat berhasil dicatat.' }), { status: 200 });
};