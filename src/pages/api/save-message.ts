// src/pages/api/save-message.ts (DIPERBARUI)
import type { APIRoute } from 'astro';
import { supabase } from '../../lib/supabase'; // Pastikan path ini benar

export const POST: APIRoute = async ({ request }) => {
  // Sekarang kita juga menerima 'no_wa'
  const { nama, email, deskripsi, no_wa } = await request.json();

  if (!nama || !email || !deskripsi) {
    return new Response(JSON.stringify({ message: 'Data wajib tidak lengkap.' }), { status: 400 });
  }

  // Masukkan semua data, termasuk no_wa, ke database
  const { error } = await supabase
    .from('pesan_masuk')
    .insert([{ nama, email, deskripsi, no_wa }]); // no_wa ditambahkan di sini

  if (error) {
    console.error('Supabase save message error:', error.message);
    return new Response(JSON.stringify({ message: 'Gagal menyimpan pesan.' }), { status: 500 });
  }

  return new Response(JSON.stringify({ message: 'Pesan berhasil dikirim.' }), { status: 200 });
};