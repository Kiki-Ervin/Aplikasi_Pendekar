import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function TidakMampuAdmin() {
const router = useRouter();
const { id } = router.query;

const [form, setForm] = useState({
nik: "",
no_kk: "",
nama: "",
agama: "",
jenis_kelamin: "",
tempat_lahir: "",
tanggal_lahir: "",
alamat: "",
rt: "",
rw: "",
desa: "",
kecamatan: "",
kabupaten: "",
provinsi: "",
kewarganegaraan: "",
pendidikan_terakhir: "",
pendidikan_ditempuh: "",
pekerjaan: "",
keperluan: "",
tambahan_keterangan: "",
});

const [loading, setLoading] = useState(false);

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

const updateStatus = async (statusBaru, keteranganBaru = "") => {
if (loading) return;
setLoading(true);
try {
const res = await fetch(`/api/admin/permohonan/${id}`, {
method: "PUT",
headers: { "Content-Type": "application/json" },
body: JSON.stringify({
status: statusBaru,
keterangan: keteranganBaru,
}),
});
if (res.ok) {
alert(`Status berhasil diubah menjadi ${statusBaru}`);
router.push("/admin/permohonan");
} else {
alert("Gagal mengubah status");
}
} catch (err) {
console.error(err);
alert("Terjadi kesalahan");
} finally {
setLoading(false);
}
};

const handleCetak = () => {
if (confirm("Yakin permohonan selesai dan siap cetak?")) {
updateStatus("selesai", "sudah dicetak");
}
};

const handleTolak = () => {
const alasan = prompt("Masukkan alasan penolakan:");
if (alasan) {
updateStatus("ditolak", alasan);
}
};



const renderInput = (props) => (
<input {...props} disabled className="border px-3 py-2 rounded bg-gray-100" />
);

return (
<div className="flex min-h-screen bg-gray-50">
<aside className="w-64 bg-white border-r p-6">
<div className="text-green-600 font-bold text-lg mb-8 flex items-center gap-2">🛡️ Admin</div>
<nav className="space-y-2">
<button
  onClick={() => router.back()}
  className="block px-4 py-2 rounded bg-green-600 text-white text-sm cursor-pointer hover:bg-green-700 transition-colors duration-200"
>
  ← Kembali
</button>
</nav>
</aside>


  <main className="flex-1 p-6 overflow-auto text-black">
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-xl font-bold">📝 Surat Keterangan Tidak Mampu (Admin)</h1>
      <div className="space-x-2">
        <button onClick={handleTolak} className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">Tolak</button>
        <button onClick={handleCetak} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Cetak</button>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      
      {/* Data Diri */}
      <div className="bg-white p-4 rounded shadow">
        <h2 className="font-semibold text-sm mb-2">Data Diri</h2>
        <div className="grid grid-cols-2 gap-4 mb-2">
          {renderInput({ name: "nik", value: form.nik, placeholder: "NIK" })}
          {renderInput({ name: "no_kk", value: form.no_kk, placeholder: "No. KK" })}
          {renderInput({ name: "nama", value: form.nama, placeholder: "Nama", className: "col-span-2 border px-3 py-2 rounded bg-gray-100" })}
          {renderInput({ name: "agama", value: form.agama, placeholder: "Agama" })}
          {renderInput({ name: "jenis_kelamin", value: form.jenis_kelamin, placeholder: "Jenis Kelamin" })}
          {renderInput({ name: "tempat_lahir", value: form.tempat_lahir, placeholder: "Tempat Lahir" })}
          {renderInput({ name: "tanggal_lahir", value: form.tanggal_lahir, placeholder: "Tanggal Lahir", type: "date" })}
        </div>
      </div>

      {/* Alamat */}
      <div className="bg-white p-4 rounded shadow">
        <h2 className="font-semibold text-sm mb-2">Alamat</h2>
        <div className="grid grid-cols-2 gap-4 mb-2">
          {renderInput({ name: "alamat", value: form.alamat, placeholder: "Alamat", className: "col-span-2 border px-3 py-2 rounded bg-gray-100" })}
          {renderInput({ name: "rt", value: form.rt, placeholder: "RT" })}
          {renderInput({ name: "rw", value: form.rw, placeholder: "RW" })}
          {renderInput({ name: "desa", value: form.desa, placeholder: "Desa" })}
          {renderInput({ name: "kecamatan", value: form.kecamatan, placeholder: "Kecamatan" })}
          {renderInput({ name: "kabupaten", value: form.kabupaten, placeholder: "Kabupaten/Kota" })}
          {renderInput({ name: "provinsi", value: form.provinsi, placeholder: "Provinsi" })}
          {renderInput({ name: "kewarganegaraan", value: form.kewarganegaraan, placeholder: "Kewarganegaraan" })}
        </div>
      </div>

      {/* Pendidikan & Pekerjaan */}
      <div className="bg-white p-4 rounded shadow">
        <h2 className="font-semibold text-sm mb-2">Pendidikan & Pekerjaan</h2>
        <div className="grid grid-cols-2 gap-4 mb-2">
          {renderInput({ name: "pendidikan_terakhir", value: form.pendidikan_terakhir, placeholder: "Pendidikan Terakhir" })}
          {renderInput({ name: "pendidikan_ditempuh", value: form.pendidikan_ditempuh, placeholder: "Pendidikan Ditempuh" })}
          {renderInput({ name: "pekerjaan", value: form.pekerjaan, placeholder: "Pekerjaan", className: "col-span-2 border px-3 py-2 rounded bg-gray-100" })}
        </div>
      </div>

      {/* Keperluan */}
      <div className="bg-white p-4 rounded shadow">
        <h2 className="font-semibold text-sm mb-2">Keperluan</h2>
        <textarea name="keperluan" value={form.keperluan} disabled rows={3} placeholder="Keperluan" className="w-full border px-3 py-2 rounded bg-gray-100 mb-2" />
        <textarea name="tambahan_keterangan" value={form.tambahan_keterangan} disabled rows={3} placeholder="Tambahan Keterangan" className="w-full border px-3 py-2 rounded bg-gray-100" />
      </div>
    </div>
  </main>
</div>
);
}