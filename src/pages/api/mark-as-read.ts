// src/pages/api/mark-as-read.ts
import type { APIRoute } from 'astro';
import { supabase } from '../../lib/supabase'; // Pastikan path ini benar

export const POST: APIRoute = async ({ request }) => {
  const { ids } = await request.json(); // Ambil array ID pesan yang akan diupdate

  if (!ids || !Array.isArray(ids) || ids.length === 0) {
    return new Response(JSON.stringify({ message: 'Array ID dibutuhkan.' }), { status: 400 });
  }

  // Update semua baris yang ID-nya ada di dalam array 'ids'
  const { error } = await supabase
    .from('pesan_masuk')
    .update({ is_read: true }) // Set is_read menjadi true
    .in('id', ids);

  if (error) {
    return new Response(JSON.stringify({ message: 'Gagal mengupdate pesan.' }), { status: 500 });
  }

  return new Response(JSON.stringify({ message: 'Pesan berhasil ditandai sebagai dibaca.' }), { status: 200 });
};