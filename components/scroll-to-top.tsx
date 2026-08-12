"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className={`fixed bottom-6 right-6 z-50 p-3.5 rounded-full bg-gradient-to-r from-[#8C3A69] via-[#631F48] to-[#481233] text-white shadow-xl border border-[#E8BD44]/40 transition-all duration-300 transform hover:scale-110 active:scale-95 group hover:border-[#E8BD44] hover:shadow-2xl ${
                isVisible
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 translate-y-6 pointer-events-none"
            }`}
        >
            <ArrowUp className="w-6 h-6 text-[#E8BD44] transition-transform duration-300 group-hover:-translate-y-0.5" />
        </button>
    );
}
