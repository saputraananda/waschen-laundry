"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const locations = [
    {
        name: "Waschen Legenda Wisata",
        address: "Ruko Legenda, Jl. Raya Legenda Wisata No.1, Nagrak, Kec. Gn. Putri, Kab. Bogor, Jawa Barat 16967",
    },
    {
        name: "Waschen Sentra Eropa",
        address: "Sentra Eropa, Cibubur, Kec. Gn. Putri, Kab. Bogor, Jawa Barat 16968",
    },
    {
        name: "Waschen Raffles Hills",
        address: "Jl. Raffles Hills Boulevard, Blok L, Sukamati, Tajur, Kota Bogor, Jawa Barat 16144",
    },
    {
        name: "Waschen Citra Gran",
        address: "Perum Citra Gran Blok H1 No.14B-15, Jl. Alternatif Cibubur, Jatikarya, Kec. Jatisampurna, Bekasi, Jawa Barat 17435",
    },
    {
        name: "Waschen Canadian",
        address: "Ruko Canadian CBC 022, Jalan Limus Nunggal, Kota Wisata, Cileungsi, Bogor",
    },
];

function MapPinIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-8 h-8 shrink-0"
            fill="none"
        >
            <path
                d="M12 2C8.13401 2 5 5.13401 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13401 15.866 2 12 2Z"
                fill="#C2982B"
            />
            <circle cx="12" cy="9" r="3" fill="white" />
        </svg>
    );
}

export function OurEvent() {
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
        <section ref={sectionRef} className="w-full pt-40 px-4 overflow-hidden">
            <div
                className={`max-w-5xl mx-auto transition-all duration-700 ease-out transform ${
                    isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-8"
                }`}
            >
                <div className="text-center mb-6">
                    <h2
                        className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4"
                        style={{
                            background: "linear-gradient(90deg, #4A1640 0%, #9B3E75 40%, #C2698A 55%, #9B3E75 70%, #4A1640 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                        }}
                    >
                        Our Event B2B
                    </h2>
                    <p className="text-gray-500 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
                        A glimpse of our collaborations, showcasing<br />
                        moments shared with our trusted business partners.
                    </p>
                </div>

                <div className="w-full mb-12">
                    <Image
                        src="/our-event/our-event.svg"
                        alt="Mitra Kerjasama Waschen Laundry B2B Hotel dan Rumah Sakit Jabodetabek"
                        width={990}
                        height={132}
                        className="w-full h-auto object-contain"
                        priority
                    />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-8">
                    <div className="flex flex-col gap-8">
                        {locations.slice(0, 3).map((loc) => (
                            <div key={loc.name} className="flex items-start gap-3">
                                <MapPinIcon />
                                <div>
                                    <p className="font-bold text-gray-900 text-sm sm:text-base leading-snug">
                                        {loc.name}
                                    </p>
                                    <p className="text-gray-500 text-sm mt-0.5 leading-relaxed">
                                        {loc.address}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col gap-8">
                        {locations.slice(3).map((loc) => (
                            <div key={loc.name} className="flex items-start gap-3">
                                <MapPinIcon />
                                <div>
                                    <p className="font-bold text-gray-900 text-sm sm:text-base leading-snug">
                                        {loc.name}
                                    </p>
                                    <p className="text-gray-500 text-sm mt-0.5 leading-relaxed">
                                        {loc.address}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
