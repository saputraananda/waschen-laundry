"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Calendar, Users, Building2, Sparkles } from "lucide-react";

function AnimatedNumber({ value, suffix = "" }: { value: number; suffix?: string }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let startTime: number | null = null;
        const duration = 2200;

        const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const easeOutProgress = 1 - Math.pow(1 - progress, 3);

            setCount(Math.floor(easeOutProgress * value));

            if (progress < 1) {
                requestAnimationFrame(step);
            } else {
                setCount(value);
            }
        };

        requestAnimationFrame(step);
    }, [value]);

    return (
        <span>
            {count}
            {suffix}
        </span>
    );
}

function ChromaKeyMascot({ src }: { src: string }) {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const [useCanvas, setUseCanvas] = useState(true);

    useEffect(() => {
        const video = videoRef.current;
        const canvas = canvasRef.current;
        if (!video || !canvas) return;

        const ctx = canvas.getContext("2d", { willReadFrequently: true });
        if (!ctx) {
            setUseCanvas(false);
            return;
        }

        let animFrameId: number;

        const processFrame = () => {
            if (video.readyState >= 2 && video.videoWidth && video.videoHeight) {
                if (canvas.width !== video.videoWidth || canvas.height !== video.videoHeight) {
                    canvas.width = video.videoWidth;
                    canvas.height = video.videoHeight;
                }

                try {
                    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
                    const frame = ctx.getImageData(0, 0, canvas.width, canvas.height);
                    const data = frame.data;
                    const len = data.length;

                    for (let i = 0; i < len; i += 4) {
                        const r = data[i];
                        const g = data[i + 1];
                        const b = data[i + 2];

                        const isGreenScreen = g > 60 && g > r * 1.2 && g > b * 1.2;
                        const isSoftGreen = g > 40 && g > r * 1.05 && g > b * 1.05;

                        if (isGreenScreen) {
                            data[i + 3] = 0;
                        } else if (isSoftGreen) {
                            const greenDiff = g - Math.max(r, b);
                            const alpha = Math.max(0, 255 - greenDiff * 5);
                            data[i + 3] = Math.min(data[i + 3], alpha);
                        }
                    }
                    ctx.putImageData(frame, 0, 0);
                } catch (e) {
                    console.error("Canvas chroma key error, falling back to screen blend mode:", e);
                    setUseCanvas(false);
                    return;
                }
            }
            animFrameId = requestAnimationFrame(processFrame);
        };

        const handleCanPlay = () => {
            video.play().catch(() => {});
            processFrame();
        };

        video.addEventListener("play", processFrame);
        video.addEventListener("canplay", handleCanPlay);
        video.addEventListener("loadeddata", handleCanPlay);

        video.play().catch(() => {});
        processFrame();

        return () => {
            cancelAnimationFrame(animFrameId);
            video.removeEventListener("play", processFrame);
            video.removeEventListener("canplay", handleCanPlay);
            video.removeEventListener("loadeddata", handleCanPlay);
        };
    }, []);

    return (
        <div className="relative w-full h-full flex items-center justify-center pointer-events-none">
            <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                className="absolute opacity-0 w-px h-px pointer-events-none -z-50"
            >
                <source src={src} type="video/mp4" />
            </video>

            {useCanvas ? (
                <canvas
                    ref={canvasRef}
                    className="w-full h-full object-contain pointer-events-none"
                />
            ) : (
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-contain pointer-events-none block"
                    style={{ mixBlendMode: "screen" }}
                >
                    <source src={src} type="video/mp4" />
                </video>
            )}
        </div>
    );
}

