import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function PermohonanAdmin() {
  const router = useRouter();
  const [permohonan, setPermohonan] = useState([]);
  const [search, setSearch] = useState("");

  const toSlug = (text) => {
    const lower = text.toLowerCase();
    if (lower.includes("keramaian")) return "keramaian";
    if (lower.includes("usaha")) return "usaha";
    if (lower.includes("tidak mampu")) return "tidak-mampu";
    if (lower.includes("kelahiran")) return "kelahiran";
    if (lower.includes("kematian")) return "kematian";
    if (lower.includes("beda nama")) return "beda-nama";
    return ""; // fallback
  };

  useEffect(() => {
    fetch("/api/admin/permohonan")
      .then((res) => res.json())
      .then((data) => setPermohonan(data))
      .catch((err) => console.error("Gagal ambil data:", err));
  }, []);

  const filtered = permohonan.filter((item) =>
    item.jenis_surat.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex h-screen bg-gray-50">
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
          <button
            onClick={() => router.push("/admin/permohonan")}
            className={`w-full text-left block px-4 py-2 rounded ${
              router.pathname.startsWith("/admin/permohonan")
                ? "bg-green-600 text-white"
                : "hover:bg-gray-100 text-gray-800"
            }`}
          >
            Permohonan
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-auto">
        <h1 className="text-2xl font-bold mb-6">Daftar Permohonan Surat</h1>

        <div className="mb-4">
          <input
            type="text"
            placeholder="Cari Jenis Surat ..."
            className="w-full max-w-sm px-3 py-2 border border-gray-300 rounded"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <table className="w-full text-left text-sm border">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4">NIK Pemohon</th>
              <th className="py-2 px-4">Nama Pemohon</th>
              <th className="py-2 px-4">Jenis Surat</th>
              <th className="py-2 px-4">Status</th>
              <th className="py-2 px-4">Keterangan</th>
              <th className="py-2 px-4">Tanggal Pengajuan</th>
              <th className="py-2 px-4">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((item) => (
              <tr key={item.id} className="border-b">
                <td className="py-2 px-4">{item.nik}</td>
                <td className="py-2 px-4">{item.nama_pemohon}</td>
                <td className="py-2 px-4">{item.jenis_surat}</td>
                <td className="py-2 px-4 capitalize">{item.status}</td>
                <td className="py-2 px-4">{item.keterangan || "-"}</td>
                <td className="py-2 px-4">
                  {new Date(item.tanggal_permohonan).toLocaleDateString()}
                </td>
                <td className="py-2 px-4">
                  <button
                    onClick={() => {
                      const slug = toSlug(item.jenis_surat);
                      if (!slug) return alert("Jenis surat belum didukung");
                      router.push(`/ajukan/${slug}-admin?id=${item.id}`);
                    }}
                    className="text-green-600 hover:underline text-sm"
                  >
                    Detail
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}
