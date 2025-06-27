// src/pages/api/save-message.ts
import type { APIRoute } from 'astro';
import { supabase } from '../../lib/supabase'; // Pastikan path ini benar

export const POST: APIRoute = async ({ request }) => {
  // Ambil data yang dikirim dari form
  const { nama, email, deskripsi } = await request.json();

  // Validasi sederhana
  if (!nama || !email || !deskripsi) {
    return new Response(
      JSON.stringify({ message: 'Nama, email, dan deskripsi wajib diisi.' }),
      { status: 400 }
    );
  }

  // Simpan data ke tabel 'pesan_masuk'
  const { error } = await supabase
    .from('pesan_masuk')
    .insert([{ nama, email, deskripsi }]);

  // Jika ada error dari Supabase
  if (error) {
    console.error('Supabase error:', error.message);
    return new Response(
      JSON.stringify({ message: 'Gagal menyimpan pesan ke database.' }),
      { status: 500 }
    );
  }

  // Jika berhasil
  return new Response(
    JSON.stringify({ message: 'Pesan berhasil disimpan!' }),
    { status: 200 }
  );
};