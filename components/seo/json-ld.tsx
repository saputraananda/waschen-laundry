import React from "react";

export function JsonLd() {
  const domain = "https://waschenlaundry.com";

  const organizationSchema = {
    "@type": "Organization",
    "@id": `${domain}/#organization`,
    name: "Waschen Laundry",
    legalName: "Waschen Laundry Indonesia",
    url: domain,
    logo: `${domain}/logo/logo-waschen.png`,
    image: `${domain}/logo/logo-waschen.png`,
    description:
      "Jasa laundry premium, profesional & higienis di Jabodetabek. Menyediakan laundry kiloan, satuan, express, free pickup delivery, hingga layanan laundry B2B hotel dan rumah sakit.",
    telephone: "+6285122333371",
    email: "info@waschenlaundry.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jl. Raya Legenda Wisata No.1, Nagrak, Kec. Gn. Putri",
      addressLocality: "Bogor",
      addressRegion: "Jawa Barat",
      postalCode: "16967",
      addressCountry: "ID",
    },
    sameAs: [
      "https://wa.me/6285122333371",
      "https://www.instagram.com/waschenlaundry",
    ],
  };

  const localBusinessSchema = {
    "@type": "DryCleaningOrLaundry",
    "@id": `${domain}/#localbusiness`,
    name: "Waschen Laundry - Premium & B2B Laundry Service",
    image: `${domain}/logo/logo-waschen.png`,
    url: domain,
    telephone: "+6285122333371",
    priceRange: "$$",
    currenciesAccepted: "IDR",
    paymentAccepted: "Cash, QRIS, Bank Transfer",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "07:00",
        closes: "21:00",
      },
    ],
    areaServed: [
      { "@type": "City", name: "Cibubur" },
      { "@type": "City", name: "Bekasi" },
      { "@type": "City", name: "Depok" },
      { "@type": "City", name: "Bogor" },
      { "@type": "City", name: "Cileungsi" },
      { "@type": "City", name: "Kota Wisata" },
      { "@type": "City", name: "Raffles Hills" },
      { "@type": "City", name: "Legenda Wisata" },
      { "@type": "City", name: "Citra Gran" },
      { "@type": "City", name: "Jatikarya" },
      { "@type": "City", name: "Jatisampurna" },
      { "@type": "City", name: "Gunung Putri" },
      { "@type": "AdministrativeArea", name: "Jabodetabek" },
    ],
    department: [
      {
        "@type": "DryCleaningOrLaundry",
        name: "Waschen Legenda Wisata",
        address: "Ruko Legenda, Jl. Raya Legenda Wisata No.1, Nagrak, Kec. Gn. Putri, Kab. Bogor, Jawa Barat 16967",
      },
      {
        "@type": "DryCleaningOrLaundry",
        name: "Waschen Sentra Eropa",
        address: "Sentra Eropa, Cibubur, Kec. Gn. Putri, Kab. Bogor, Jawa Barat 16968",
      },
      {
        "@type": "DryCleaningOrLaundry",
        name: "Waschen Raffles Hills",
        address: "Jl. Raffles Hills Boulevard, Blok L, Sukamati, Tajur, Kota Bogor, Jawa Barat 16144",
      },
      {
        "@type": "DryCleaningOrLaundry",
        name: "Waschen Citra Gran",
        address: "Perum Citra Gran Blok H1 No.14B-15, Jl. Alternatif Cibubur, Jatikarya, Kec. Jatisampurna, Bekasi, Jawa Barat 17435",
      },
      {
        "@type": "DryCleaningOrLaundry",
        name: "Waschen Canadian Kota Wisata",
        address: "Ruko Canadian CBC 022, Jalan Limus Nunggal, Kota Wisata, Cileungsi, Bogor",
      },
    ],
  };

  const websiteSchema = {
    "@type": "WebSite",
    "@id": `${domain}/#website`,
    url: domain,
    name: "Waschen Laundry",
    description: "Jasa Laundry Premium, Profesional & Antar Jemput Jabodetabek",
    inLanguage: "id-ID",
    publisher: {
      "@id": `${domain}/#organization`,
    },
  };

  const webPageSchema = {
    "@type": "WebPage",
    "@id": `${domain}/#webpage`,
    url: domain,
    name: "Waschen Laundry - Jasa Laundry Premium, Profesional & Antar Jemput Jabodetabek",
    description:
      "Waschen Laundry menyediakan jasa laundry premium, kiloan, satuan, express, free pickup delivery Cibubur, Bekasi, Depok, Cileungsi, serta layanan laundry B2B hotel dan rumah sakit Jabodetabek.",
    isPartOf: {
      "@id": `${domain}/#website`,
    },
    about: {
      "@id": `${domain}/#organization`,
    },
    inLanguage: "id-ID",
  };

  const servicesSchema = [
    {
      "@type": "Service",
      serviceType: "Layanan Laundry Premium & Antar Jemput",
      name: "Laundry Premium Kiloan, Satuan & Express",
      provider: { "@id": `${domain}/#organization` },
      areaServed: "Jabodetabek",
      description: "Jasa laundry premium kiloan dan satuan higienis dengan fasilitas free pickup delivery untuk area Cibubur, Bekasi, Depok, Cileungsi, Kota Wisata, Raffles Hills, Legenda Wisata, Citra Gran, dan Sentra Eropa.",
    },
    {
      "@type": "Service",
      serviceType: "Commercial & B2B Laundry Service",
      name: "Laundry B2B Hotel & Rumah Sakit",
      provider: { "@id": `${domain}/#organization` },
      areaServed: "Jabodetabek",
      description: "Jasa laundry linen profesional untuk hotel, rumah sakit, hospital, korporat, dan industri di wilayah Jabodetabek dengan standar higienis tinggi dan jaminan mutu.",
    },
  ];

  const faqSchema = {
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Area mana saja yang dijangkau layanan laundry antar jemput Waschen Laundry?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Waschen Laundry melayani laundry pickup delivery / free pickup delivery di area Cibubur, Bekasi, Depok, Cileungsi, Kota Wisata, Raffles Hills, Legenda Wisata, Citra Gran, Sentra Eropa, Gunung Putri, dan seluruh wilayah Jabodetabek.",
        },
      },
      {
        "@type": "Question",
        name: "Apakah Waschen Laundry melayani laundry B2B untuk hotel dan rumah sakit?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ya, Waschen Laundry adalah penyedia jasa laundry B2B profesional untuk hotel, rumah sakit (hospital), linen korporat, dan industri dengan kapasitas besar dan proses pencucian higienis berstandar tinggi di Jabodetabek.",
        },
      },
      {
        "@type": "Question",
        name: "Bagaimana cara pesan atau booking laundry antar jemput online?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Anda dapat dengan mudah pesan laundry online atau booking laundry pickup delivery melalui WhatsApp resmi Waschen Laundry di 0851-2233-3371.",
        },
      },
    ],
  };

  const breadcrumbSchema = {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Beranda",
        item: domain,
      },
    ],
  };

  const fullSchema = {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema,
      localBusinessSchema,
      websiteSchema,
      webPageSchema,
      ...servicesSchema,
      faqSchema,
      breadcrumbSchema,
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(fullSchema) }}
    />
  );
}