const BUBBLES = [
    { id: 1, left: "3%", size: 36, duration: "9s", delay: "0s", swayDuration: "4s" },
    { id: 2, left: "7%", size: 18, duration: "14s", delay: "1s", swayDuration: "6s" },
    { id: 3, left: "12%", size: 85, duration: "11s", delay: "2.5s", swayDuration: "5s" },
    { id: 4, left: "17%", size: 24, duration: "8s", delay: "4s", swayDuration: "3.5s" },
    { id: 5, left: "22%", size: 110, duration: "13s", delay: "0.5s", swayDuration: "7s" },
    { id: 6, left: "27%", size: 30, duration: "9.5s", delay: "3s", swayDuration: "4.5s" },
    { id: 7, left: "32%", size: 65, duration: "12s", delay: "1.8s", swayDuration: "5.2s" },
    { id: 8, left: "37%", size: 16, duration: "15s", delay: "5s", swayDuration: "6.5s" },
    { id: 9, left: "42%", size: 45, duration: "10s", delay: "0.2s", swayDuration: "4s" },
    { id: 10, left: "47%", size: 95, duration: "14s", delay: "3.8s", swayDuration: "6.2s" },
    { id: 11, left: "52%", size: 22, duration: "8.5s", delay: "2s", swayDuration: "3.8s" },
    { id: 12, left: "57%", size: 75, duration: "11.5s", delay: "4.5s", swayDuration: "5.5s" },
    { id: 13, left: "62%", size: 28, duration: "13s", delay: "1.2s", swayDuration: "4.8s" },
    { id: 14, left: "67%", size: 120, duration: "15.5s", delay: "0s", swayDuration: "7.5s" },
    { id: 15, left: "72%", size: 40, duration: "9s", delay: "3.2s", swayDuration: "4.2s" },
    { id: 16, left: "77%", size: 20, duration: "10.5s", delay: "5.2s", swayDuration: "3.6s" },
    { id: 17, left: "82%", size: 80, duration: "12.8s", delay: "2.2s", swayDuration: "5.8s" },
    { id: 18, left: "87%", size: 34, duration: "8.2s", delay: "4.1s", swayDuration: "4.1s" },
    { id: 19, left: "92%", size: 60, duration: "11s", delay: "1.6s", swayDuration: "5s" },
    { id: 20, left: "96%", size: 18, duration: "14.2s", delay: "3.4s", swayDuration: "6.1s" },
    { id: 21, left: "5%", size: 50, duration: "10.2s", delay: "5.8s", swayDuration: "4.6s" },
    { id: 22, left: "15%", size: 26, duration: "7.8s", delay: "6.2s", swayDuration: "3.9s" },
    { id: 23, left: "25%", size: 90, duration: "13.8s", delay: "2.8s", swayDuration: "6.8s" },
    { id: 24, left: "38%", size: 22, duration: "9.6s", delay: "6.5s", swayDuration: "4.3s" },
    { id: 25, left: "49%", size: 70, duration: "12.2s", delay: "4.9s", swayDuration: "5.4s" },
    { id: 26, left: "58%", size: 15, duration: "16s", delay: "7.1s", swayDuration: "6.4s" },
    { id: 27, left: "69%", size: 38, duration: "8.9s", delay: "5.1s", swayDuration: "4.7s" },
    { id: 28, left: "79%", size: 105, duration: "14.5s", delay: "1.9s", swayDuration: "7.2s" },
    { id: 29, left: "89%", size: 25, duration: "11.2s", delay: "6.8s", swayDuration: "4.9s" },
    { id: 30, left: "94%", size: 48, duration: "9.8s", delay: "7.5s", swayDuration: "4.4s" },
];

