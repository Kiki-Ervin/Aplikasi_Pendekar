import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Dashboard() {
  const [data, setData] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetch("/api/permohonan")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error("Gagal ambil data:", err));
  }, []);

  const total = data.length;
  const diproses = data.filter((d) => d.status?.toLowerCase() === "dikirim").length;
  const disetujui = data.filter((d) => d.status?.toLowerCase() === "selesai").length;
  const ditolak = data.filter((d) => d.status?.toLowerCase() === "ditolak").length;

  const terbaru = [...data]
    .sort((a, b) => new Date(b.tanggal_permohonan) - new Date(a.tanggal_permohonan))
    .slice(0, 3);

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r p-6">
        <div className="text-green-600 font-bold text-lg mb-8 flex items-center gap-2">
          🛡️ Pendekar
        </div>
        <nav className="space-y-2">
          <Link href="/dashboard">
            <span
              className={`block px-4 py-2 rounded ${
                router.pathname === "/dashboard"
                  ? "bg-green-600 text-black"
                  : "hover:bg-gray-100 text-gray-800"
              }`}
            >
              Dashboard
            </span>
          </Link>
          <Link href="/permohonan">
            <span
              className={`block px-4 py-2 rounded ${
                router.pathname === "/permohonan"
                  ? "bg-green-600 text-white"
                  : "hover:bg-gray-100 text-gray-800"
              }`}
            >
              Permohonan Saya
            </span>
          </Link>
          <Link href="/ajukan">
            <span
              className={`block px-4 py-2 rounded ${
                router.pathname === "/ajukan"
                  ? "bg-green-600 text-white"
                  : "hover:bg-gray-100 text-gray-800"
              }`}
            >
              Ajukan Permohonan
            </span>
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <button className="text-gray-500 hover:text-black">⚙️</button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-white p-4 rounded shadow">
            <p className="text-black">Total Permohonan</p>
            <h2 className="text-3xl font-bold text-black">{total}</h2>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <p className="text-gray-500">Permohonan Diproses</p>
            <h2 className="text-3xl font-bold">{diproses}</h2>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <p className="text-gray-500">Permohonan Disetujui</p>
            <h2 className="text-3xl font-bold">{disetujui}</h2>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <p className="text-gray-500">Permohonan Ditolak</p>
            <h2 className="text-3xl font-bold">{ditolak}</h2>
          </div>
        </div>

        {/* Table Section */}
        <div className="bg-white p-4 rounded shadow">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="font-bold">Permohonan Surat Terbaru</h2>
              <p className="text-sm text-gray-500">Beberapa permohonan surat terbaru</p>
            </div>
            <Link href="/permohonan">
              <span className="text-green-600 text-sm hover:underline cursor-pointer">
                Lihat Semua
              </span>
            </Link>
          </div>

          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b">
                <th className="py-2">Jenis Surat</th>
                <th className="py-2">Keterangan</th>
                <th className="py-2">Status</th>
                <th className="py-2">Tanggal Pengajuan</th>
              </tr>
            </thead>
            <tbody>
              {terbaru.map((row) => (
                <tr key={row.id} className="border-b">
                  <td className="py-2">{row.jenis_surat}</td>
                  <td className="py-2">{row.keterangan || "-"}</td>
                  <td className="py-2">
                    {row.status?.toLowerCase() === "dikirim" && (
                      <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-xs">
                        Diproses
                      </span>
                    )}
                    {row.status?.toLowerCase() === "selesai" && (
                      <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">
                        Disetujui
                      </span>
                    )}
                    {row.status?.toLowerCase() === "ditolak" && (
                      <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-xs">
                        Ditolak
                      </span>
                    )}
                  </td>
                  <td className="py-2">
                    {new Date(row.tanggal_permohonan).toLocaleDateString()}
                  </td>
                </tr>
              ))}
              {terbaru.length === 0 && (
                <tr>
                  <td colSpan="4" className="py-4 text-center text-gray-500">
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
