import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Waschen Laundry - Premium, Professional & B2B Service",
    short_name: "Waschen Laundry",
    description: "Jasa Laundry Premium, Profesional & Antar Jemput Jabodetabek",
    start_url: "/",
    display: "standalone",
    background_color: "#F8F8F8",
    theme_color: "#631F48",
    icons: [
      {
        src: "/logo/logo-waschen.png",
        sizes: "any",
        type: "image/png",
      },
      {
        src: "/logo/logo-waschen.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/logo/logo-waschen.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
