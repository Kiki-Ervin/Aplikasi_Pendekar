import { db } from "@/lib/db";

export default async function handler(req, res) {
  const { id } = req.query;

  if (req.method === "GET") {
    try {
      const [rows] = await db.execute("SELECT * FROM permohonan WHERE id = ?", [id]);
      if (rows.length === 0) {
        return res.status(404).json({ message: "Data tidak ditemukan" });
      }
      return res.status(200).json(rows[0]);
    } catch (err) {
      console.error("Error ambil detail permohonan:", err);
      return res.status(500).json({ message: "Terjadi kesalahan server" });
    }
  }

  if (req.method === "PUT") {
    const { status, keterangan } = req.body;

    if (!status) {
      return res.status(400).json({ message: "Status tidak boleh kosong" });
    }

    try {
      const [result] = await db.execute(
        "UPDATE permohonan SET status = ?, keterangan = ? WHERE id = ?",
        [status, keterangan || "", id]
      );

      if (result.affectedRows === 0) {
        return res.status(404).json({ message: "Permohonan tidak ditemukan" });
      }

      return res.status(200).json({ message: "Status berhasil diperbarui" });
    } catch (err) {
      console.error("Error update status:", err);
      return res.status(500).json({ message: "Gagal mengubah status" });
    }
  }

  return res.status(405).json({ message: "Method tidak diizinkan" });
}
