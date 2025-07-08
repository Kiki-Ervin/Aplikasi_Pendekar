import { db } from '@/lib/db';

export default async function handler(req, res) {
if (req.method !== 'POST') {
return res.status(405).json({ message: 'Method tidak diizinkan' });
}

const {
nik,
no_kk,
nama,
jenis_kelamin,
tempat_lahir,
tanggal_lahir,
tanggal_meninggal,
sebab_kematian,
alamat,
rt,
rw,
desa,
kecamatan,
kab_kota,
provinsi,
kewarganegaraan,
nama_pelapor,
hubungan_pelapor,
keperluan,
tambahan_keterangan,
} = req.body;

try {
// Simpan ke tabel kematian
const query = `INSERT INTO kematian (nik, no_kk, nama, jenis_kelamin, tempat_lahir, tanggal_lahir, tanggal_meninggal, sebab_kematian, alamat, rt, rw, desa, kecamatan, kab_kota, provinsi, kewarganegaraan, nama_pelapor, hubungan_pelapor, keperluan, tambahan_keterangan) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

const values = [
  nik || null,
  no_kk || null,
  nama || null,
  jenis_kelamin || null,
  tempat_lahir || null,
  tanggal_lahir || null,
  tanggal_meninggal || null,
  sebab_kematian || null,
  alamat || null,
  rt || null,
  rw || null,
  desa || null,
  kecamatan || null,
  kab_kota || null,
  provinsi || null,
  kewarganegaraan || null,
  nama_pelapor || null,
  hubungan_pelapor || null,
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
  "Surat Keterangan Kematian",
  nama_pelapor || "Tidak Diketahui",
  JSON.stringify(req.body),
]);

return res.status(200).json({ message: 'Data berhasil disimpan' });
} catch (err) {
console.error('Error simpan kematian:', err);
return res.status(500).json({ message: 'Terjadi kesalahan server' });
}
}