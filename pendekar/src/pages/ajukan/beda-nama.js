import { useRouter } from "next/router";
import { useState } from "react";

export default function BedaNamaForm() {
const router = useRouter();
const [form, setForm] = useState({
nik: "",
no_kk: "",
nama_ktp: "",
jenis_kelamin: "",
tempat_lahir: "",
tanggal_lahir: "",
agama: "",
pekerjaan: "",
nama_di_dokumen: "",
jenis_dokumen: "",
alamat: "",
rt: "",
rw: "",
desa: "",
kecamatan: "",
kab_kota: "",
provinsi: "",
kewarganegaraan: "",
keperluan: "",
tambahan_keterangan: "",
});

const handleChange = (e) => {
setForm({ ...form, [e.target.name]: e.target.value });
};

const handleSubmit = async (e) => {
e.preventDefault();
try {
const res = await fetch("/api/beda-nama", {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify(form),
});


  if (res.ok) {
    alert("Data berhasil dikirim");
    router.push("/ajukan");
  } else {
    alert("Terjadi kesalahan");
  }
} catch (err) {
  console.error(err);
  alert("Terjadi kesalahan");
}
};

return (
<div className="flex min-h-screen bg-gray-50">
<aside className="w-64 bg-white border-r p-6">
<div className="text-green-600 font-bold text-lg mb-8 flex items-center gap-2">🛡️ Pendekar</div>
<nav className="space-y-2">
<button
  onClick={() => router.back()}
  className="block px-4 py-2 rounded bg-green-600 text-white text-sm cursor-pointer hover:bg-green-700 transition-colors duration-200"
>
  ← Kembali
</button>
</nav>
</aside>


  <main className="flex-1 p-6 overflow-auto">
    <form onSubmit={handleSubmit}>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-bold text-black">📝 Surat Keterangan Beda Nama</h1>
        <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">Kirim</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-black">
        {/* Data Pemohon */}
        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-semibold text-sm mb-2">Data Pemohon</h2>
          <div className="grid grid-cols-2 gap-4 mb-2">
            <input name="nik" value={form.nik} onChange={handleChange} placeholder="NIK" className="border px-3 py-2 rounded" />
            <input name="no_kk" value={form.no_kk} onChange={handleChange} placeholder="No. KK" className="border px-3 py-2 rounded" />
            <input name="nama_ktp" value={form.nama_ktp} onChange={handleChange} placeholder="Nama Sesuai KTP" className="col-span-2 border px-3 py-2 rounded" />
            <input name="jenis_kelamin" value={form.jenis_kelamin} onChange={handleChange} placeholder="Jenis Kelamin" className="border px-3 py-2 rounded" />
            <input name="tempat_lahir" value={form.tempat_lahir} onChange={handleChange} placeholder="Tempat Lahir" className="border px-3 py-2 rounded" />
            <input name="tanggal_lahir" value={form.tanggal_lahir} onChange={handleChange} placeholder="Tanggal Lahir" className="border px-3 py-2 rounded" />
            <input name="agama" value={form.agama} onChange={handleChange} placeholder="Agama" className="border px-3 py-2 rounded" />
            <input name="pekerjaan" value={form.pekerjaan} onChange={handleChange} placeholder="Pekerjaan" className="border px-3 py-2 rounded" />
          </div>
        </div>

        {/* Nama Berbeda */}
        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-semibold text-sm mb-2">Nama yang Berbeda</h2>
          <div className="grid grid-cols-2 gap-4 mb-2">
            <input name="nama_di_dokumen" value={form.nama_di_dokumen} onChange={handleChange} placeholder="Nama di Dokumen" className="col-span-2 border px-3 py-2 rounded" />
            <input name="jenis_dokumen" value={form.jenis_dokumen} onChange={handleChange} placeholder="Jenis Dokumen" className="col-span-2 border px-3 py-2 rounded" />
          </div>
        </div>

        {/* Alamat */}
        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-semibold text-sm mb-2">Alamat</h2>
          <div className="grid grid-cols-2 gap-4 mb-2">
            <input name="alamat" value={form.alamat} onChange={handleChange} placeholder="Alamat" className="col-span-2 border px-3 py-2 rounded" />
            <input name="rt" value={form.rt} onChange={handleChange} placeholder="RT" className="border px-3 py-2 rounded" />
            <input name="rw" value={form.rw} onChange={handleChange} placeholder="RW" className="border px-3 py-2 rounded" />
            <input name="desa" value={form.desa} onChange={handleChange} placeholder="Desa" className="border px-3 py-2 rounded" />
            <input name="kecamatan" value={form.kecamatan} onChange={handleChange} placeholder="Kecamatan" className="border px-3 py-2 rounded" />
            <input name="kab_kota" value={form.kab_kota} onChange={handleChange} placeholder="Kab/Kota" className="border px-3 py-2 rounded" />
            <input name="provinsi" value={form.provinsi} onChange={handleChange} placeholder="Provinsi" className="border px-3 py-2 rounded" />
            <input name="kewarganegaraan" value={form.kewarganegaraan} onChange={handleChange} placeholder="Kewarganegaraan" className="border px-3 py-2 rounded" />
          </div>
        </div>

        {/* Keperluan */}
        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-semibold text-sm mb-2">Keperluan</h2>
          <textarea name="keperluan" value={form.keperluan} onChange={handleChange} className="w-full border px-3 py-2 rounded mb-2" rows={3} placeholder="Contoh: Klarifikasi nama untuk keperluan administrasi sekolah" />
          <textarea name="tambahan_keterangan" value={form.tambahan_keterangan} onChange={handleChange} className="w-full border px-3 py-2 rounded" rows={3} placeholder="Tulis tambahan keterangan jika ada" />
        </div>
      </div>
    </form>
  </main>
</div>
);
}