export function HeroSection() {
    const [poppedBubbles, setPoppedBubbles] = useState<number[]>([]);

    const handlePop = (id: number) => {
        setPoppedBubbles((prev) => [...prev, id]);
        setTimeout(() => {
            setPoppedBubbles((prev) => prev.filter((bId) => bId !== id));
        }, 3000);
    };

    return (
        <div className="relative w-full h-[92vh] min-h-[640px] max-h-[890px] select-none z-20 overflow-visible">
            <div className="w-full h-full absolute inset-0 overflow-hidden z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster="/hero-section/hero.svg"
                    className="w-full h-full object-cover pt-20"
                >
                    <source src="/hero-section/video.mp4" type="video/mp4" />
                    <Image
                        src="/hero-section/hero.svg"
                        width={1280}
                        height={775}
                        alt="Waschen Laundry Premium - Jasa Laundry Antar Jemput & B2B Hotel Rumah Sakit Jabodetabek"
                        className="w-full h-full object-cover pt-20"
                        priority
                    />
                </video>
            </div>

            <div className="absolute right-[1%] sm:right-[4%] md:right-[6%] -bottom-14 sm:-bottom-28 md:-bottom-36 z-10 pointer-events-none w-[360px] sm:w-[440px] md:w-[560px] lg:w-[660px] h-[450px] sm:h-[540px] md:h-[680px] lg:h-[780px] flex items-end justify-center">
                <ChromaKeyMascot src="/hero-section/mascot-waschen.mp4" />
            </div>

            <div className="absolute bottom-0 w-full z-20 leading-none pointer-events-none overflow-hidden h-[90px] sm:h-[120px] md:h-[150px]">
                <svg
                    viewBox="0 0 1440 150"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full object-cover"
                    preserveAspectRatio="none"
                >
                    <defs>
                        <linearGradient id="heroWavePlumGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#491334" />
                            <stop offset="35%" stopColor="#5F1340" />
                            <stop offset="70%" stopColor="#7D2E5C" />
                            <stop offset="100%" stopColor="#852C51" />
                        </linearGradient>

                        <linearGradient id="heroWaveGoldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#E8BD44" />
                            <stop offset="30%" stopColor="#FFF2A7" />
                            <stop offset="60%" stopColor="#C99A29" />
                            <stop offset="100%" stopColor="#E8BD44" />
                        </linearGradient>

                        <filter id="goldGlow" x="-10%" y="-20%" width="120%" height="140%">
                            <feDropShadow dx="0" dy="2" stdDeviation="3.5" floodColor="#E8BD44" floodOpacity="0.6" />
                        </filter>
                    </defs>

                    <path
                        d="M 0,45 C 420,105 1020,15 1440,50 L 1440,150 L 0,150 Z"
                        fill="url(#heroWavePlumGrad)"
                    />

                    <path
                        d="M 0,45 C 420,105 1020,15 1440,50"
                        stroke="url(#heroWaveGoldGrad)"
                        strokeWidth="3"
                        strokeLinecap="round"
                        filter="url(#goldGlow)"
                    />
                </svg>
            </div>

            <div className="absolute inset-0 z-30 pointer-events-none overflow-hidden">
                {BUBBLES.map((b) => {
                    const isPopped = poppedBubbles.includes(b.id);
                    if (isPopped) return null;

                    return (
                        <div
                            key={b.id}
                            onClick={() => handlePop(b.id)}
                            className="soap-bubble pointer-events-auto"
                            style={{
                                left: b.left,
                                width: `${b.size}px`,
                                height: `${b.size}px`,
                                animationDuration: `${b.duration}, ${b.swayDuration}`,
                                animationDelay: `${b.delay}, 0s`,
                            }}
                            title="Klik untuk memecahkan gelembung!"
                        />
                    );
                })}
            </div>

            <div className="absolute top-[18%] sm:top-[21%] md:top-[24%] lg:top-[26%] left-[6%] sm:left-[8%] md:left-[10%] z-35 flex flex-col items-start pointer-events-auto max-w-2xl pr-4">
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[76px] font-extrabold leading-none tracking-tight flex flex-col items-start">
                    <span className="bg-gradient-to-b from-[#8C3A69] via-[#631F48] to-[#481233] bg-clip-text text-transparent">
                        Waschen
                    </span>
                    <span className="bg-gradient-to-b from-[#E8BD44] via-[#C99A29] to-[#9F761A] bg-clip-text text-transparent mt-1">
                        Laundry
                    </span>
                </h1>
                <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-slate-800 font-medium leading-relaxed max-w-[320px] sm:max-w-[460px] md:max-w-[540px] lg:max-w-[580px] drop-shadow-sm">
                    Waschen Laundry adalah layanan laundry premium yang melayani kebutuhan B2B dan B2C dengan perawatan pakaian dan tekstil yang profesional, berkualitas, dan terpercaya
                </p>
                <div className="mt-4 sm:mt-5 px-6 py-2 bg-gradient-to-r from-[#441131] via-[#7D2E5C] to-[#441131] text-white rounded-full text-base md:text-xl shadow-lg border border-[#8C3A69]/30 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-[#E8BD44] animate-spin" style={{ animationDuration: '6s' }} />
                    <span>“Expert Laundry Solution”</span>
                </div>
            </div>

            <div className="absolute bottom-0 translate-y-1/2 right-6 md:right-16 lg:right-24 z-40 bg-white border-2 border-[#5B1C41] rounded-[24px] px-8 sm:px-12 md:px-16 py-5 sm:py-6 shadow-2xl pointer-events-auto">
                <div className="flex items-center gap-6 sm:gap-12 md:gap-16">
                    <div className="flex flex-col items-center text-center">
                        <Calendar className="w-6 h-6 sm:w-7 sm:h-7 text-[#5B1C41] mb-1" />
                        <span className="text-lg sm:text-2xl font-extrabold text-[#C2982B]">
                            <AnimatedNumber value={2012} />
                        </span>
                        <span className="text-xs sm:text-sm font-semibold text-slate-700 mt-0.5">
                            Didirikan
                        </span>
                    </div>

                    <div className="flex flex-col items-center text-center">
                        <Users className="w-6 h-6 sm:w-7 sm:h-7 text-[#5B1C41] mb-1" />
                        <span className="text-lg sm:text-2xl font-extrabold text-[#C2982B]">
                            <AnimatedNumber value={2932} suffix="+" />
                        </span>
                        <span className="text-xs sm:text-sm font-semibold text-slate-700 mt-0.5">
                            Klien Puas
                        </span>
                    </div>

                    <div className="flex flex-col items-center text-center">
                        <Building2 className="w-6 h-6 sm:w-7 sm:h-7 text-[#5B1C41] mb-1" />
                        <span className="text-lg sm:text-2xl font-extrabold text-[#C2982B]">
                            <AnimatedNumber value={15} suffix="+" />
                        </span>
                        <span className="text-xs sm:text-sm font-semibold text-slate-700 mt-0.5">
                            Klien B2B
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}