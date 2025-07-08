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
// Simpan ke tabel keramaian
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

// Simpan ke tabel permohonan
const permohonanQuery = `
  INSERT INTO permohonan (jenis_surat, nama_pemohon, tanggal_permohonan, status, data_lengkap, tanggal_dibuat, keterangan)
  VALUES (?, ?, NOW(), 'dikirim', ?, NOW(), 'Pengajuan sudah dikirim')
`;
await db.execute(permohonanQuery, [
  "Surat Izin Keramaian",
  nama_penyelenggara || "Tidak Diketahui",
  JSON.stringify(req.body),
]);

return res.status(200).json({ message: "Data berhasil disimpan" });
} catch (err) {
console.error("Error simpan keramaian:", err);
return res.status(500).json({ message: "Terjadi kesalahan server" });
}
}