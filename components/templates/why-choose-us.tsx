"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ShieldCheck, PackageCheck, Sparkles } from "lucide-react";

export function WhyChooseUs() {
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
        <section ref={sectionRef} className="w-full mt-14 sm:mt-20 overflow-hidden">
            <div className="mx-auto flex flex-col items-center relative px-4 sm:px-0">
                <div
                    className={`relative sm:absolute -top-3 sm:-top-5 z-20 max-w-3xl w-full bg-white rounded-[24px] sm:rounded-[36px] shadow-2xl border-2 border-slate-100 p-5 sm:p-10 -mb-4 sm:-mb-24 transition-all duration-700 ease-out transform ${
                        isVisible
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-8"
                    }`}
                >
                    <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-center tracking-tight mb-4 sm:mb-8">
                        <span className="text-[#631F48]">Why </span>
                        <span className="text-[#C2982B]">Choose </span>
                        <span className="text-[#631F48]">Us</span>
                    </h2>

                    <div className="grid grid-cols-3 gap-1.5 sm:gap-6 items-center">
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-3 text-center sm:text-left px-1 sm:px-4">
                            <div className="w-9 h-9 sm:w-12 sm:h-12 shrink-0 flex items-center justify-center rounded-xl sm:rounded-2xl bg-[#8C3A69]/10 text-[#8C3A69]">
                                <ShieldCheck className="w-5 h-5 sm:w-7 sm:h-7 stroke-[2]" />
                            </div>
                            <span className="text-slate-800 font-bold text-[11px] sm:text-sm md:text-base leading-snug">
                                Higienis <br className="hidden sm:block" /> dan Aman
                            </span>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-3 text-center sm:text-left border-x border-slate-200 px-1 sm:px-4">
                            <div className="w-9 h-9 sm:w-12 sm:h-12 shrink-0 flex items-center justify-center rounded-xl sm:rounded-2xl bg-[#8C3A69]/10 text-[#8C3A69]">
                                <PackageCheck className="w-5 h-5 sm:w-7 sm:h-7 stroke-[2]" />
                            </div>
                            <span className="text-slate-800 font-bold text-[11px] sm:text-sm md:text-base leading-snug">
                                Free pickup <br className="hidden sm:block" /> and delivery
                            </span>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-3 text-center sm:text-left px-1 sm:px-4">
                            <div className="w-9 h-9 sm:w-12 sm:h-12 shrink-0 flex items-center justify-center rounded-xl sm:rounded-2xl bg-[#8C3A69]/10 text-[#8C3A69]">
                                <Sparkles className="w-5 h-5 sm:w-7 sm:h-7 stroke-[2]" />
                            </div>
                            <span className="text-slate-800 font-bold text-[11px] sm:text-sm md:text-base leading-snug">
                                Jaminan <br className="hidden sm:block" /> Kehilangan
                            </span>
                        </div>
                    </div>
                </div>

                <div className="relative w-full pt-4 sm:pt-16">
                    <Image
                        src="/why-choose-us/background.png"
                        alt="Keunggulan Waschen Laundry Premium - Jasa Laundry Antar Jemput Free Pickup Delivery Jabodetabek"
                        width={1920}
                        height={1080}
                        className="w-full h-auto object-cover rounded-2xl sm:rounded-none"
                        priority
                    />
                </div>

                <a
                    href="https://wa.me/6285122333371"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`relative sm:absolute -mt-6 sm:mt-0 mb-4 sm:mb-0 mx-auto sm:mx-0 sm:left-12 md:left-36 sm:bottom-12 md:bottom-20 z-20 flex items-center justify-center sm:justify-start gap-3 sm:gap-4 bg-[#631F48] border-3 sm:border-4 border-white rounded-2xl sm:rounded-xl md:rounded-xl px-5 sm:px-6 py-3 sm:py-4 shadow-2xl transition-all duration-500 ease-out delay-100 transform hover:scale-105 hover:bg-[#501739] active:scale-95 group max-w-xs sm:max-w-none ${
                        isVisible
                            ? "opacity-100 translate-y-0 sm:translate-x-0"
                            : "opacity-0 translate-y-8 sm:-translate-x-20"
                    }`}
                >
                    <div className="w-10 h-10 sm:w-14 sm:h-14 shrink-0 bg-[#25D366] rounded-xl sm:rounded-2xl flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-110">
                        <svg className="w-6 h-6 sm:w-8 sm:h-8 fill-white" viewBox="0 0 24 24">
                            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                        </svg>
                    </div>
                    <div className="flex flex-col justify-center">
                        <span className="text-slate-200 font-medium text-xs sm:text-sm leading-tight">
                            Pickup Now!
                        </span>
                        <span className="text-white font-extrabold text-base sm:text-xl md:text-2xl tracking-wide leading-tight mt-0.5">
                            0851-2233-3371
                        </span>
                    </div>
                </a>
            </div>
        </section>
    );
}