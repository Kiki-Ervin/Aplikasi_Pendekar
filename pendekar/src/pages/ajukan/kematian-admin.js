import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function KematianAdminForm() {
const router = useRouter();
const { id } = router.query;

const [form, setForm] = useState({
nik: "",
no_kk: "",
nama: "",
jenis_kelamin: "",
tempat_lahir: "",
tanggal_lahir: "",
tanggal_meninggal: "",
sebab_kematian: "",
alamat: "",
rt: "",
rw: "",
desa: "",
kecamatan: "",
kab_kota: "",
provinsi: "",
kewarganegaraan: "",
nama_pelapor: "",
hubungan_pelapor: "",
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
      <h1 className="text-xl font-bold">📝 Surat Keterangan Kematian (Admin)</h1>
      <div className="space-x-2">
        <button onClick={handleTolak} className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">Tolak</button>
        <button onClick={handleCetak} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Cetak</button>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white p-4 rounded shadow">
        <h2 className="font-semibold text-sm mb-2">Data Almarhum/Almarhumah</h2>
        <div className="grid grid-cols-2 gap-4 mb-2">
          {renderInput({ name: "nik", value: form.nik, placeholder: "NIK" })}
          {renderInput({ name: "no_kk", value: form.no_kk, placeholder: "No. KK" })}
          {renderInput({ name: "nama", value: form.nama, placeholder: "Nama Lengkap", className: "col-span-2 border px-3 py-2 rounded bg-gray-100" })}
          {renderInput({ name: "jenis_kelamin", value: form.jenis_kelamin, placeholder: "Jenis Kelamin" })}
          {renderInput({ name: "tempat_lahir", value: form.tempat_lahir, placeholder: "Tempat Lahir" })}
          {renderInput({ name: "tanggal_lahir", value: form.tanggal_lahir, placeholder: "Tanggal Lahir" })}
          {renderInput({ name: "tanggal_meninggal", value: form.tanggal_meninggal, placeholder: "Tanggal Meninggal" })}
          {renderInput({ name: "sebab_kematian", value: form.sebab_kematian, placeholder: "Sebab Kematian" })}
        </div>
      </div>

      <div className="bg-white p-4 rounded shadow">
        <h2 className="font-semibold text-sm mb-2">Alamat Domisili</h2>
        <div className="grid grid-cols-2 gap-4 mb-2">
          {renderInput({ name: "alamat", value: form.alamat, placeholder: "Alamat", className: "col-span-2 border px-3 py-2 rounded bg-gray-100" })}
          {renderInput({ name: "rt", value: form.rt, placeholder: "RT" })}
          {renderInput({ name: "rw", value: form.rw, placeholder: "RW" })}
          {renderInput({ name: "desa", value: form.desa, placeholder: "Desa" })}
          {renderInput({ name: "kecamatan", value: form.kecamatan, placeholder: "Kecamatan" })}
          {renderInput({ name: "kab_kota", value: form.kab_kota, placeholder: "Kab/Kota" })}
          {renderInput({ name: "provinsi", value: form.provinsi, placeholder: "Provinsi" })}
          {renderInput({ name: "kewarganegaraan", value: form.kewarganegaraan, placeholder: "Kewarganegaraan" })}
        </div>
      </div>

      <div className="bg-white p-4 rounded shadow">
        <h2 className="font-semibold text-sm mb-2">Data Pelapor</h2>
        <div className="grid grid-cols-2 gap-4 mb-2">
          {renderInput({ name: "nama_pelapor", value: form.nama_pelapor, placeholder: "Nama Pelapor", className: "col-span-2 border px-3 py-2 rounded bg-gray-100" })}
          {renderInput({ name: "hubungan_pelapor", value: form.hubungan_pelapor, placeholder: "Hubungan dengan Almarhum", className: "col-span-2 border px-3 py-2 rounded bg-gray-100" })}
        </div>
      </div>

      <div className="bg-white p-4 rounded shadow">
        <h2 className="font-semibold text-sm mb-2">Keperluan</h2>
        <textarea name="keperluan" value={form.keperluan} disabled className="w-full border px-3 py-2 rounded mb-2 bg-gray-100" rows={3} placeholder="Contoh: Pengajuan akta kematian" />
        <textarea name="tambahan_keterangan" value={form.tambahan_keterangan} disabled className="w-full border px-3 py-2 rounded bg-gray-100" rows={3} placeholder="Tulis tambahan keterangan jika ada" />
      </div>
    </div>
  </main>
</div>
);
}