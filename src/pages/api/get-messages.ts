// src/pages/api/get-messages.ts
import type { APIRoute } from 'astro';
import { supabase } from '../../lib/supabase'; // Pastikan path ini benar

export const GET: APIRoute = async ({ url }) => {
  const page = parseInt(url.searchParams.get('page') || '1');
  const limit = 10;
  const offset = (page - 1) * limit;

  const { data, error } = await supabase
    .from('pesan_masuk')
    .select('*')
    .order('created_at', { ascending: false })
    .range(offset, offset + limit - 1);

  if (error) {
    return new Response(JSON.stringify({ message: 'Gagal mengambil pesan.' }), { status: 500 });
  }

  return new Response(JSON.stringify(data), { status: 200 });
};