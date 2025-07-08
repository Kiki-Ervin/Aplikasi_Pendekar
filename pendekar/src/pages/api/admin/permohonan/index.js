import { db } from "@/lib/db";

export default async function handler(req, res) {
if (req.method !== "GET") {
return res.status(405).json({ message: "Method tidak diizinkan" });
}

try {
const [rows] = await db.execute(
  `SELECT id, user_id, nama_pemohon, jenis_surat, status, keterangan, tanggal_permohonan, data_lengkap FROM permohonan ORDER BY tanggal_permohonan DESC`
);


const hasil = rows.map((item) => {
  let nik = "-";
  try {
    const data = JSON.parse(item.data_lengkap || "{}");

    // Cek jenis surat lalu ambil NIK sesuai struktur
    if (item.jenis_surat === "Surat Keterangan Kelahiran") {
      nik = data.nik_anak || "-";
    } else if (item.jenis_surat === "Surat Keterangan Tidak Mampu") {
      nik = data.nik_pemohon || "-";
    } else if (item.jenis_surat === "Surat Keterangan Usaha") {
      nik = data.nik_pemilik || "-";
    } else if (item.jenis_surat === "Surat Izin Keramaian") {
      nik = data.nik_penyelenggara || "-";
    } else {
      nik = data.nik || "-";
    }
  } catch (e) {
    console.error("Gagal parse data_lengkap:", e);
    }

  return {
    ...item,
    nik, // Inject nik ke objek yang dikirim ke frontend
  };
});

return res.status(200).json(hasil);
} catch (err) {
console.error("Gagal ambil data permohonan:", err);
return res.status(500).json({ message: "Terjadi kesalahan server" });
}
}