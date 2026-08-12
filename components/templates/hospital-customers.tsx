"use client";

import { useState } from "react";
import Image from "next/image";

const hospitals = [
    { src: "/hospital-customers/rs-permata-cibubur.svg", name: "RS PERMATA CIBUBUR", cx: "50%", cy: "13%" },
    { src: "/hospital-customers/rsia-grand-family-pik.svg", name: "RSIA GRAND FAMILY PIK", cx: "9%", cy: "17%" },
    { src: "/hospital-customers/rs-eka-hospital-mt-haryono.svg", name: "RS EKA HOSPITAL MT HARYONO", cx: "9%", cy: "50%" },
    { src: "/hospital-customers/rs-eka-hospital-bekasi.svg", name: "RS EKA HOSPITAL BEKASI", cx: "9%", cy: "83%" },
    { src: "/hospital-customers/rs-atma-jaya.svg", name: "RS ATMA JAYA", cx: "24%", cy: "32%" },
    { src: "/hospital-customers/rs-eka-hospital-cibubur.svg", name: "RS EKA HOSPITAL CIBUBUR", cx: "24%", cy: "68%" },
    { src: "/hospital-customers/rs-eka-hospital-depok.svg", name: "RS EKA HOSPITAL DEPOK", cx: "50%", cy: "87%" },
    { src: "/hospital-customers/columbia-hospital-bsd.svg", name: "COLUMBIA HOSPITAL BSD", cx: "76%", cy: "32%" },
    { src: "/hospital-customers/rs-bunda-margonda.svg", name: "RSU BUNDA MARGONDA", cx: "76%", cy: "68%" },
    { src: "/hospital-customers/rsu-bunda-jakarta.svg", name: "RSU BUNDA JAKARTA", cx: "91%", cy: "17%" },
    { src: "/hospital-customers/rs-eka-hospital-bsd.svg", name: "RS EKA HOSPITAL BSD", cx: "91%", cy: "50%" },
    { src: "/hospital-customers/rsia-family-pluit.svg", name: "RSIA FAMILY PLUIT", cx: "91%", cy: "83%" },
];

export function HospitalCustomer() {
    const [open, setOpen] = useState(false);

    return (
        <section className="w-full mt-20 h-screen relative overflow-hidden">
            {hospitals.map((h, i) => (
                <div
                    key={h.name}
                    className="absolute"
                    style={{
                        left: open ? h.cx : "50%",
                        top: open ? h.cy : "50%",
                        transform: open
                            ? "translate(-50%, -50%)"
                            : "translate(-50%, -50%) scale(0.1)",
                        opacity: open ? 1 : 0,
                        transition: "left 0.5s cubic-bezier(0.34, 1.45, 0.64, 1), top 0.5s cubic-bezier(0.34, 1.45, 0.64, 1), transform 0.5s cubic-bezier(0.34, 1.45, 0.64, 1), opacity 0.4s ease",
                        transitionDelay: open
                            ? `${i * 35}ms`
                            : `${(hospitals.length - 1 - i) * 20}ms`,
                        pointerEvents: open ? "auto" : "none",
                        zIndex: 10,
                    }}
                >
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden w-36 sm:w-40 border border-gray-100 hover:scale-105 transition-transform duration-200">
                        <div className="relative w-full h-24 sm:h-28">
                            <Image
                                src={h.src}
                                alt={`Waschen Laundry B2B Rumah Sakit Hospital Partner - ${h.name}`}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <p className="text-[9px] sm:text-[10px] font-semibold text-gray-700 text-center py-1.5 px-1 leading-tight tracking-wide">
                            {h.name}
                        </p>
                    </div>
                </div>
            ))}

            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <button
                    onClick={() => setOpen((v) => !v)}
                    aria-label="Tampilkan Klien Rumah Sakit B2B Waschen Laundry"
                    className={`
                        relative flex flex-col items-center justify-center gap-2
                        py-8 px-8
                        bg-white rounded-2xl border
                        shadow-xl cursor-pointer select-none
                        transition-all duration-300
                        ${open
                            ? "border-[#C2982B]/60 scale-95"
                            : "border-[#C2982B]/40 hover:scale-105 hover:shadow-2xl"
                        }
                    `}
                >
                    {!open && (
                        <span className="absolute inset-0 rounded-2xl border-2 border-[#C2982B]/50 animate-ping" />
                    )}

                    <h2 className="flex flex-col items-center leading-tight">
                        <span className="text-4xl font-extrabold text-[#631F48]">
                            Hospital
                        </span>
                        <span className="text-4xl font-extrabold text-[#C2982B]">
                            Customers
                        </span>
                    </h2>

                    <div className="flex items-center gap-2 mt-2">
                        <Image
                            src="/hospital-customers/plus.svg"
                            alt="plus"
                            width={42}
                            height={42}
                        />
                        <div className="flex items-baseline gap-1">
                            <span className="text-2xl font-bold text-[#C2982B]">15+</span>
                            <span className="text-2xl font-normal text-gray-800">B2B Client</span>
                        </div>
                    </div>
                </button>
            </div>
        </section>
    );
}
