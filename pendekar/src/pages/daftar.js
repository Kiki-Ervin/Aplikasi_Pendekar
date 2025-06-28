export default function Daftar() {
  return (
    <div className="flex h-screen">
      
      {/* Kiri: Form Daftar */}
      <div className="w-1/2 flex justify-center items-center">
        <div className="w-80">
          <h2 className="text-2xl font-bold mb-4">Daftar Akun</h2>
          <p className="mb-6 text-sm">Silahkan buat akun baru untuk menggunakan layanan</p>

          <input
            type="text"
            placeholder="Masukkan NIK"
            className="w-full mb-4 px-3 py-2 border rounded"
          />
          <input
            type="password"
            placeholder="Buat PIN"
            className="w-full mb-4 px-3 py-2 border rounded"
          />
          
          <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded mb-4">
            Daftar
          </button>

          <p className="text-sm text-center">
            Sudah punya akun? <a href="/login" className="text-green-600">Login disini</a>
          </p>
        </div>
      </div>

      {/* Kanan: Background */}
      <div className="w-1/2 bg-cover bg-center" style={{ backgroundImage: "url('/Background.jpg')" }}>
        <div className="p-10 text-white">
          <h1 className="text-4xl font-bold">PENDEKAR</h1>
          <p className="mt-2">Pelayanan Desa Karyalaksana</p>
        </div>
      </div>
      
    </div>
  );
}

