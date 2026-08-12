"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const contacts = [
    {
        icon: (
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C9.61 21 3 14.39 3 6a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.21 2.2z" />
            </svg>
        ),
        label: "0851-2233-3371",
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
            </svg>
        ),
        label: "www.waschenlaundry.com",
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
        ),
        label: "@waschen.laundry",
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
        ),
        label: "waschen.aloraindonesia@gmail.com",
    },
];

export function ContactUs() {
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
        <section ref={sectionRef} className="w-full overflow-hidden">
            <div className="flex flex-col sm:flex-row w-full" style={{ minHeight: 340 }}>
                <div
                    className={`pt-20 transition-all duration-500 ease-out transform ${
                        isVisible
                            ? "opacity-100 translate-x-0"
                            : "opacity-0 -translate-x-16"
                    }`}
                >
                    <Image
                        src="/contact-us/hero.svg"
                        alt="Hubungi Waschen Laundry - Jasa Laundry Premium, Antar Jemput & B2B Jabodetabek"
                        width={1920}
                        height={1080}
                        className="w-full h-auto"
                        priority
                    />
                </div>

                <div
                    className={`flex-1 flex flex-col justify-center items-center px-10 sm:px-14 py-12 gap-5 transition-all duration-500 ease-out delay-75 transform ${
                        isVisible
                            ? "opacity-100 translate-x-0"
                            : "opacity-0 translate-x-16"
                    }`}
                >
                    <div>
                        <h2 className="text-4xl sm:text-5xl font-extrabold mb-5">
                            <span className="text-[#631F48]">Contact </span>
                            <span className="text-[#C2982B]">Us</span>
                        </h2>

                        <div className="flex flex-col gap-4">
                            {contacts.map((c) => (
                                <div key={c.label} className="flex items-center gap-4">
                                    <div className="w-9 h-9 shrink-0 rounded-full bg-[#631F48] flex items-center justify-center">
                                        {c.icon}
                                    </div>
                                    <span className="text-gray-700 text-sm sm:text-base">{c.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}