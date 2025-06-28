import { db } from "../../lib/db";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { nik, pin } = req.body;

  try {
    const [rows] = await db.query("SELECT * FROM users WHERE nik = ? AND pin = ?", [nik, pin]);

    if (rows.length > 0) {
      // Login sukses
      res.status(200).json({ success: true });
    } else {
      // Login gagal
      res.status(401).json({ success: false, message: "NIK atau PIN salah" });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: "Error server" });
  }
}
