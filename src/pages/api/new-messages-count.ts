// src/pages/api/new-messages-count.ts
import type { APIRoute } from 'astro';
import { supabase } from '../../lib/supabase'; // Pastikan path ini benar

export const GET: APIRoute = async () => {
  // Hitung semua pesan yang kolom is_read nya masih false
  const { count, error } = await supabase
    .from('pesan_masuk')
    .select('id', { count: 'exact', head: true })
    .eq('is_read', false);

  if (error) {
    return new Response(JSON.stringify({ message: 'Gagal mengambil data.' }), { status: 500 });
  }

  return new Response(JSON.stringify({ count: count ?? 0 }), { status: 200 });
};