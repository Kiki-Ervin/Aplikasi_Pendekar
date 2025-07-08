import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Login() {
const [nik, setNik] = useState("");
const [pin, setPin] = useState("");
const router = useRouter();

const handleLogin = async () => {
const res = await fetch("/api/login", {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify({ nik, pin }),
});


const data = await res.json();
if (data.success) {
  router.push("/dashboard");
} else {
  alert(data.message || "NIK atau PIN salah");
}
};

return (
<div className="flex h-screen">


  {/* Kiri: Gambar atau background */}
  <div className="w-1/2 bg-cover bg-center" style={{ backgroundImage: "url('/Background.jpg')" }}>
    <div className="p-10 text-white">
      <h1 className="text-4xl font-bold">PENDEKAR</h1>
      <p className="mt-2">Pelayanan Desa Karyalaksana</p>
    </div>
  </div>

  {/* Kanan: Form Login */}
  <div className="w-1/2 flex justify-center items-center">
    <div className="w-80">
      <h2 className="text-2xl font-bold mb-4">Selamat Datang di PENDEKAR</h2>
      <p className="mb-6 text-sm">Untuk masyarakat, silahkan login menggunakan NIK dan PIN</p>

      <input
        type="text"
        placeholder="Masukkan NIK"
        className="w-full mb-4 px-3 py-2 border rounded"
        value={nik}
        onChange={(e) => setNik(e.target.value)}
      />
      <input
        type="password"
        placeholder="Masukkan PIN"
        className="w-full mb-4 px-3 py-2 border rounded"
        value={pin}
        onChange={(e) => setPin(e.target.value)}
      />
      
      <button onClick={handleLogin} className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded mb-4">
        Masuk
      </button>

      <p className="text-sm text-center">
        Belum punya akun? <a href="/daftar" className="text-green-600">Daftar disini</a>
      </p>

      <div className="my-4 text-center text-gray-500">atau</div>

      <Link href="/admin/login">
        <button className="w-full border py-2 rounded">
          Login sebagai Admin
        </button>
      </Link>
    </div>
  </div>
</div>
);
}