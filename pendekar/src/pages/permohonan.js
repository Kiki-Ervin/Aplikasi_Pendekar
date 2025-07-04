import Link from 'next/link';
import { useRouter } from 'next/router';

export default function PermohonanSaya() {
  const router = useRouter();

  return (
    <div className="flex h-screen bg-gray-50">
      
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r p-6">
        <div className="text-green-600 font-bold text-lg mb-8 flex items-center gap-2">
          🛡️ Pendekar
        </div>
        <nav className="space-y-2">
          <Link href="/dashboard">
            <span className={`block px-4 py-2 rounded ${router.pathname === '/dashboard' ? 'bg-green-600 text-white' : 'hover:bg-gray-100 text-gray-800'}`}>
              Dashboard
            </span>
          </Link>
          <Link href="/permohonan">
            <span className={`block px-4 py-2 rounded ${router.pathname === '/permohonan' ? 'bg-green-600 text-white' : 'hover:bg-gray-100 text-gray-800'}`}>
              Permohonan Saya
            </span>
          </Link>
          <Link href="/ajukan"> 
            <span className={`block px-4 py-2 rounded ${router.pathname === '/ajukan' ? 'bg-green-600 text-white' : 'hover:bg-gray-100 text-gray-800'}`}>
              Ajukan Permohonan
            </span>
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-auto">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-semibold">Permohonan Saya</h1>
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
            className="w-full max-w-sm px-3 py-2 border border-gray-300 rounded"
          />
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 text-sm">
            <thead className="bg-gray-100 text-left">
              <tr>
                <th className="px-4 py-2 border-b">Jenis Surat</th>
                <th className="px-4 py-2 border-b">Status</th>
                <th className="px-4 py-2 border-b">Keterangan</th>
                <th className="px-4 py-2 border-b">Tanggal Pengajuan</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border-b">Surat Keterangan Usaha</td>
                <td className="px-4 py-2 border-b">
                  <span className="bg-yellow-200 text-yelnlow-800 px-2 py-1 rounded text-xs">Dikirim</span>
                </td>
                <td className="px-4 py-2 border-b">Pengajuan sudah dikirim</td>
                <td className="px-4 py-2 border-b">16 Juli 2024</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b">Surat Keterangan Tidak Mampu</td>
                <td className="px-4 py-2 border-b">
                  <span className="bg-green-200 text-green-800 px-2 py-1 rounded text-xs">Selesai</span>
                </td>
                <td className="px-4 py-2 border-b">Surat sudah dicetak</td>
                <td className="px-4 py-2 border-b">15 Juli 2024</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-end items-center mt-4 text-sm text-gray-600">
          <span className="mr-4">Page 1 of 1</span>
          <div className="space-x-1">
            <button className="px-2 py-1 border rounded hover:bg-gray-100">&lt;&lt;</button>
            <button className="px-2 py-1 border rounded hover:bg-gray-100">&lt;</button>
            <button className="px-2 py-1 border rounded hover:bg-gray-100">&gt;</button>
            <button className="px-2 py-1 border rounded hover:bg-gray-100">&gt;&gt;</button>
          </div>
        </div>
      </main>
    </div>
  );
}
