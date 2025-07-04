import { useRouter } from 'next/router';
import { useState } from 'react';

export default function TidakMampuForm() {
const router = useRouter();
const [form, setForm] = useState({
nik: '',
no_kk: '',
nama: '',
agama: '',
jenis_kelamin: '',
tempat_lahir: '',
tanggal_lahir: '',
alamat: '',
rt: '',
rw: '',
desa: '',
kecamatan: '',
kabupaten: '',
provinsi: '',
kewarganegaraan: '',
pendidikan_terakhir: '',
pendidikan_ditempuh: '',
pekerjaan: '',
keperluan: '',
tambahan_keterangan: '',
});

const handleChange = (e) => {
setForm({ ...form, [e.target.name]: e.target.value });
};

const handleSubmit = async () => {
try {
const res = await fetch('/api/tidak-mampu', {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify(form),
});

  if (res.ok) {
    alert('Data berhasil diajukan');
    router.push('/permohonan');
  } else {
    alert('Gagal mengirim data');
  }
} catch (err) {
  console.error(err);
  alert('Terjadi error');
}
};

return (
<div className="flex min-h-screen bg-gray-50">
{/* Sidebar */}
<aside className="w-64 bg-white border-r p-6">
<div className="text-green-600 font-bold text-lg mb-8 flex items-center gap-2">
🛡️ Pendekar
</div>
<nav className="space-y-2">
<button onClick={() => router.back()} className="bg-green-600 block px-4 py-2 text-white hover:bg-green-100 rounded">
← Kembali
</button>
</nav>
</aside>


  {/* Form Content */}
  <main className="flex-1 p-6 overflow-auto">
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-xl font-bold text-black">📝 Surat Keterangan Tidak Mampu</h1>
      <button onClick={handleSubmit} className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
        Kirim
      </button>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Data Diri */}
      <div className="bg-white p-4 rounded shadow">
        <h2 className="font-semibold text-sm text-black mb-2">Data Diri</h2>
        <p className="text-xs text-gray-500 mb-4">Informasi data diri penduduk yang bersangkutan</p>
        <div className="grid grid-cols-2 gap-4 mb-2">
          <input name="nik" type="text" placeholder="NIK" className="border px-3 py-2 rounded" value={form.nik} onChange={handleChange} />
          <input name="no_kk" type="text" placeholder="No. KK" className="border px-3 py-2 rounded" value={form.no_kk} onChange={handleChange} />
          <input name="nama" type="text" placeholder="Nama" className="col-span-2 border px-3 py-2 rounded" value={form.nama} onChange={handleChange} />
          <input name="agama" type="text" placeholder="Agama" className="border px-3 py-2 rounded" value={form.agama} onChange={handleChange} />
          <input name="jenis_kelamin" type="text" placeholder="Jenis Kelamin" className="border px-3 py-2 rounded" value={form.jenis_kelamin} onChange={handleChange} />
          <input name="tempat_lahir" type="text" placeholder="Tempat Lahir" className="border px-3 py-2 rounded" value={form.tempat_lahir} onChange={handleChange} />
          <input name="tanggal_lahir" type="date" placeholder="Tanggal Lahir" className="border px-3 py-2 rounded" value={form.tanggal_lahir} onChange={handleChange} />
        </div>
      </div>

      {/* Alamat */}
      <div className="bg-white p-4 rounded shadow">
        <h2 className="font-semibold text-sm text-black mb-2">Alamat</h2>
        <p className="text-xs text-gray-500 mb-4">Informasi alamat penduduk yang bersangkutan</p>
        <div className="grid grid-cols-2 gap-4 mb-2">
          <input name="alamat" type="text" placeholder="Alamat" className="col-span-2 border px-3 py-2 rounded" value={form.alamat} onChange={handleChange} />
          <input name="rt" type="text" placeholder="RT" className="border px-3 py-2 rounded" value={form.rt} onChange={handleChange} />
          <input name="rw" type="text" placeholder="RW" className="border px-3 py-2 rounded" value={form.rw} onChange={handleChange} />
          <input name="desa" type="text" placeholder="Desa" className="border px-3 py-2 rounded" value={form.desa} onChange={handleChange} />
          <input name="kecamatan" type="text" placeholder="Kecamatan" className="border px-3 py-2 rounded" value={form.kecamatan} onChange={handleChange} />
          <input name="kabupaten" type="text" placeholder="Kab/Kota" className="border px-3 py-2 rounded" value={form.kabupaten} onChange={handleChange} />
          <input name="provinsi" type="text" placeholder="Provinsi" className="border px-3 py-2 rounded" value={form.provinsi} onChange={handleChange} />
          <input name="kewarganegaraan" type="text" placeholder="Kewarganegaraan" className="border px-3 py-2 rounded" value={form.kewarganegaraan} onChange={handleChange} />
        </div>
      </div>

      {/* Pendidikan dan Pekerjaan */}
      <div className="bg-white p-4 rounded shadow">
        <h2 className="font-semibold text-black text-sm mb-2">Pendidikan dan Pekerjaan</h2>
        <p className="text-xs text-gray-500 mb-4">Informasi pendidikan dan pekerjaan</p>
        <div className="grid grid-cols-2 gap-4 mb-2">
          <input name="pendidikan_terakhir" type="text" placeholder="Pendidikan Terakhir" className="border px-3 py-2 rounded" value={form.pendidikan_terakhir} onChange={handleChange} />
          <input name="pendidikan_ditempuh" type="text" placeholder="Pendidikan Ditempuh" className="border px-3 py-2 rounded" value={form.pendidikan_ditempuh} onChange={handleChange} />
          <input name="pekerjaan" type="text" placeholder="Pekerjaan" className="col-span-2 border px-3 py-2 rounded" value={form.pekerjaan} onChange={handleChange} />
        </div>
      </div>

      {/* Keperluan */}
      <div className="bg-white p-4 rounded shadow">
        <h2 className="font-semibold text-black text-sm mb-2">Keperluan</h2>
        <p className="text-xs text-gray-500 mb-4">Untuk keperluan apa?</p>
        <textarea name="keperluan" className="w-full border px-3 py-2 rounded mb-2" rows={3} placeholder="Silahkan tulis keperluan" value={form.keperluan} onChange={handleChange} />
        <textarea name="tambahan_keterangan" className="w-full border px-3 py-2 rounded" rows={3} placeholder="Tulis tambahan keterangan jika ada" value={form.tambahan_keterangan} onChange={handleChange} />
      </div>
    </div>
  </main>
</div>
);
}