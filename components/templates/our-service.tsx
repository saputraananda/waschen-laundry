"use client";

import Image from "next/image";

export function OurService() {
    const services = [
        { id: 1, src: "/our-service/carousel (1).svg", alt: "Waschen Laundry Premium Kiloan & Satuan" },
        { id: 2, src: "/our-service/carousel (2).svg", alt: "Laundry Express Antar Jemput Terdekat Cibubur Bekasi Depok" },
        { id: 3, src: "/our-service/carousel (3).svg", alt: "Laundry Free Pickup Delivery Jabodetabek" },
        { id: 4, src: "/our-service/carousel (4).svg", alt: "Jasa Laundry B2B Hotel & Linen Profesional" },
        { id: 5, src: "/our-service/carousel (5).svg", alt: "Laundry Rumah Sakit Hospital Higienis" },
        { id: 6, src: "/our-service/carousel (6).svg", alt: "Layanan Laundry Premium untuk Perusahaan & Korporat" },
        { id: 7, src: "/our-service/carousel (7).svg", alt: "Laundry Satuan Jas Bedcover Gorden Perawatan Perhiasan Linen" },
        { id: 8, src: "/our-service/carousel (8).svg", alt: "Waschen Laundry Kota Wisata Raffles Hills Legenda Wisata Citra Gran" },
        { id: 9, src: "/our-service/carousel (9).svg", alt: "Commercial & Industrial B2B Laundry Service" },
        { id: 10, src: "/our-service/carousel (10).svg", alt: "Pesan & Booking Laundry Online Delivery Waschen" },
    ];

    const marqueeServices = [...services, ...services];

    return (
        <section className="w-full bg-[#FAFAFA] py-16 md:py-24 overflow-hidden">
            <style>{`
                @keyframes marquee {
                    0% { transform: translateX(0%); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    display: flex;
                    width: max-content;
                    animation: marquee 35s linear infinite;
                }
                .animate-marquee:hover {
                    animation-play-state: paused;
                }
            `}</style>

            <div className="max-w-7xl mx-auto flex flex-col items-center px-4 sm:px-8 mb-8">
                <h2 className="text-4xl sm:text-5xl font-extrabold text-center tracking-tight">
                    <span className="text-[#631F48]">Our </span>
                    <span className="text-[#C2982B]">Services</span>
                </h2>

                <p className="max-w-2xl mx-auto text-slate-600 font-medium text-center text-base sm:text-lg leading-relaxed mt-4 mb-8">
                    Kami menangani berbagai jenis pakaian dan perlengkapan dengan perawatan profesional agar tetap bersih, segar, dan terjaga kualitasnya.
                </p>
            </div>

            <div className="relative w-full overflow-hidden py-4">
                <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#FAFAFA] to-transparent z-20 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#FAFAFA] to-transparent z-20 pointer-events-none" />

                <div className="animate-marquee flex items-center gap-4 sm:gap-6">
                    {marqueeServices.map((service, index) => (
                        <div
                            key={`${service.id}-${index}`}
                            className="flex-none flex items-center justify-center cursor-pointer transition-transform duration-300 hover:scale-105"
                        >
                            <Image
                                src={service.src}
                                alt={service.alt}
                                width={280}
                                height={280}
                                className="w-36 h-auto sm:w-44 md:w-52 lg:w-56 object-contain drop-shadow-md"
                                priority={index < 5}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}