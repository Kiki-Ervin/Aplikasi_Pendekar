import { useState } from "react";
import { useRouter } from "next/router";

export default function AdminLogin() {
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const router = useRouter();

const handleSubmit = async (e) => {
e.preventDefault();

try {
  const res = await fetch("/api/admin/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });

  if (res.ok) {
    router.push("/admin/dashboard");
  } else {
    const data = await res.json().catch(() => ({}));
    alert(data?.message || "Username atau Password salah");
  }
} catch (err) {
  console.error(err);
  alert("Terjadi kesalahan");
}
};

return (
<div className="flex items-center justify-center min-h-screen bg-white text-black">
<div className="w-full max-w-sm p-6 border rounded shadow">
<h2 className="text-xl font-semibold mb-2">Admin Login</h2>
<p className="text-gray-500 mb-4 text-sm">
Masukkan username dan password untuk masuk
</p>


    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm mb-1">Username</label>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full border px-3 py-2 rounded"
          required
        />
        <p className="text-xs text-gray-500 mt-1">
          Silakan masukkan username
        </p>
      </div>

      <div>
        <label className="block text-sm mb-1">Password</label>
        <input
          type="password"
          placeholder="********"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border px-3 py-2 rounded"
          required
        />
        <p className="text-xs text-gray-500 mt-1">
          Silakan masukkan password
        </p>
      </div>

      <button
        type="submit"
        className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
      >
        Masuk
      </button>
    </form>

    <div className="mt-4 text-center text-sm">
      atau{" "}
      <button
        onClick={() => router.push("/login")}
        className="text-green-600 hover:underline"
      >
        Login sebagai Penduduk
      </button>
    </div>
  </div>
</div>
);
}