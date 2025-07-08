import { db } from "@/lib/db";

export default async function handler(req, res) {
if (req.method !== "POST") {
return res.status(405).json({ message: "Method tidak diizinkan" });
}

const {
nik,
no_kk,
nama_ktp,
jenis_kelamin,
tempat_lahir,
tanggal_lahir,
agama,
pekerjaan,
nama_di_dokumen,
jenis_dokumen,
alamat,
rt,
rw,
desa,
kecamatan,
kab_kota,
provinsi,
kewarganegaraan,
keperluan,
tambahan_keterangan,
} = req.body;

try {
// Simpan ke tabel beda_nama
const query = `
  INSERT INTO beda_nama (
    nik, no_kk, nama_ktp, jenis_kelamin, tempat_lahir, tanggal_lahir, agama, pekerjaan, 
    nama_di_dokumen, jenis_dokumen, alamat, rt, rw, desa, kecamatan, kab_kota, provinsi, 
    kewarganegaraan, keperluan, tambahan_keterangan
  ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
`;


const values = [
  nik || null,
  no_kk || null,
  nama_ktp || null,
  jenis_kelamin || null,
  tempat_lahir || null,
  tanggal_lahir || null,
  agama || null,
  pekerjaan || null,
  nama_di_dokumen || null,
  jenis_dokumen || null,
  alamat || null,
  rt || null,
  rw || null,
  desa || null,
  kecamatan || null,
  kab_kota || null,
  provinsi || null,
  kewarganegaraan || null,
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
  "Surat Keterangan Beda Nama",
  nama_ktp || "Tidak Diketahui",
  JSON.stringify(req.body),
]);

return res.status(200).json({ message: "Data berhasil disimpan" });
} catch (err) {
console.error("Error simpan beda nama:", err);
return res.status(500).json({ message: "Terjadi kesalahan server" });
}
}