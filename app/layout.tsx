import type { Metadata, Viewport } from "next";
import { Poppins, Geist_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { JsonLd } from "@/components/seo/json-ld";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const baseUrl = "https://waschenlaundry.com";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#631F48",
};

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Waschen Laundry - Jasa Laundry Premium, Profesional & Antar Jemput Jabodetabek",
    template: "%s | Waschen Laundry",
  },
  description:
    "Waschen Laundry menawarkan jasa laundry premium, profesional, higienis & terpercaya di Jabodetabek. Melayani laundry kiloan, satuan, express, free pickup delivery Cibubur, Bekasi, Depok, Cileungsi, hingga laundry B2B hotel dan rumah sakit.",
  keywords: [
    "laundry premium",
    "laundry profesional",
    "jasa laundry profesional",
    "layanan laundry premium",
    "laundry terpercaya",
    "laundry higienis",
    "laundry berkualitas",
    "laundry kiloan",
    "laundry satuan",
    "laundry express",
    "laundry antar jemput",
    "laundry pickup delivery",
    "laundry free pickup delivery",
    "laundry Depok",
    "laundry Bekasi",
    "laundry Cibubur",
    "laundry terdekat Cibubur",
    "jasa laundry Cibubur",
    "laundry profesional Cibubur",
    "laundry premium Cibubur",
    "laundry terpercaya Cibubur",
    "laundry higienis Cibubur",
    "laundry antar jemput Cibubur",
    "laundry pickup delivery Cibubur",
    "laundry kiloan Cibubur",
    "laundry satuan Cibubur",
    "laundry baju Cibubur",
    "laundry pakaian Cibubur",
    "laundry bedcover Cibubur",
    "laundry karpet Cibubur",
    "laundry gordyn Cibubur",
    "laundry gorden Cibubur",
    "laundry linen Cibubur",
    "laundry sepatu Cibubur",
    "laundry tas Cibubur",
    "laundry leather Cibubur",
    "laundry kulit Cibubur",
    "laundry perlengkapan bayi Cibubur",
    "laundry baby equipment Cibubur",
    "laundry gratis antar jemput Cibubur",
    "laundry pickup Cibubur",
    "laundry delivery Cibubur",
    "jasa cuci pakaian Cibubur",
    "jasa cuci karpet Cibubur",
    "jasa cuci bedcover Cibubur",
    "jasa cuci gordyn Cibubur",
    "jasa cuci sepatu Cibubur",
    "jasa cuci tas Cibubur",
    "laundry cepat Cibubur",
    "laundry express Cibubur",
    "laundry Citra Gran",
    "laundry Citra Gran Cibubur",
    "laundry Jatikarya",
    "laundry Jatisampurna",
    "laundry Kota Wisata",
    "laundry Kota Wisata Cibubur",
    "laundry Sentra Eropa Cibubur",
    "laundry Raffles Hills Cibubur",
    "laundry Legenda Wisata Cibubur",
    "laundry Cibubur antar jemput",
    "laundry terdekat Citra Gran",
    "laundry terdekat Kota Wisata",
    "laundry Cileungsi",
    "laundry Raffles Hills",
    "laundry Legenda Wisata",
    "laundry Sentra Eropa",
    "laundry B2B",
    "laundry hotel",
    "laundry rumah sakit",
    "laundry hospital",
    "laundry linen hotel",
    "laundry linen rumah sakit",
    "laundry hotel Jabodetabek",
    "laundry rumah sakit Jabodetabek",
    "jasa laundry hotel",
    "jasa laundry rumah sakit",
    "laundry linen profesional",
    "laundry korporat",
    "laundry untuk perusahaan",
    "laundry bisnis",
    "commercial laundry",
    "industrial laundry",
    "B2B laundry service",
    "laundry terdekat",
    "laundry terdekat dari saya",
    "laundry antar jemput terdekat",
    "laundry pickup delivery",
    "laundry antar jemput Jabodetabek",
    "laundry murah terdekat",
    "laundry premium terdekat",
    "pesan laundry online",
    "booking laundry online",
    "jasa laundry antar jemput",
    "laundry dengan delivery",
    "laundry free pickup",
    "laundry free delivery",
    "Waschen Laundry",
    "Waschen Laundry Cibubur",
    "Waschen Laundry Bogor",
    "Waschen Laundry Bekasi",
    "Waschen Laundry Cileungsi",
    "Waschen Laundry Gunung Putri",
    "Waschen Laundry Kota Wisata",
    "Waschen Laundry Raffles Hills",
    "Waschen Laundry Citra Gran",
    "Waschen Laundry Legenda Wisata",
  ],
  authors: [{ name: "Waschen Laundry", url: baseUrl }],
  creator: "Waschen Laundry",
  publisher: "Waschen Laundry",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: baseUrl,
    siteName: "Waschen Laundry",
    title: "Waschen Laundry - Jasa Laundry Premium, Profesional & Antar Jemput Jabodetabek",
    description:
      "Waschen Laundry adalah jasa laundry premium & profesional terpercaya. Menyediakan laundry kiloan, satuan, express, free pickup delivery Cibubur, Bekasi, Depok, Cileungsi, serta laundry B2B hotel & rumah sakit.",
    images: [
      {
        url: "/logo/logo-waschen.png",
        width: 1200,
        height: 630,
        alt: "Waschen Laundry Premium & B2B Service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Waschen Laundry - Jasa Laundry Premium & B2B Antar Jemput",
    description:
      "Waschen Laundry: Layanan laundry premium kiloan, satuan, express, free pickup delivery Cibubur, Bekasi, Depok & laundry B2B hotel/rumah sakit.",
    images: ["/logo/logo-waschen.png"],
  },
  icons: {
    icon: [
      { url: "/logo/logo-waschen.png", type: "image/png" },
      { url: "/logo/logo-waschen.svg", type: "image/svg+xml" },
    ],
    shortcut: "/logo/logo-waschen.png",
    apple: "/logo/logo-waschen.png",
  },
  manifest: "/manifest.webmanifest",
  verification: {
    google: "google-site-verification-token",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={cn(
        "h-full",
        "antialiased",
        poppins.variable,
        geistMono.variable,
        "font-sans"
      )}
    >
      <body
        className="min-h-full flex flex-col"
        style={{ backgroundColor: "#F8F8F8" }}
      >
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
