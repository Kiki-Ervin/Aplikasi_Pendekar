import { useRouter } from 'next/router';
import { useState } from 'react';

export default function KelahiranForm() {
const router = useRouter();
const [form, setForm] = useState({
nik_anak: '',
no_kk: '',
nama_anak: '',
jenis_kelamin: '',
tempat_lahir: '',
tanggal_lahir: '',
agama: '',
anak_ke: '',
alamat: '',
rt: '',
rw: '',
desa: '',
kecamatan: '',
kabupaten: '',
provinsi: '',
kewarganegaraan: '',
nama_ayah: '',
nama_ibu: '',
keperluan: '',
keterangan: '',
});

const handleChange = (e) => {
setForm({ ...form, [e.target.name]: e.target.value });
};

const handleKirim = async () => {
try {
const res = await fetch('/api/kelahiran', {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify(form),
});
const data = await res.json();
if (res.ok) {
alert(data.message);
router.push('/ajukan');
} else {
alert(data.message || 'Gagal menyimpan');
}
} catch (err) {
console.error(err);
alert('Terjadi kesalahan');
}
};

return (
<div className="flex min-h-screen bg-gray-50">
<aside className="w-64 bg-white border-r p-6">
<div className="text-green-600 font-bold text-lg mb-8 flex items-center gap-2">
🛡️ Pendekar
</div>
<nav className="space-y-2">
<button onClick={() => router.back()} className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">
← Kembali
</button>
</nav>
</aside>


  <main className="flex-1 p-6 overflow-auto">
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-xl font-bold">📝 Surat Keterangan Kelahiran</h1>
      <button onClick={handleKirim} className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
        Kirim
      </button>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white p-4 rounded shadow">
        <h2 className="font-semibold text-sm mb-2">Data Anak</h2>
        <div className="grid grid-cols-2 gap-4 mb-2">
          <input type="text" name="nik_anak" value={form.nik_anak} onChange={handleChange} placeholder="NIK Anak" className="border px-3 py-2 rounded" />
          <input type="text" name="no_kk" value={form.no_kk} onChange={handleChange} placeholder="No. KK" className="border px-3 py-2 rounded" />
          <input type="text" name="nama_anak" value={form.nama_anak} onChange={handleChange} placeholder="Nama Anak" className="col-span-2 border px-3 py-2 rounded" />
          <input type="text" name="jenis_kelamin" value={form.jenis_kelamin} onChange={handleChange} placeholder="Jenis Kelamin" className="border px-3 py-2 rounded" />
          <input type="text" name="tempat_lahir" value={form.tempat_lahir} onChange={handleChange} placeholder="Tempat Lahir" className="border px-3 py-2 rounded" />
          <input type="text" name="tanggal_lahir" value={form.tanggal_lahir} onChange={handleChange} placeholder="Tanggal Lahir" className="border px-3 py-2 rounded" />
          <input type="text" name="agama" value={form.agama} onChange={handleChange} placeholder="Agama" className="border px-3 py-2 rounded" />
          <input type="text" name="anak_ke" value={form.anak_ke} onChange={handleChange} placeholder="Anak ke-" className="border px-3 py-2 rounded" />
        </div>
      </div>

      <div className="bg-white p-4 rounded shadow">
        <h2 className="font-semibold text-sm mb-2">Alamat</h2>
        <div className="grid grid-cols-2 gap-4 mb-2">
          <input type="text" name="alamat" value={form.alamat} onChange={handleChange} placeholder="Alamat" className="col-span-2 border px-3 py-2 rounded" />
          <input type="text" name="rt" value={form.rt} onChange={handleChange} placeholder="RT" className="border px-3 py-2 rounded" />
          <input type="text" name="rw" value={form.rw} onChange={handleChange} placeholder="RW" className="border px-3 py-2 rounded" />
          <input type="text" name="desa" value={form.desa} onChange={handleChange} placeholder="Desa" className="border px-3 py-2 rounded" />
          <input type="text" name="kecamatan" value={form.kecamatan} onChange={handleChange} placeholder="Kecamatan" className="border px-3 py-2 rounded" />
          <input type="text" name="kabupaten" value={form.kabupaten} onChange={handleChange} placeholder="Kab/Kota" className="border px-3 py-2 rounded" />
          <input type="text" name="provinsi" value={form.provinsi} onChange={handleChange} placeholder="Provinsi" className="border px-3 py-2 rounded" />
          <input type="text" name="kewarganegaraan" value={form.kewarganegaraan} onChange={handleChange} placeholder="Kewarganegaraan" className="border px-3 py-2 rounded" />
        </div>
      </div>

      <div className="bg-white p-4 rounded shadow">
        <h2 className="font-semibold text-sm mb-2">Data Orang Tua</h2>
        <div className="grid grid-cols-2 gap-4 mb-2">
          <input type="text" name="nama_ayah" value={form.nama_ayah} onChange={handleChange} placeholder="Nama Ayah" className="col-span-2 border px-3 py-2 rounded" />
          <input type="text" name="nama_ibu" value={form.nama_ibu} onChange={handleChange} placeholder="Nama Ibu" className="col-span-2 border px-3 py-2 rounded" />
        </div>
      </div>

      <div className="bg-white p-4 rounded shadow">
        <h2 className="font-semibold text-sm mb-2">Keperluan</h2>
        <textarea name="keperluan" value={form.keperluan} onChange={handleChange} className="w-full border px-3 py-2 rounded mb-2" rows={3} placeholder="Contoh: Pengajuan akta kelahiran" />
        <textarea name="keterangan" value={form.keterangan} onChange={handleChange} className="w-full border px-3 py-2 rounded" rows={3} placeholder="Tulis tambahan keterangan jika ada" />
      </div>
    </div>
  </main>
</div>
);
}