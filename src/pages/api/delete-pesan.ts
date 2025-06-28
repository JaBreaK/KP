// src/pages/api/delete-pesan.ts
import type { APIRoute } from 'astro';
import { supabase } from '../../lib/supabase'; // Pastikan path ini benar

export const POST: APIRoute = async ({ request }) => {
  const { id } = await request.json(); // Ambil ID pesan yang akan dihapus

  if (!id) {
    return new Response(JSON.stringify({ message: 'ID pesan dibutuhkan.' }), { status: 400 });
  }

  // Hapus data dari tabel 'pesan_masuk' berdasarkan ID
  const { error } = await supabase
    .from('pesan_masuk')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Supabase delete error:', error.message);
    return new Response(JSON.stringify({ message: 'Gagal menghapus pesan.' }), { status: 500 });
  }

  return new Response(JSON.stringify({ message: 'Pesan berhasil dihapus!' }), { status: 200 });
};