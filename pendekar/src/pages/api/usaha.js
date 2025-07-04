import { db } from "@/lib/db";

export default async function handler(req, res) {
if (req.method !== "POST") {
return res.status(405).json({ message: "Method tidak diizinkan" });
}

const {
nik,
no_kk,
nama,
jenis_kelamin,
tempat_lahir,
tanggal_lahir,
agama,
pekerjaan,
alamat,
rt,
rw,
desa,
kecamatan,
kab_kota,
provinsi,
kewarganegaraan,
nama_usaha,
jenis_usaha,
alamat_usaha,
tahun_berdiri,
status_tempat,
keperluan,
tambahan_keterangan,
} = req.body;

try {
const query = `INSERT INTO usaha (nik, no_kk, nama, jenis_kelamin, tempat_lahir, tanggal_lahir, agama, pekerjaan, alamat, rt, rw, desa, kecamatan, kab_kota, provinsi, kewarganegaraan, nama_usaha, jenis_usaha, alamat_usaha, tahun_berdiri, status_tempat, keperluan, tambahan_keterangan) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

const values = [
  nik || null,
  no_kk || null,
  nama || null,
  jenis_kelamin || null,
  tempat_lahir || null,
  tanggal_lahir || null,
  agama || null,
  pekerjaan || null,
  alamat || null,
  rt || null,
  rw || null,
  desa || null,
  kecamatan || null,
  kab_kota || null,
  provinsi || null,
  kewarganegaraan || null,
  nama_usaha || null,
  jenis_usaha || null,
  alamat_usaha || null,
  tahun_berdiri || null,
  status_tempat || null,
  keperluan || null,
  tambahan_keterangan || null,
];

await db.execute(query, values);

return res.status(200).json({ message: "Data berhasil disimpan" });
} catch (err) {
console.error("Error simpan usaha:", err);
return res.status(500).json({ message: "Terjadi kesalahan server" });
}
}