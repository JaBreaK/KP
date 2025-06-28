// src/pages/api/update-kontak.ts
import type { APIRoute } from 'astro';
import { supabase } from '../../lib/supabase'; // Pastikan path ini benar

export const POST: APIRoute = async ({ request }) => {
  // Ambil semua data baru dari form
  const dataToUpdate = await request.json();

  // Kita asumsikan hanya ada SATU baris data kontak dengan id = 1
  // Ini adalah praktik umum untuk tabel konfigurasi
  const { error } = await supabase
    .from('kontak') // Nama tabel sesuai screenshot-mu
    .update(dataToUpdate)
    .eq('id', 1); // Update baris yang ID-nya 1

  if (error) {
    console.error('Supabase update error:', error.message);
    return new Response(JSON.stringify({ message: 'Gagal menyimpan perubahan.' }), { status: 500 });
  }

  return new Response(JSON.stringify({ message: 'Informasi kontak berhasil diperbarui!' }), { status: 200 });
};