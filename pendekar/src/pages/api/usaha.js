import { db } from "@/lib/db";

export default async function handler(req, res) {
if (req.method !== "POST") {
return res.status(405).json({ message: "Method tidak diizinkan" });
}

const {
nik, no_kk, nama, tempat_lahir, tanggal_lahir, jenis_kelamin,
alamat, rt, rw, desa, kecamatan, kab_kota, provinsi,
jenis_usaha, nama_usaha, alamat_usaha, keperluan
} = req.body;

try {
// Simpan ke tabel usaha
const query = `INSERT INTO usaha (nik, no_kk, nama, tempat_lahir, tanggal_lahir, jenis_kelamin, alamat, rt, rw, desa, kecamatan, kab_kota, provinsi, jenis_usaha, nama_usaha, alamat_usaha, keperluan) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
const values = [
nik || null, no_kk || null, nama || null, tempat_lahir || null, tanggal_lahir || null, jenis_kelamin || null,
alamat || null, rt || null, rw || null, desa || null, kecamatan || null, kab_kota || null, provinsi || null,
jenis_usaha || null, nama_usaha || null, alamat_usaha || null, keperluan || null
];
await db.execute(query, values);


// Simpan ke tabel permohonan
// Simpan ke tabel permohonan
const permohonanQuery = `
  INSERT INTO permohonan (jenis_surat, nama_pemohon, tanggal_permohonan, status, data_lengkap, tanggal_dibuat, keterangan)
  VALUES (?, ?, NOW(), 'dikirim', ?, NOW(), 'Pengajuan sudah dikirim')
`;
await db.execute(permohonanQuery, [
  "Surat Keterangan Usaha",
  nama || "Tidak Diketahui",
  JSON.stringify(req.body),
]);

return res.status(200).json({ message: "Data berhasil disimpan" });
} catch (err) {
console.error("Error simpan usaha:", err);
return res.status(500).json({ message: "Terjadi kesalahan server" });
}
}