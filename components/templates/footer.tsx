import Image from "next/image";
import { Phone, Mail, MapPin, Clock, ChevronRight, Globe } from "lucide-react";

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
    );
}

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
    );
}

const quickLinks = [
    { name: "Beranda", href: "#hero" },
    { name: "Tentang Kami", href: "#about-us" },
    { name: "Layanan Kami", href: "#our-services" },
    { name: "Keunggulan", href: "#why-choose-us" },
    { name: "Event & Promo", href: "#our-events" },
    { name: "Mitra B2B", href: "#customer" },
    { name: "Hubungi Kami", href: "#contact-us" },
];

const servicesList = [
    "Laundry B2B Korporat & Perhotelan",
    "Laundry Rumah Sakit & Higienis",
    "Dry Cleaning & Wet Care Premium",
    "Perawatan Linen & Tekstil Khusus",
    "Perawatan Tas & Sepatu Luxury",
    "Layanan Antar Jemput Gratis",
];

const branches = [
    "Waschen Legenda Wisata",
    "Waschen Sentral Eropa",
    "Waschen Raffles Hills",
    "Waschen Citra Gran",
    "Waschen Canadian",
];

export function Footer() {
    return (
        <footer className="w-full text-white">
            <div className="w-full py-16 px-6 sm:px-10 md:px-16 lg:px-24 bg-gradient-to-r from-[#441131] via-[#631F48] to-[#441131] relative overflow-hidden border-t-4 border-[#C2982B]">
                <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-[#8C3A69]/20 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -left-20 -top-20 w-96 h-96 bg-[#E8BD44]/10 rounded-full blur-3xl pointer-events-none" />

                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 relative z-10">
                    <div className="lg:col-span-4 flex flex-col items-start gap-5">
                        <Image
                            src="/logo/logo-white-waschen.svg"
                            alt="Waschen Laundry - PT Waschen Alora Indonesia Layanan Laundry Premium & B2B"
                            width={160}
                            height={70}
                            className="object-contain filter drop-shadow-md"
                        />
                        <p className="text-slate-200/90 text-sm leading-relaxed font-medium">
                            <strong className="text-white font-semibold">Waschen Laundry</strong> (PT Waschen Alora Indonesia) menghadirkan layanan perawatan laundry &amp; tekstil profesional berstandar tinggi untuk kebutuhan B2B &amp; B2C secara terpercaya, higienis, dan berkualitas.
                        </p>

                        <div className="flex items-center gap-3 mt-2">
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Instagram"
                                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#C2982B] text-white flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/10 hover:border-[#C2982B]"
                            >
                                <InstagramIcon className="w-5 h-5" />
                            </a>
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Facebook"
                                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#C2982B] text-white flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/10 hover:border-[#C2982B]"
                            >
                                <FacebookIcon className="w-5 h-5" />
                            </a>
                            <a
                                href="https://waschen.co.id"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Website"
                                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#C2982B] text-white flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/10 hover:border-[#C2982B]"
                            >
                                <Globe className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    <div className="lg:col-span-2 flex flex-col gap-4">
                        <h3 className="text-[#E8BD44] font-bold text-base tracking-wider uppercase">
                            Navigasi
                        </h3>
                        <ul className="space-y-2.5">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-slate-200/85 hover:text-[#E8BD44] text-sm font-medium transition-all duration-200 flex items-center gap-1.5 group"
                                    >
                                        <ChevronRight className="w-3.5 h-3.5 text-[#C2982B] transition-transform group-hover:translate-x-1" />
                                        <span>{link.name}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-3 flex flex-col gap-4">
                        <h3 className="text-[#E8BD44] font-bold text-base tracking-wider uppercase">
                            Layanan Unggulan
                        </h3>
                        <ul className="space-y-2.5">
                            {servicesList.map((service) => (
                                <li key={service} className="text-slate-200/85 text-sm font-medium flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#C2982B] shrink-0" />
                                    <span>{service}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-3 flex flex-col gap-4">
                        <h3 className="text-[#E8BD44] font-bold text-base tracking-wider uppercase">
                            Kontak &amp; Operasional
                        </h3>

                        <div className="flex flex-col gap-3 text-slate-200/85 text-sm">
                            <div className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-[#E8BD44] shrink-0 mt-0.5" />
                                <span>PT Waschen Alora Indonesia, Cibubur, Indonesia</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="w-4.5 h-4.5 text-[#E8BD44] shrink-0" />
                                <span>+62 812-8888-9999</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail className="w-4.5 h-4.5 text-[#E8BD44] shrink-0" />
                                <span>info@waschen.co.id</span>
                            </div>
                            <div className="flex items-start gap-3 pt-2 border-t border-white/10 mt-1">
                                <Clock className="w-4.5 h-4.5 text-[#E8BD44] shrink-0 mt-0.5" />
                                <div>
                                    <p className="font-semibold text-white">Jam Operasional:</p>
                                    <p className="text-xs text-slate-300">Senin - Sabtu: 07.00 - 20.00 WIB</p>
                                    <p className="text-xs text-slate-300">Minggu: 08.00 - 17.00 WIB</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/15">
                    <p className="text-xs font-bold tracking-widest text-[#E8BD44] uppercase mb-4 text-center sm:text-left">
                        Cabang Waschen Laundry:
                    </p>
                    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5">
                        {branches.map((branch) => (
                            <span
                                key={branch}
                                className="px-3.5 py-1.5 rounded-full bg-white/10 text-xs font-medium text-slate-200 border border-white/10 hover:border-[#E8BD44] hover:text-white transition-all cursor-default"
                            >
                                {branch}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            <div className="w-full py-5 px-6 bg-[#2B091E] border-t border-white/5 text-center text-slate-400 text-xs sm:text-sm">
                <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
                    <p>
                        © {new Date().getFullYear()} <strong className="text-white font-semibold">PT Waschen Alora Indonesia</strong>. All Rights Reserved.
                    </p>
                    <p className="text-slate-400/80">
                        Professional B2B &amp; B2C Laundry Services
                    </p>
                </div>
            </div>
        </footer>
    );
}
