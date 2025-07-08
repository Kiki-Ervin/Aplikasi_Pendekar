import { useRouter } from "next/router";
import { useEffect } from "react";

export default function AdminDashboard() {
const router = useRouter();

useEffect(() => {
// Nanti bisa tambahkan validasi token admin di sini
}, []);

return (
<div className="flex h-screen bg-gray-50">

  {/* Sidebar */}
  <aside className="w-64 bg-white border-r p-6">
    <div className="text-green-600 font-bold text-lg mb-8 flex items-center gap-2">
      🛡️ Admin Panel
    </div>
    <nav className="space-y-2">
      <span className="block px-4 py-2 rounded bg-green-600 text-white">Dashboard</span>
      <span className="block px-4 py-2 rounded hover:bg-gray-100 text-gray-800">Daftar Surat</span>
      <span className="block px-4 py-2 rounded hover:bg-gray-100 text-gray-800">Permohonan</span>
    </nav>
  </aside>

  {/* Main Content */}
  <main className="flex-1 p-6 overflow-auto">
    <h1 className="text-2xl font-bold mb-4">Selamat Datang Admin</h1>
    <p className="text-gray-600">Halaman ini masih kosong. Nanti kita bisa isi data permohonan terbaru atau widget lain.</p>
  </main>
</div>
);
}