import { db } from "@/lib/db";

export default async function handler(req, res) {
const { id } = req.query;

if (req.method !== "GET") {
return res.status(405).json({ message: "Method tidak diizinkan" });
}

try {
const [rows] = await db.execute("SELECT * FROM permohonan WHERE id = ?", [id]);

pgsql
Salin
Edit
if (rows.length === 0) {
  return res.status(404).json({ message: "Data tidak ditemukan" });
}

return res.status(200).json(rows[0]);
} catch (err) {
console.error("Error ambil detail permohonan:", err);
return res.status(500).json({ message: "Terjadi kesalahan server" });
}
}