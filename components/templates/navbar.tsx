"use client";

import { useState } from "react";
import Image from "next/image";
import { Phone, Mail, MapPin, MessageCircle, Menu, X, Navigation, ExternalLink } from "lucide-react";

function InstagramIcon({ className = "w-3.5 h-3.5 text-[#E8BD44]" }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" className={`fill-current ${className}`} xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
    );
}

const navLinks = [
    { name: "Beranda", href: "#hero" },
    { name: "Tentang Kami", href: "#about-us" },
    { name: "Layanan", href: "#our-services" },
    { name: "Keunggulan", href: "#why-choose-us" },
    { name: "Klien Kami", href: "#customer" },
    { name: "Kontak", href: "#contact-us" },
];

const branches = [
    {
        name: "Waschen Laundry Raffles Hills",
        address: "Jl. Raffles Hills Boulevard, Blok L, Sukatani, Tapos, Depok, Jawa Barat 16454",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Waschen+Laundry+Raffles+Hills",
        tag: "Depok",
    },
    {
        name: "Waschen Laundry Citra Gran",
        address: "Perum Citra Gran Cibubur, Ruko Novo MR 05, Jatikarya, Jatisampurna, Kota Bekasi, Jawa Barat 17435",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Waschen+Laundry+Citra+Gran",
        tag: "Bekasi",
    },
    {
        name: "Waschen Laundry Canadian Kota Wisata",
        address: "Ruko Canadian CBC 022, Jl. Limus Nunggal, Kota Wisata, Limus Nunggal, Cileungsi, Kabupaten Bogor, Jawa Barat 16820",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Waschen+Laundry+Canadian+Kota+Wisata",
        tag: "Cileungsi / Bogor",
    },
    {
        name: "Waschen Laundry Sentral Eropa",
        address: "Kota Wisata, Cibubur, Jawa Barat",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Waschen+Laundry+Sentral+Eropa",
        tag: "Cibubur",
    },
    {
        name: "Waschen Laundry Legenda Wisata",
        address: "Ruko Acropolis, Jl. Legenda Wisata Boulevard No. 3 C10, Nagrak, Gn. Putri, Kabupaten Bogor, Jawa Barat 16965",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Waschen+Laundry+Legenda+Wisata",
        tag: "Gunung Putri / Bogor",
    },
];

