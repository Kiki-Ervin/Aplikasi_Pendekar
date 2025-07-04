import { db } from '@/lib/db';

export default async function handler(req, res) {
if (req.method !== 'POST') {
return res.status(405).json({ message: 'Method tidak diizinkan' });
}

const {
nik,
no_kk,
nama,
agama,
jenis_kelamin,
tempat_lahir,
tanggal_lahir,
alamat,
rt,
rw,
desa,
kecamatan,
kabupaten,
provinsi,
kewarganegaraan,
pendidikan_terakhir,
pendidikan_ditempuh,
pekerjaan,
keperluan,
tambahan_keterangan,
} = req.body;

try {
const query = `INSERT INTO tidak_mampu ( nik, no_kk, nama, agama, jenis_kelamin, tempat_lahir, tanggal_lahir, alamat, rt, rw, desa, kecamatan, kabupaten, provinsi, kewarganegaraan, pendidikan_terakhir, pendidikan_ditempuh, pekerjaan, keperluan, tambahan_keterangan ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
const values = [
  nik, no_kk, nama, agama, jenis_kelamin, tempat_lahir, tanggal_lahir,
  alamat, rt, rw, desa, kecamatan, kabupaten, provinsi, kewarganegaraan,
  pendidikan_terakhir, pendidikan_ditempuh, pekerjaan, keperluan, tambahan_keterangan,
];

await db.execute(query, values);

return res.status(200).json({ message: 'Data berhasil disimpan' });
} catch (error) {
console.error('Error simpan:', error);
return res.status(500).json({ message: 'Terjadi kesalahan server' });
}

}