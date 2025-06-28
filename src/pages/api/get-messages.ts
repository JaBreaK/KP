// src/pages/api/get-messages.ts (MODIFIKASI)
import type { APIRoute } from 'astro';
import { supabase } from '../../lib/supabase';

export const GET: APIRoute = async ({ url }) => {
  const page = parseInt(url.searchParams.get('page') || '1');
  const limit = parseInt(url.searchParams.get('limit') || '10');
  const unreadOnly = url.searchParams.get('unread') === 'true';
  const offset = (page - 1) * limit;

  let query = supabase
    .from('pesan_masuk')
    .select('*')
    .order('created_at', { ascending: false })
    .range(offset, offset + limit - 1);

  // Tambahkan filter 'is_read' jika diminta
  if (unreadOnly) {
    query = query.eq('is_read', false);
  }

  const { data, error } = await query;

  if (error) {
    return new Response(JSON.stringify({ message: 'Gagal mengambil pesan.' }), { status: 500 });
  }

  return new Response(JSON.stringify(data), { status: 200 });
};