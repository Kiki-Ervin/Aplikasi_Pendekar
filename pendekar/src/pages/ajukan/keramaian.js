import { useRouter } from 'next/router';
import { useState } from 'react';

export default function IzinKeramaianForm() {
const router = useRouter();
const [form, setForm] = useState({
nik_penyelenggara: '',
no_kk: '',
nama_penyelenggara: '',
tempat_lahir: '',
tanggal_lahir: '',
pekerjaan: '',
alamat_acara: '',
tanggal_kegiatan: '',
waktu_mulai: '',
waktu_selesai: '',
jenis_acara: '',
deskripsi_acara: '',
keperluan: '',
tambahan_keterangan: '',
});

const handleChange = (e) => {
setForm({ ...form, [e.target.name]: e.target.value });
};

const handleSubmit = async () => {
try {
const res = await fetch('/api/keramaian', {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify(form),
});
if (res.ok) {
alert('Data berhasil dikirim');
router.push('/ajukan');
} else {
alert('Terjadi kesalahan');
}
} catch (err) {
console.error(err);
alert('Terjadi kesalahan');
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
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-xl font-bold text-black">📝 Surat Izin Keramaian</h1>
      <button onClick={handleSubmit} className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">Kirim</button>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-black">
      
      {/* Data Penyelenggara */}
      <div className="bg-white p-4 rounded shadow">
        <h2 className="font-semibold text-sm mb-2">Data Penyelenggara</h2>
        <div className="grid grid-cols-2 gap-4 mb-2">
          <input name="nik_penyelenggara" value={form.nik_penyelenggara} onChange={handleChange} placeholder="NIK Penyelenggara" className="border px-3 py-2 rounded" />
          <input name="no_kk" value={form.no_kk} onChange={handleChange} placeholder="No. KK" className="border px-3 py-2 rounded" />
          <input name="nama_penyelenggara" value={form.nama_penyelenggara} onChange={handleChange} placeholder="Nama Penyelenggara" className="col-span-2 border px-3 py-2 rounded" />
          <input name="tempat_lahir" value={form.tempat_lahir} onChange={handleChange} placeholder="Tempat Lahir" className="border px-3 py-2 rounded" />
          <input name="tanggal_lahir" value={form.tanggal_lahir} onChange={handleChange} placeholder="Tanggal Lahir" className="border px-3 py-2 rounded" />
          <input name="pekerjaan" value={form.pekerjaan} onChange={handleChange} placeholder="Pekerjaan" className="col-span-2 border px-3 py-2 rounded" />
        </div>
      </div>

      {/* Lokasi & Waktu */}
      <div className="bg-white p-4 rounded shadow">
        <h2 className="font-semibold text-sm mb-2">Lokasi & Waktu Acara</h2>
        <div className="grid grid-cols-2 gap-4 mb-2">
          <input name="alamat_acara" value={form.alamat_acara} onChange={handleChange} placeholder="Alamat Acara" className="col-span-2 border px-3 py-2 rounded" />
          <input name="tanggal_kegiatan" value={form.tanggal_kegiatan} onChange={handleChange} placeholder="Tanggal Kegiatan" className="border px-3 py-2 rounded" />
          <input name="waktu_mulai" value={form.waktu_mulai} onChange={handleChange} placeholder="Waktu Mulai" className="border px-3 py-2 rounded" />
          <input name="waktu_selesai" value={form.waktu_selesai} onChange={handleChange} placeholder="Waktu Selesai" className="border px-3 py-2 rounded" />
        </div>
      </div>

      {/* Jenis Kegiatan */}
      <div className="bg-white p-4 rounded shadow">
        <h2 className="font-semibold text-sm mb-2">Jenis Acara</h2>
        <div className="grid grid-cols-1 gap-4 mb-2">
          <input name="jenis_acara" value={form.jenis_acara} onChange={handleChange} placeholder="Jenis Acara" className="border px-3 py-2 rounded" />
          <textarea name="deskripsi_acara" value={form.deskripsi_acara} onChange={handleChange} rows={3} placeholder="Deskripsi Acara" className="w-full border px-3 py-2 rounded" />
        </div>
      </div>

      {/* Keperluan */}
      <div className="bg-white p-4 rounded shadow">
        <h2 className="font-semibold text-sm mb-2">Keperluan</h2>
        <textarea name="keperluan" value={form.keperluan} onChange={handleChange} rows={3} placeholder="Contoh: Permohonan izin dari desa dan kepolisian" className="w-full border px-3 py-2 rounded mb-2" />
        <textarea name="tambahan_keterangan" value={form.tambahan_keterangan} onChange={handleChange} rows={3} placeholder="Tulis tambahan keterangan jika ada" className="w-full border px-3 py-2 rounded" />
      </div>

    </div>
  </main>
</div>
);
}