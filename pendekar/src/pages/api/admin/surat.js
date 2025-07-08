import { db } from "@/lib/db";

export default async function handler(req, res) {
if (req.method === "GET") {
try {
const [rows] = await db.query(
'SELECT id, nama_pemohon, jenis_surat, tanggal_permohonan, status FROM permohonan WHERE status = "selesai" ORDER BY nama_pemohon ASC'
);
res.status(200).json(rows);
} catch (err) {
console.error("Gagal ambil daftar surat:", err);
res.status(500).json({ error: "Gagal ambil daftar surat" });
}
} else {
res.status(405).json({ error: "Method not allowed" });
}
}