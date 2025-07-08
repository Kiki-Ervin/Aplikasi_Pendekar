import { db } from "@/lib/db";

export default async function handler(req, res) {
if (req.method !== "GET") {
return res.status(405).json({ message: "Method tidak diizinkan" });
}

try {
const [totalRows] = await db.execute('SELECT COUNT(*) as total FROM permohonan');
const totalPermohonan = totalRows[0].total;


const [diprosesRows] = await db.execute(`SELECT COUNT(*) as total FROM permohonan WHERE status = 'diproses'`);
const totalDiproses = diprosesRows[0].total;

const [selesaiRows] = await db.execute(`SELECT COUNT(*) as total FROM permohonan WHERE status = 'selesai'`);
const totalSelesai = selesaiRows[0].total;

const [ditolakRows] = await db.execute(`SELECT COUNT(*) as total FROM permohonan WHERE status = 'ditolak'`);
const totalDitolak = ditolakRows[0].total;

const [userRows] = await db.execute(`SELECT COUNT(*) as total FROM users`);
const totalUser = userRows[0].total;

const [terbaruRows] = await db.execute(`
  SELECT id, jenis_surat, nama_pemohon, tanggal_permohonan
  FROM permohonan
  ORDER BY tanggal_permohonan DESC
  LIMIT 3
`);

return res.status(200).json({
  totalPermohonan,
  totalDiproses,
  totalSelesai,
  totalDitolak,
  totalUser,
  terbaru: terbaruRows,
});
} catch (err) {
console.error("Error ambil dashboard:", err);
return res.status(500).json({ message: "Terjadi kesalahan server" });
}
}