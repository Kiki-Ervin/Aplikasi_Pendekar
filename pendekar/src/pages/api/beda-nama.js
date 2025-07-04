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
const query = `INSERT INTO beda_nama (nik, no_kk, nama_ktp, jenis_kelamin, tempat_lahir, tanggal_lahir, agama, pekerjaan, nama_di_dokumen, jenis_dokumen, alamat, rt, rw, desa, kecamatan, kab_kota, provinsi, kewarganegaraan, keperluan, tambahan_keterangan) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

const values = [
  nik, no_kk, nama_ktp, jenis_kelamin, tempat_lahir, tanggal_lahir, agama, pekerjaan,
  nama_di_dokumen, jenis_dokumen, alamat, rt, rw, desa, kecamatan, kab_kota, provinsi,
  kewarganegaraan, keperluan, tambahan_keterangan,
];


await db.execute(query, values);
return res.status(200).json({ message: "Data berhasil disimpan" });
} catch (err) {
console.error("Error simpan beda nama:", err);
return res.status(500).json({ message: "Terjadi kesalahan server" });
}
}