export function NavBar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [findUsOpen, setFindUsOpen] = useState(false);

    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-50 w-full shadow-md">
                <div
                    className="hidden md:flex items-center justify-between px-8 lg:px-16 py-2 text-xs text-white/90 font-medium"
                    style={{ background: "linear-gradient(90deg, #491334 0%, #631F48 50%, #852C51 100%)" }}
                >
                    <div className="flex items-center gap-6">
                        <a
                            href="tel:085122333371"
                            className="flex items-center gap-2 hover:text-[#E8BD44] transition-colors"
                        >
                            <Phone className="w-3.5 h-3.5 text-[#E8BD44]" />
                            <span>0851-2233-3371</span>
                        </a>
                        <span className="text-white/30">|</span>
                        <a
                            href="mailto:waschen.aloraindonesia@gmail.com"
                            className="flex items-center gap-2 hover:text-[#E8BD44] transition-colors"
                        >
                            <Mail className="w-3.5 h-3.5 text-[#E8BD44]" />
                            <span>waschen.aloraindonesia@gmail.com</span>
                        </a>
                    </div>

                    <div className="flex items-center gap-6">
                        <button
                            onClick={() => setFindUsOpen(true)}
                            className="flex items-center gap-1.5 text-white/90 hover:text-[#E8BD44] transition-colors cursor-pointer"
                        >
                            <MapPin className="w-3.5 h-3.5 text-[#E8BD44]" />
                            <span>5+ Cabang Jabodetabek</span>
                        </button>
                        <span className="text-white/30">|</span>
                        <a
                            href="https://instagram.com/waschen.laundry"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 hover:text-[#E8BD44] transition-colors"
                        >
                            <InstagramIcon className="w-3.5 h-3.5 text-[#E8BD44]" />
                            <span>@waschen.laundry</span>
                        </a>
                    </div>
                </div>

                <nav className="bg-white/95 backdrop-blur-md border-b border-slate-100 py-3.5 px-6 md:px-12 lg:px-16 flex items-center justify-between transition-all duration-300">
                    <a href="#hero" className="flex items-center gap-2 group">
                        <Image
                            src="/logo/logo-waschen.svg"
                            width={140}
                            height={36}
                            alt="Waschen Laundry - Jasa Laundry Premium, Antar Jemput & B2B Jabodetabek"
                            className="object-contain transition-transform duration-300 group-hover:scale-105"
                            priority
                        />
                    </a>

                    <div className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="relative text-sm font-semibold text-slate-700 hover:text-[#631F48] transition-colors duration-200 py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#631F48] hover:after:w-full after:transition-all after:duration-300"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    <div className="hidden lg:flex items-center gap-3">
                        <a
                            href="https://wa.me/6285122333371"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#631F48] to-[#852C51] hover:from-[#491334] hover:to-[#631F48] text-white text-sm font-bold px-5 py-2.5 rounded-full shadow-md shadow-[#631F48]/20 hover:shadow-lg hover:shadow-[#631F48]/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
                        >
                            <MessageCircle className="w-4 h-4 fill-white text-[#631F48]" />
                            <span>Hubungi Kami</span>
                        </a>
                    </div>

                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="lg:hidden p-2 text-slate-700 hover:text-[#631F48] focus:outline-none"
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </nav>

                {mobileMenuOpen && (
                    <div className="lg:hidden bg-white border-b border-slate-200 shadow-xl px-6 py-6 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
                        <div className="flex flex-col gap-3">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-base font-semibold text-slate-700 hover:text-[#631F48] py-2 border-b border-slate-100 transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>

                        <button
                            onClick={() => {
                                setMobileMenuOpen(false);
                                setFindUsOpen(true);
                            }}
                            className="flex items-center justify-center gap-2 w-full border-2 border-[#C2982B] text-[#631F48] font-bold py-2.5 rounded-full text-sm"
                        >
                            <MapPin className="w-4 h-4 text-[#C2982B]" />
                            <span>Find Us (Cari Waschen Terdekat)</span>
                        </button>

                        <div className="pt-2 flex flex-col gap-2.5 text-xs text-slate-600">
                            <div className="flex items-center gap-2">
                                <Phone className="w-4 h-4 text-[#631F48]" />
                                <span>0851-2233-3371</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Mail className="w-4 h-4 text-[#631F48]" />
                                <span>waschen.aloraindonesia@gmail.com</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <InstagramIcon className="w-4 h-4 text-[#631F48]" />
                                <span>@waschen.laundry</span>
                            </div>
                        </div>

                        <a
                            href="https://wa.me/6285122333371"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setMobileMenuOpen(false)}
                            className="mt-2 flex items-center justify-center gap-2 w-full bg-gradient-to-r from-[#631F48] to-[#852C51] text-white font-bold py-3 rounded-full shadow-md text-sm"
                        >
                            <MessageCircle className="w-4 h-4 fill-white text-[#631F48]" />
                            <span>Hubungi Via WhatsApp</span>
                        </a>
                    </div>
                )}
            </header>

            <button
                onClick={() => setFindUsOpen(true)}
                className="fixed right-0 top-1/2 -translate-y-1/2 z-40 flex flex-col items-center gap-3 bg-gradient-to-b from-[#491334] via-[#631F48] to-[#852C51] text-white py-4 px-3 rounded-l-2xl shadow-2xl border-l-2 border-y-2 border-[#E8BD44] hover:-translate-x-1.5 active:translate-x-0 transition-all duration-300 group cursor-pointer"
                aria-label="Cari Waschen Terdekat (Find Us)"
            >
                <div className="relative flex items-center justify-center">
                    <span className="animate-ping absolute inline-flex h-3.5 w-3.5 rounded-full bg-[#E8BD44] opacity-75"></span>
                    <MapPin className="w-5 h-5 text-[#E8BD44] relative z-10 transition-transform duration-300 group-hover:scale-125" />
                </div>
                <span
                    className="font-extrabold text-xs tracking-widest text-white uppercase select-none"
                    style={{ writingMode: "vertical-lr", transform: "rotate(180deg)" }}
                >
                    FIND US
                </span>
            </button>

            {findUsOpen && (
                <div className="fixed inset-0 z-[100] flex justify-end">
                    <div
                        onClick={() => setFindUsOpen(false)}
                        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
                    />

                    <div className="relative w-full sm:w-[460px] bg-white h-full shadow-2xl z-[101] flex flex-col animate-in slide-in-from-right duration-300">
                        <div
                            className="p-6 text-white relative"
                            style={{ background: "linear-gradient(135deg, #491334 0%, #631F48 100%)" }}
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-xs text-[#E8BD44] font-medium border border-white/20">
                                    <MapPin className="w-3.5 h-3.5 text-[#E8BD44]" />
                                    <span>Lokasi Cabang</span>
                                </div>
                                <button
                                    onClick={() => setFindUsOpen(false)}
                                    className="p-1 rounded-full hover:bg-white/20 text-white transition-colors cursor-pointer"
                                    aria-label="Tutup panel"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            <h2 className="text-2xl font-black mt-3 tracking-tight">
                                Cari Waschen Terdekatmu!
                            </h2>
                            <p className="text-xs text-white/80 mt-1 leading-relaxed">
                                Temukan lokasi unit Waschen Laundry terdekat di kota Anda & petunjuk arah Google Maps.
                            </p>
                        </div>

                        <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-slate-50">
                            {branches.map((b, idx) => (
                                <div
                                    key={b.name}
                                    className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                                >
                                    <div>
                                        <div className="flex items-start justify-between gap-2">
                                            <span className="text-[10px] uppercase tracking-wider font-extrabold text-[#631F48] bg-[#631F48]/10 px-2.5 py-0.5 rounded-full">
                                                {b.tag}
                                            </span>
                                            <span className="text-xs font-semibold text-slate-400">
                                                #{idx + 1}
                                            </span>
                                        </div>

                                        <h3 className="font-bold text-slate-900 text-base mt-2 leading-snug">
                                            {b.name}
                                        </h3>

                                        <div className="flex items-start gap-2.5 mt-2.5 text-xs text-slate-600 leading-relaxed">
                                            <MapPin className="w-4 h-4 text-[#631F48] shrink-0 mt-0.5" />
                                            <span>{b.address}</span>
                                        </div>
                                    </div>

                                    <a
                                        href={b.mapsUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center gap-2 w-full mt-4 bg-gradient-to-r from-[#631F48] to-[#852C51] hover:from-[#491334] hover:to-[#631F48] text-white text-xs font-bold py-2.5 px-4 rounded-xl transition-all shadow-sm hover:shadow active:scale-[0.98]"
                                    >
                                        <Navigation className="w-3.5 h-3.5 text-[#E8BD44]" />
                                        <span>Buka di Google Maps</span>
                                        <ExternalLink className="w-3 h-3 text-white/70 ml-auto" />
                                    </a>
                                </div>
                            ))}
                        </div>

                        <div className="p-4 border-t border-slate-200 bg-white text-center text-xs text-slate-500">
                            Punya pertanyaan seputar layanan & antar-jemput?{" "}
                            <a
                                href="https://wa.me/6285122333371"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-bold text-[#631F48] underline hover:text-[#852C51]"
                            >
                                Hubungi CS Kami
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}