import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-[#F8F8F8] text-center">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 shadow-xl border border-slate-100 flex flex-col items-center">
        <div className="relative w-24 h-24 mb-4">
          <Image
            src="/logo/logo-waschen.png"
            alt="Waschen Laundry Logo"
            fill
            className="object-contain"
          />
        </div>
        <h1 className="text-6xl font-extrabold text-[#631F48] mb-2">404</h1>
        <h2 className="text-xl font-bold text-slate-800 mb-3">
          Halaman Tidak Ditemukan
        </h2>
        <p className="text-slate-600 text-sm mb-6 leading-relaxed">
          Maaf, halaman yang Anda cari tidak tersedia atau telah dipindahkan.
          Kembali ke beranda Waschen Laundry untuk layanan laundry premium &amp; B2B antar jemput.
        </p>
        <Link
          href="/"
          className="w-full py-3.5 px-6 rounded-2xl bg-[#631F48] hover:bg-[#501739] text-white font-bold text-sm transition-all duration-300 shadow-md hover:shadow-lg"
        >
          Kembali ke Beranda
        </Link>
      </div>
    </main>
  );
}
