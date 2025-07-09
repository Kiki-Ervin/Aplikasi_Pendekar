import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function PermohonanSaya() {
const [data, setData] = useState([]);
const [filtered, setFiltered] = useState([]);
const [search, setSearch] = useState("");
const router = useRouter();

useEffect(() => {
fetch("/api/permohonan")
.then((res) => res.json())
.then((data) => {
setData(data);
setFiltered(data);
})
.catch((err) => console.error("Gagal ambil data:", err));
}, []);

useEffect(() => {
const hasil = data.filter((row) =>
row.jenis_surat?.toLowerCase().includes(search.toLowerCase())
);
setFiltered(hasil);
}, [search, data]);

return (
<div className="flex h-screen bg-gray-50">
{/* Sidebar */}
<aside className="w-64 bg-white border-r p-6">
<div className="text-green-600 font-bold text-lg mb-8 flex items-center gap-2">
🛡️ Pendekar
</div>
<nav className="space-y-2">
<Link href="/dashboard">
  <span className={`block px-4 py-2 rounded ${router.pathname === "/dashboard" ? "bg-green-600 text-white" : "hover:bg-gray-100 text-gray-800"}`}>
    Dashboard
  </span>
</Link>
<Link href="/permohonan">
  <span className={`block px-4 py-2 rounded ${router.pathname === "/permohonan" ? "bg-green-600 text-white" : "hover:bg-gray-100 text-gray-800"}`}>
    Permohonan Saya
  </span>
</Link>
<Link href="/ajukan">
  <span className={`block px-4 py-2 rounded ${router.pathname === "/ajukan" ? "bg-green-600 text-white" : "hover:bg-gray-100 text-gray-800"}`}>
    Ajukan Permohonan
  </span>
</Link>
</nav>
</aside>


  {/* Main Content */}
  <main className="flex-1 p-6 overflow-auto">
    <div className="flex justify-between items-center mb-4">
      <h1 className="text-xl font-semibold text-black">Permohonan Saya</h1>
      <Link href="/ajukan">
        <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
          Ajukan Permohonan
        </button>
      </Link>
    </div>

    {/* Search Input */}
    <div className="mb-4">
      <input
        type="text"
        placeholder="Cari Jenis Surat ..."
        className="w-full max-w-sm px-3 py-2 border border-gray-300 rounded text-black"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>

    {/* Table */}
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-700 text-sm text-black">
        <thead className="bg-gray-100 text-left">
          <tr>
            <th className="px-4 py-2 border-b">Jenis Surat</th>
            <th className="px-4 py-2 border-b">Status</th>
            <th className="px-4 py-2 border-b">Keterangan</th>
            <th className="px-4 py-2 border-b">Tanggal Pengajuan</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((row) => (
            <tr key={row.id}>
              <td className="px-4 py-2 border-b">{row.jenis_surat}</td>
              <td className="px-4 py-2 border-b">
                <span className="bg-yellow-200 text-yellow-800 px-2 py-1 rounded text-xs">
                  {row.status || "-"}
                </span>
              </td>
              <td className="px-4 py-2 border-b">{row.keterangan || "-"}</td>
              <td className="px-4 py-2 border-b">
                {new Date(row.tanggal_permohonan).toLocaleDateString()}
              </td>
            </tr>
          ))}
          {filtered.length === 0 && (
            <tr>
              <td colSpan="4" className="px-4 py-4 text-center text-gray-500">
                Tidak ada data
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  </main>
</div>
);
}