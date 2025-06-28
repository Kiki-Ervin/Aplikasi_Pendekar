export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-50">
      
      {/* Sidebar */}
      <div className="w-64 bg-white border-r">
        <div className="p-6 font-bold text-lg flex items-center gap-2">
          <span className="text-green-600">🛡️</span> Pendekar
        </div>
        <nav className="flex flex-col gap-2 px-4">
          <a href="#" className="bg-green-600 text-white px-4 py-2 rounded">Dashboard</a>
          <a href="#" className="px-4 py-2 hover:bg-gray-100 rounded">Permohonan Saya</a>
          <a href="#" className="px-4 py-2 hover:bg-gray-100 rounded">Ajukan Permohonan</a>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 overflow-auto">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <button className="text-gray-500 hover:text-black">⚙️</button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className="bg-white p-4 rounded shadow">
            <p>Total Permohonan</p>
            <h2 className="text-3xl font-bold">2</h2>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <p>Permohonan Diproses</p>
            <h2 className="text-3xl font-bold">1</h2>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <p>Permohonan Disetujui</p>
            <h2 className="text-3xl font-bold">1</h2>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <p>Permohonan Ditolak</p>
            <h2 className="text-3xl font-bold">0</h2>
          </div>
        </div>

        {/* Table Permohonan */}
        <div className="bg-white p-4 rounded shadow">
          <div className="flex justify-between mb-4">
            <div>
              <h2 className="font-bold">Permohonan Surat Terbaru</h2>
              <p className="text-sm text-gray-500">Beberapa permohonan surat terbaru</p>
            </div>
            <button className="text-green-600 hover:underline">Lihat Semua</button>
          </div>

          <table className="w-full text-left">
            <thead>
              <tr className="border-b">
                <th className="py-2">Jenis Surat</th>
                <th className="py-2">Keterangan</th>
                <th className="py-2">Status</th>
                <th className="py-2">Tanggal Pengajuan</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2">Surat Keterangan Usaha</td>
                <td>Pengajuan sudah dikirim</td>
                <td>
                  <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-sm">Dikirim</span>
                </td>
                <td>16 Juli 2024</td>
              </tr>
              <tr>
                <td className="py-2">Surat Keterangan Tidak Mampu</td>
                <td>Surat sudah dicetak</td>
                <td>
                  <span className="bg-green-100 text-green-600 px-2 py-1 rounded text-sm">Selesai</span>
                </td>
                <td>15 Juli 2024</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}
