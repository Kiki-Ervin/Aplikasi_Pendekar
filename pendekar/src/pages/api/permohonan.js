import { db } from "@/lib/db";

export default async function handler(req, res) {
if (req.method !== "GET") {
return res.status(405).json({ message: "Method tidak diizinkan" });
}
try {
const [rows] = await db.execute("SELECT * FROM permohonan ORDER BY tanggal_dibuat DESC");
return res.status(200).json(rows);
} catch (err) {
console.error("Error ambil permohonan:", err);
return res.status(500).json({ message: "Terjadi kesalahan server" });
}
}