import { useState } from "react";
import { useRouter } from "next/router";

export default function Daftar() {
  const [nik, setNik] = useState("");
  const [pin, setPin] = useState("");
  const router = useRouter();

  const handleDaftar = async () => {
    const res = await fetch("/api/daftar", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nik, pin }),
    });

    const data = await res.json();
    if (data.success) {
      alert("Pendaftaran berhasil, silahkan login");
      router.push("/login");
    } else {
      alert(data.message || "Pendaftaran gagal");
    }
  };

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
            value={nik}
            onChange={(e) => setNik(e.target.value)}
          />
          <input
            type="password"
            placeholder="Buat PIN"
            className="w-full mb-4 px-3 py-2 border rounded"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
          />
          
          <button onClick={handleDaftar} className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded mb-4">
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
