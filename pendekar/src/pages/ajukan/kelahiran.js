import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function KelahiranForm() {
const router = useRouter();
const { id, admin } = router.query;
const isAdmin = admin === "true";

const [form, setForm] = useState({
nik_anak: "",
no_kk: "",
nama_anak: "",
jenis_kelamin: "",
tempat_lahir: "",
tanggal_lahir: "",
agama: "",
anak_ke: "",
alamat: "",
rt: "",
rw: "",
desa: "",
kecamatan: "",
kabupaten: "",
provinsi: "",
kewarganegaraan: "",
nama_ayah: "",
nama_ibu: "",
keperluan: "",
keterangan: "",
});

useEffect(() => {
if (!id) return;
fetch(`/api/admin/permohonan/${id}`)
.then((res) => res.json())
.then((data) => {
if (data?.data_lengkap) {
const isi = JSON.parse(data.data_lengkap);
setForm((prev) => ({ ...prev, ...isi }));
}
})
.catch((err) => console.error("Gagal ambil detail:", err));
}, [id]);

const handleChange = (e) => {
if (isAdmin) return; // Admin tidak boleh ubah input
setForm({ ...form, [e.target.name]: e.target.value });
};

const handleKirim = async () => {
try {
const res = await fetch("/api/kelahiran", {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify(form),
});
const data = await res.json();
if (res.ok) {
alert(data.message);
router.push("/ajukan");
} else {
alert(data.message || "Gagal menyimpan");
}
} catch (err) {
console.error(err);
alert("Terjadi kesalahan");
}
};

const handleTolak = () => {
alert("Permohonan ditolak!");
router.push("/admin/permohonan");
};

const handleCetak = () => {
alert("Cetak surat...");
};

const renderInput = (props) => (
<input {...props} disabled={isAdmin} onChange={handleChange} className="border px-3 py-2 rounded" />
);

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
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-xl font-bold text-black">📝 Surat Keterangan Kelahiran</h1>
      {isAdmin ? (
        <div className="space-x-2">
          <button onClick={handleTolak} className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">Tolak</button>
          <button onClick={handleCetak} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Cetak</button>
        </div>
      ) : (
        <button onClick={handleKirim} className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">Kirim</button>
      )}
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-black">
      <div className="bg-white p-4 rounded shadow">
        <h2 className="font-semibold text-sm mb-2 text-black">Data Anak</h2>
        <div className="grid grid-cols-2 gap-4 mb-2">
          {renderInput({ name: "nik_anak", value: form.nik_anak, placeholder: "NIK Anak" })}
          {renderInput({ name: "no_kk", value: form.no_kk, placeholder: "No. KK" })}
          {renderInput({ name: "nama_anak", value: form.nama_anak, placeholder: "Nama Anak", className: "col-span-2 border px-3 py-2 rounded" })}
          {renderInput({ name: "jenis_kelamin", value: form.jenis_kelamin, placeholder: "Jenis Kelamin" })}
          {renderInput({ name: "tempat_lahir", value: form.tempat_lahir, placeholder: "Tempat Lahir" })}
          {renderInput({ name: "tanggal_lahir", value: form.tanggal_lahir, placeholder: "Tanggal Lahir" })}
          {renderInput({ name: "agama", value: form.agama, placeholder: "Agama" })}
          {renderInput({ name: "anak_ke", value: form.anak_ke, placeholder: "Anak ke-" })}
        </div>
      </div>

      <div className="bg-white p-4 rounded shadow">
        <h2 className="font-semibold text-sm mb-2 text-black">Alamat</h2>
        <div className="grid grid-cols-2 gap-4 mb-2">
          {renderInput({ name: "alamat", value: form.alamat, placeholder: "Alamat", className: "col-span-2 border px-3 py-2 rounded" })}
          {renderInput({ name: "rt", value: form.rt, placeholder: "RT" })}
          {renderInput({ name: "rw", value: form.rw, placeholder: "RW" })}
          {renderInput({ name: "desa", value: form.desa, placeholder: "Desa" })}
          {renderInput({ name: "kecamatan", value: form.kecamatan, placeholder: "Kecamatan" })}
          {renderInput({ name: "kabupaten", value: form.kabupaten, placeholder: "Kab/Kota" })}
          {renderInput({ name: "provinsi", value: form.provinsi, placeholder: "Provinsi" })}
          {renderInput({ name: "kewarganegaraan", value: form.kewarganegaraan, placeholder: "Kewarganegaraan" })}
        </div>
      </div>

      <div className="bg-white p-4 rounded shadow">
        <h2 className="font-semibold text-sm mb-2">Data Orang Tua</h2>
        <div className="grid grid-cols-2 gap-4 mb-2">
          {renderInput({ name: "nama_ayah", value: form.nama_ayah, placeholder: "Nama Ayah", className: "col-span-2 border px-3 py-2 rounded" })}
          {renderInput({ name: "nama_ibu", value: form.nama_ibu, placeholder: "Nama Ibu", className: "col-span-2 border px-3 py-2 rounded" })}
        </div>
      </div>

      <div className="bg-white p-4 rounded shadow">
        <h2 className="font-semibold text-sm mb-2">Keperluan</h2>
        <textarea name="keperluan" value={form.keperluan} onChange={handleChange} disabled={isAdmin} className="w-full border px-3 py-2 rounded mb-2" rows={3} placeholder="Contoh: Pengajuan akta kelahiran" />
        <textarea name="keterangan" value={form.keterangan} onChange={handleChange} disabled={isAdmin} className="w-full border px-3 py-2 rounded" rows={3} placeholder="Tulis tambahan keterangan jika ada" />
      </div>
    </div>
  </main>
</div>
);
}