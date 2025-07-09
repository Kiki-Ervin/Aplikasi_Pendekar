import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function UsahaAdmin() {
  const router = useRouter();
  const { id } = router.query;

  const [form, setForm] = useState({
    nik: "", no_kk: "", nama: "", jenis_kelamin: "", tempat_lahir: "",
    tanggal_lahir: "", agama: "", pekerjaan: "", alamat: "", rt: "", rw: "",
    desa: "", kecamatan: "", kab_kota: "", provinsi: "", kewarganegaraan: "",
    nama_usaha: "", jenis_usaha: "", alamat_usaha: "", tahun_berdiri: "",
    status_tempat: "", keperluan: "", tambahan_keterangan: ""
  });

  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [keterangan, setKeterangan] = useState("");

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

  const handleTolak = () => setShowModal(true);

  

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
          <h1 className="text-xl font-bold">📝 Surat Keterangan Usaha (Admin)</h1>
          <div className="space-x-2">
            <button onClick={handleTolak} className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">Tolak</button>
            <button onClick={handleCetak} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Cetak</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Data Diri */}
          <div className="bg-white p-4 rounded shadow">
            <h2 className="font-semibold text-sm mb-2">Data Diri Pemohon</h2>
            <div className="grid grid-cols-2 gap-4 mb-2">
              {renderInput({ name: "nik", value: form.nik, placeholder: "NIK" })}
              {renderInput({ name: "no_kk", value: form.no_kk, placeholder: "No. KK" })}
              {renderInput({ name: "nama", value: form.nama, placeholder: "Nama Lengkap", className: "col-span-2 border px-3 py-2 rounded bg-gray-100" })}
              {renderInput({ name: "jenis_kelamin", value: form.jenis_kelamin, placeholder: "Jenis Kelamin" })}
              {renderInput({ name: "tempat_lahir", value: form.tempat_lahir, placeholder: "Tempat Lahir" })}
              {renderInput({ name: "tanggal_lahir", value: form.tanggal_lahir, placeholder: "Tanggal Lahir" })}
              {renderInput({ name: "agama", value: form.agama, placeholder: "Agama" })}
              {renderInput({ name: "pekerjaan", value: form.pekerjaan, placeholder: "Pekerjaan" })}
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
              {renderInput({ name: "kab_kota", value: form.kab_kota, placeholder: "Kab/Kota" })}
              {renderInput({ name: "provinsi", value: form.provinsi, placeholder: "Provinsi" })}
              {renderInput({ name: "kewarganegaraan", value: form.kewarganegaraan, placeholder: "Kewarganegaraan" })}
            </div>
          </div>

          {/* Informasi Usaha */}
          <div className="bg-white p-4 rounded shadow">
            <h2 className="font-semibold text-sm mb-2">Informasi Usaha</h2>
            <div className="grid grid-cols-2 gap-4 mb-2">
              {renderInput({ name: "nama_usaha", value: form.nama_usaha, placeholder: "Nama Usaha", className: "col-span-2 border px-3 py-2 rounded bg-gray-100" })}
              {renderInput({ name: "jenis_usaha", value: form.jenis_usaha, placeholder: "Jenis Usaha", className: "col-span-2 border px-3 py-2 rounded bg-gray-100" })}
              {renderInput({ name: "alamat_usaha", value: form.alamat_usaha, placeholder: "Alamat Usaha", className: "col-span-2 border px-3 py-2 rounded bg-gray-100" })}
              {renderInput({ name: "tahun_berdiri", value: form.tahun_berdiri, placeholder: "Tahun Berdiri" })}
              {renderInput({ name: "status_tempat", value: form.status_tempat, placeholder: "Status Tempat" })}
            </div>
          </div>

          {/* Keperluan */}
          <div className="bg-white p-4 rounded shadow">
            <h2 className="font-semibold text-sm mb-2">Keperluan</h2>
            <textarea name="keperluan" value={form.keperluan} disabled className="w-full border px-3 py-2 rounded bg-gray-100 mb-2" rows={3} placeholder="Keperluan" />
            <textarea name="tambahan_keterangan" value={form.tambahan_keterangan} disabled className="w-full border px-3 py-2 rounded bg-gray-100" rows={3} placeholder="Tambahan Keterangan" />
          </div>
        </div>
      </main>

      {/* Modal Pop Up */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow max-w-sm w-full">
            <h2 className="text-lg font-bold mb-2">Apakah anda yakin?</h2>
            <p className="text-sm mb-4">Anda akan menolak permohonan ini. Tindakan ini tidak dapat dibatalkan.</p>
            <input
              type="text"
              placeholder="Tulis keterangan penolakan..."
              value={keterangan}
              onChange={(e) => setKeterangan(e.target.value)}
              className="w-full border px-3 py-2 rounded mb-4"
            />
            <div className="flex justify-end space-x-2">
              <button onClick={() => setShowModal(false)} className="px-4 py-2 border rounded">Batal</button>
              <button
                onClick={() => {
                  updateStatus("ditolak", keterangan);
                  setShowModal(false);
                }}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
              >
                Tolak
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
