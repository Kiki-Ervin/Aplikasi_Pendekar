import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function DashboardAdmin() {
  const router = useRouter();
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [statistik, setStatistik] = useState({
    totalPermohonan: 0,
    totalUser: 0,
    totalSelesai: 0,
    totalDitolak: 0,
  });
  const [terbaru, setTerbaru] = useState([]);

  useEffect(() => {
    fetch("/api/admin/dashboard")
      .then((res) => res.json())
      .then((data) => {
        setStatistik({
          totalPermohonan: data.totalPermohonan,
          totalUser: data.totalUser,
          totalSelesai: data.totalSelesai,
          totalDitolak: data.totalDitolak,
        });
        setTerbaru(data.terbaru);
      })
      .catch((err) => console.error("Gagal ambil data:", err));
  }, []);

  return (
    <div className="flex h-screen bg-gray-50 text-black">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r p-6">
        <div className="text-green-600 font-bold text-lg mb-8 flex items-center gap-2">
          🛡️ Admin
        </div>
        <nav className="space-y-2">
          <Link href="/admin/dashboard" legacyBehavior>
            <a
              className={`block px-4 py-2 rounded ${
                router.pathname === "/admin/dashboard"
                  ? "bg-green-600 text-white"
                  : "hover:bg-gray-100 text-gray-800"
              }`}
            >
              Dashboard
            </a>
          </Link>

          <Link href="/admin/surat" legacyBehavior>
            <a
              className={`block px-4 py-2 rounded ${
                router.pathname === "/admin/surat"
                  ? "bg-green-600 text-white"
                  : "hover:bg-gray-100 text-gray-800"
              }`}
            >
              Daftar Surat
            </a>
          </Link>

          <div>
            <button
              onClick={() => setShowSubMenu(!showSubMenu)}
              className={`w-full text-left px-4 py-2 rounded ${
                router.pathname.startsWith("/admin/permohonan") ||
                router.pathname.startsWith("/admin/riwayat")
                  ? "bg-green-600 text-white"
                  : "hover:bg-gray-100 text-gray-800"
              }`}
            >
              Permohonan
            </button>

            {showSubMenu && (
              <div className="pl-4 mt-2 space-y-2">
                <Link href="/admin/permohonan" legacyBehavior>
                  <a
                    className={`block px-3 py-1 rounded ${
                      router.pathname === "/admin/permohonan"
                        ? "bg-green-600 text-white"
                        : "hover:bg-gray-100 text-gray-800"
                    }`}
                  >
                    Daftar Permohonan
                  </a>
                </Link>
                <Link href="/admin/riwayat" legacyBehavior>
                  <a
                    className={`block px-3 py-1 rounded ${
                      router.pathname === "/admin/riwayat"
                        ? "bg-green-600 text-white"
                        : "hover:bg-gray-100 text-gray-800"
                    }`}
                  >
                    Riwayat
                  </a>
                </Link>
              </div>
            )}
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Dashboard Admin</h1>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-white p-4 rounded shadow">
            <p className="text-gray-500">Total Permohonan</p>
            <h2 className="text-3xl font-bold">{statistik.totalPermohonan}</h2>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <p className="text-gray-500">Total User</p>
            <h2 className="text-3xl font-bold">{statistik.totalUser}</h2>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <p className="text-gray-500">Selesai</p>
            <h2 className="text-3xl font-bold">{statistik.totalSelesai}</h2>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <p className="text-gray-500">Ditolak</p>
            <h2 className="text-3xl font-bold">{statistik.totalDitolak}</h2>
          </div>
        </div>

        {/* Permohonan Terbaru */}
        <div className="bg-white p-4 rounded shadow">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="font-bold">Permohonan Surat Terbaru</h2>
              <p className="text-sm text-gray-500">Beberapa permohonan surat terbaru</p>
            </div>
            <Link href="/admin/permohonan" legacyBehavior>
              <a className="block px-4 py-2 rounded bg-green-600 text-white text-sm cursor-pointer hover:bg-green-700">
                Lihat Semua
              </a>
            </Link>
          </div>
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b">
                <th className="py-2">Jenis Surat</th>
                <th className="py-2">Pemohon</th>
                <th className="py-2">Tanggal Pengajuan</th>
              </tr>
            </thead>
            <tbody>
              {terbaru.map((item) => (
                <tr key={item.id} className="border-b">
                  <td className="py-2">{item.jenis_surat}</td>
                  <td className="py-2">{item.nama_pemohon}</td>
                  <td className="py-2">
                    {new Date(item.tanggal_permohonan).toLocaleDateString("id-ID")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
