import { db } from "../../lib/db";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { nik, pin } = req.body;

  try {
    // Cek apakah NIK sudah terdaftar
    const [exist] = await db.query("SELECT * FROM users WHERE nik = ?", [nik]);

    if (exist.length > 0) {
      return res.status(400).json({ success: false, message: "NIK sudah terdaftar" });
    }

    // Simpan data baru
    await db.query("INSERT INTO users (nik, pin) VALUES (?, ?)", [nik, pin]);

    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error server" });
  }
}
