import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function DetailPermohonan() {
const router = useRouter();
const { id } = router.query;
const [data, setData] = useState(null);
const [loading, setLoading] = useState(true);

useEffect(() => {
if (!id) return;
fetch(`/api/admin/permohonan/${id}`)
.then((res) => res.json())
.then((hasil) => {
setData(hasil);
setLoading(false);
})
.catch((err) => {
console.error("Gagal ambil data:", err);
setLoading(false);
});
}, [id]);

if (loading) return <div className="p-6">Loading...</div>;
if (!data) return <div className="p-6">Data tidak ditemukan</div>;

const isi = (() => {
try {
return JSON.parse(data.data_lengkap || "{}");
} catch {
return {};
}
})();

return (
<div className="flex h-screen bg-gray-50">
{/* Sidebar */}
<aside className="w-64 bg-white border-r p-6">
<div className="text-green-600 font-bold text-lg mb-8 flex items-center gap-2">🛡️ Admin</div>
<nav className="space-y-2">
<Link href="/admin/dashboard">
<span className="block px-4 py-2 rounded hover:bg-gray-100 text-gray-800">Dashboard</span>
</Link>
<Link href="/admin/surat">
<span className="block px-4 py-2 rounded hover:bg-gray-100 text-gray-800">Daftar Surat</span>
</Link>
<Link href="/admin/permohonan">
<span className="block px-4 py-2 rounded bg-green-600 text-white">Permohonan</span>
</Link>
</nav>
</aside>

  {/* Main */}
  <main className="flex-1 p-6 overflow-auto">
    <h1 className="text-2xl font-bold mb-4">Detail Permohonan</h1>
    <p className="mb-2">Jenis Surat: <b>{data.jenis_surat}</b></p>
    <p className="mb-2">Nama Pemohon: <b>{data.nama_pemohon}</b></p>
    <p className="mb-4">Status: <b className="capitalize">{data.status}</b></p>

    {/* Tampilkan Detail Sesuai Jenis Surat */}
    {data.jenis_surat === "Surat Keterangan Kelahiran" && (
      <div className="bg-white p-4 rounded shadow">
        <h2 className="font-bold mb-2">Data Kelahiran</h2>
        <p>NIK Anak: {isi.nik_anak || "-"}</p>
        <p>Nama Anak: {isi.nama_anak || "-"}</p>
        <p>No KK: {isi.no_kk || "-"}</p>
      </div>
    )}

    {data.jenis_surat === "Surat Keterangan Tidak Mampu" && (
      <div className="bg-white p-4 rounded shadow">
        <h2 className="font-bold mb-2">Data Tidak Mampu</h2>
        <p>NIK Pemohon: {isi.nik_pemohon || "-"}</p>
        <p>Alamat: {isi.alamat || "-"}</p>
      </div>
    )}

    {/* Tambah else if sesuai kebutuhan jenis surat lainnya */}
  </main>
</div>
);
}