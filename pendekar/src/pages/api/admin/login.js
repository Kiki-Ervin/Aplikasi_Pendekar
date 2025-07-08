import { db } from "@/lib/db";

export default async function handler(req, res) {
if (req.method !== "POST") {
return res.status(405).json({ message: "Method tidak diizinkan" });
}

const { username, password } = req.body;

try {
const [rows] = await db.execute(
"SELECT * FROM admin WHERE username = ? AND password = ?",
[username, password]
);


if (rows.length === 0) {
  return res.status(401).json({ message: "Username atau Password salah" });
}

const admin = rows[0];

return res.status(200).json({
  success: true,
  admin: { id: admin.id, username: admin.username },
});
} catch (err) {
console.error("Error login admin:", err);
return res.status(500).json({ message: "Terjadi kesalahan server" });
}
}