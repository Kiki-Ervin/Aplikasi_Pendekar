import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function DaftarSurat() {
  const router = useRouter();
  const [list, setList] = useState([]);


  
useEffect(() => {
fetch("/api/admin/surat")
.then((res) => res.json())
.then((data) => setList(data))
.catch((err) => console.error("Gagal ambil data surat:", err));
}, []);

  return (
    <div className="flex h-screen bg-gray-50">
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
            <button className="w-full text-left px-4 py-2 rounded hover:bg-gray-100 text-gray-800">
              Permohonan
            </button>
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
          </div>
        </nav>
      </aside>

      <main className="flex-1 p-6 overflow-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Daftar Surat Selesai</h1>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b">
                <th className="py-2">Nama Pemohon</th>
                <th className="py-2">Jenis Surat</th>
                <th className="py-2">Tanggal Surat</th>
                <th className="py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {list.length === 0 ? (
                <tr>
                  <td colSpan={4} className="text-center py-4 text-gray-500">
                    Belum ada surat selesai
                  </td>
                </tr>
              ) : (
                list.map((item) => (
                  <tr key={item.id} className="border-b">
                    <td className="py-2">{item.nama_pemohon}</td>
                    <td className="py-2">{item.jenis_surat}</td>
                    <td className="py-2">
                      {new Date(item.tanggal_permohonan).toLocaleDateString()}
                    </td>
                    <td className="py-2 capitalize">{item.status}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
