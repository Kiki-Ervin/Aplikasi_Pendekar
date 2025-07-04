import { db } from "@/lib/db";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method tidak diizinkan" });
  }

  const {
    nik_penyelenggara,
    no_kk,
    nama_penyelenggara,
    tempat_lahir,
    tanggal_lahir,
    pekerjaan,
    alamat_acara,
    tanggal_kegiatan,
    waktu_mulai,
    waktu_selesai,
    jenis_acara,
    deskripsi_acara,
    keperluan,
    tambahan_keterangan,
  } = req.body;

  try {
    const query = `INSERT INTO keramaian (nik_penyelenggara, no_kk, nama_penyelenggara, tempat_lahir, tanggal_lahir, pekerjaan, alamat_acara, tanggal_kegiatan, waktu_mulai, waktu_selesai, jenis_acara, deskripsi_acara, keperluan, tambahan_keterangan) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    const values = [
      nik_penyelenggara || null,
      no_kk || null,
      nama_penyelenggara || null,
      tempat_lahir || null,
      tanggal_lahir || null,
      pekerjaan || null,
      alamat_acara || null,
      tanggal_kegiatan || null,
      waktu_mulai || null,
      waktu_selesai || null,
      jenis_acara || null,
      deskripsi_acara || null,
      keperluan || null,
      tambahan_keterangan || null,
    ];

    await db.execute(query, values);

    return res.status(200).json({ message: "Data berhasil disimpan" });
  } catch (err) {
    console.error("Error simpan keramaian:", err);
    return res.status(500).json({ message: "Terjadi kesalahan server" });
  }
}
