"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Building2, Eye, Target, Check } from "lucide-react";

export function AboutUs() {
    const sectionRef = useRef<HTMLElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const element = sectionRef.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.05 }
        );

        observer.observe(element);

        return () => {
            if (element) observer.unobserve(element);
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            className="w-full bg-[#FAFAFA] pt-16 md:pt-36 pb-16 md:pb-24 px-4 sm:px-8 lg:px-16 overflow-hidden"
        >
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                <div
                    className={`lg:col-span-7 flex flex-col justify-start transition-all duration-500 ease-out transform ${
                        isVisible
                            ? "opacity-100 translate-x-0"
                            : "opacity-0 -translate-x-12"
                    }`}
                >
                    <div className="relative">
                        <div className="absolute left-[25px] top-6 bottom-2 w-[2px] bg-gradient-to-b from-[#C99A29] via-[#8C3A69] to-[#8C3A69]/30 hidden sm:block z-0" />
                        <div>
                            <div className="flex items-center gap-4 relative z-10">
                                <div className="relative w-13 h-15 shrink-0 flex items-center justify-center">
                                    <svg viewBox="0 0 100 115" className="absolute inset-0 w-full h-full filter drop-shadow-sm">
                                        <defs>
                                            <linearGradient id="goldHexGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                                <stop offset="0%" stopColor="#E8BD44" />
                                                <stop offset="50%" stopColor="#C99A29" />
                                                <stop offset="100%" stopColor="#9F761A" />
                                            </linearGradient>
                                        </defs>
                                        <polygon points="50 0, 100 25, 100 85, 50 115, 0 85, 0 25" fill="url(#goldHexGrad)" />
                                    </svg>
                                    <Building2 className="w-6 h-6 text-white z-10 relative" />
                                </div>

                                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#C2982B] tracking-tight">
                                    About Us
                                </h2>
                            </div>

                            <p className="text-slate-700 font-medium text-base leading-relaxed sm:pl-18 mt-2">
                                <strong className="font-extrabold text-slate-900">Waschen Laundry</strong> adalah bagian dari{" "}
                                <strong className="font-extrabold text-slate-900">PT Waschen Alora Indonesia</strong>, yang menawarkan perawatan{" "}
                                <strong className="font-extrabold text-slate-900">laundry premium</strong> yang melayani kebutuhan{" "}
                                <strong className="font-extrabold text-slate-900">B2B</strong> (perhotelan, korporat, mitra retail) maupun{" "}
                                <strong className="font-extrabold text-slate-900">B2C</strong> (perorangan, keluarga).
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 mt-14 pt-2 gap-8 sm:gap-6">
                            <div className="flex flex-col justify-start">
                                <div className="flex items-center gap-4 mb-3 relative z-10">
                                    <div className="relative w-13 h-15 shrink-0 flex items-center justify-center">
                                        <svg viewBox="0 0 100 115" className="absolute inset-0 w-full h-full filter drop-shadow-sm">
                                            <defs>
                                                <linearGradient id="purpleHexGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                                    <stop offset="0%" stopColor="#8C3A69" />
                                                    <stop offset="100%" stopColor="#481233" />
                                                </linearGradient>
                                            </defs>
                                            <polygon points="50 0, 100 25, 100 85, 50 115, 0 85, 0 25" fill="url(#purpleHexGrad)" />
                                        </svg>
                                        <Eye className="w-6 h-6 text-white z-10 relative" />
                                    </div>

                                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#631F48] tracking-tight">
                                        Our Vision
                                    </h3>
                                </div>

                                <p className="text-slate-600 font-medium text-sm sm:text-base leading-relaxed sm:pl-18">
                                    Penyedia layanan laundry terpercaya di Indonesia dengan fokus pada kebersihan, kenyamanan, dan kepuasan pelanggan.
                                </p>
                            </div>

                            <div className="flex flex-col justify-start">
                                <div className="flex items-center gap-4 mb-3 relative z-10">
                                    <div className="relative w-13 h-15 shrink-0 flex items-center justify-center">
                                        <svg viewBox="0 0 100 115" className="absolute inset-0 w-full h-full filter drop-shadow-sm">
                                            <polygon points="50 4, 96 26, 96 84, 50 106, 4 84, 4 26" fill="white" stroke="#631F48" strokeWidth="6" />
                                        </svg>
                                        <Target className="w-6 h-6 text-[#631F48] z-10 relative" />
                                    </div>

                                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#631F48] tracking-tight">
                                        Our Mission
                                    </h3>
                                </div>

                                <ul className="space-y-2.5 text-slate-600 font-medium text-sm sm:text-base pl-5">
                                    <li className="flex items-center gap-2.5">
                                        <Check className="w-4.5 h-4.5 text-[#8C3A69] shrink-0 stroke-[2.5]" />
                                        <span>Layanan profesional &amp; berkualitas</span>
                                    </li>
                                    <li className="flex items-center gap-2.5">
                                        <Check className="w-4.5 h-4.5 text-[#8C3A69] shrink-0 stroke-[2.5]" />
                                        <span>Teknologi modern &amp; inovasi</span>
                                    </li>
                                    <li className="flex items-center gap-2.5">
                                        <Check className="w-4.5 h-4.5 text-[#8C3A69] shrink-0 stroke-[2.5]" />
                                        <span>Higienis, rapi &amp; terpercaya</span>
                                    </li>
                                    <li className="flex items-center gap-2.5">
                                        <Check className="w-4.5 h-4.5 text-[#8C3A69] shrink-0 stroke-[2.5]" />
                                        <span>Layanan lengkap &amp; praktis</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className={`lg:col-span-5 flex justify-center items-center w-full transition-all duration-500 ease-out delay-75 transform ${
                        isVisible
                            ? "opacity-100 translate-x-0"
                            : "opacity-0 translate-x-12"
                    }`}
                >
                    <div className="relative w-full max-w-[480px] lg:max-w-[540px] group cursor-pointer transition-transform duration-500 ease-out transform group-hover:scale-[1.04]">
                        <Image
                            src="/about-us/side-about-us.svg"
                            alt="Waschen Laundry - PT Waschen Alora Indonesia Layanan Laundry Premium & B2B Hotel Rumah Sakit"
                            width={540}
                            height={540}
                            className="w-full h-auto object-contain"
                            priority
                        />

                        <Image
                            src="/about-us/side-about-us-1.svg"
                            alt="Waschen Laundry Premium & B2B Service Jabodetabek"
                            width={540}
                            height={540}
                            className="absolute inset-0 w-full h-auto object-contain transition-opacity duration-500 ease-out opacity-0 group-hover:opacity-100"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}