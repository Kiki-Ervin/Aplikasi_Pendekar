import { db } from "@/lib/db";

export default async function handler(req, res) {
if (req.method !== "POST") {
return res.status(405).json({ message: "Method tidak diizinkan" });
}

const {
nik_anak,
no_kk,
nama_anak,
jenis_kelamin,
tempat_lahir,
tanggal_lahir,
agama,
anak_ke,
alamat,
rt,
rw,
desa,
kecamatan,
kab_kota,
provinsi,
kewarganegaraan,
nama_ayah,
nama_ibu,
keperluan,
keterangan,
} = req.body;

try {
// Simpan ke tabel kelahiran
const query = `INSERT INTO kelahiran (nik_anak, no_kk, nama_anak, jenis_kelamin, tempat_lahir, tanggal_lahir, agama, anak_ke, alamat, rt, rw, desa, kecamatan, kab_kota, provinsi, kewarganegaraan, nama_ayah, nama_ibu, keperluan, keterangan) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)` ;
const values = [
nik_anak || null,
no_kk || null,
nama_anak || null,
jenis_kelamin || null,
tempat_lahir || null,
tanggal_lahir || null,
agama || null,
anak_ke || null,
alamat || null,
rt || null,
rw || null,
desa || null,
kecamatan || null,
kab_kota || null,
provinsi || null,
kewarganegaraan || null,
nama_ayah || null,
nama_ibu || null,
keperluan || null,
keterangan || null,
];
await db.execute(query, values);


// Simpan ke tabel permohonan
const permohonanQuery = `
  INSERT INTO permohonan (jenis_surat, nama_pemohon, tanggal_permohonan, status, data_lengkap, tanggal_dibuat, keterangan)
  VALUES (?, ?, NOW(), 'dikirim', ?, NOW(), 'Pengajuan sudah dikirim')
`;
await db.execute(permohonanQuery, [
  "Surat Keterangan Kelahiran",
  nama_ayah || "Tidak Diketahui",
  JSON.stringify(req.body),
]);

return res.status(200).json({ message: "Data berhasil disimpan" });
} catch (err) {
console.error("Error simpan kelahiran:", err);
return res.status(500).json({ message: "Terjadi kesalahan server" });
}
}