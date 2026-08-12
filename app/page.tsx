import { NavBar } from "@/components/templates/navbar";
import { HeroSection } from "@/components/templates/hero-section";
import { AboutUs } from "@/components/templates/about-us";
import { OurService } from "@/components/templates/our-service";
import { WhyChooseUs } from "@/components/templates/why-choose-us";
import { OurEvent } from "@/components/templates/our-event";
import { HospitalCustomer } from "@/components/templates/hospital-customers";
import { ContactUs } from "@/components/templates/contact-us";
import { Footer } from "@/components/templates/footer";
import { ScrollToTop } from "@/components/scroll-to-top";

export default function Home() {
  return (
    <div className="scroll-smooth">
      <NavBar />
      <main id="main-content">
        <section id="hero" aria-label="Hero Section - Waschen Laundry Premium">
          <HeroSection />
        </section>
        <section id="about-us" aria-label="Tentang Waschen Laundry">
          <AboutUs />
        </section>
        <section id="our-services" aria-label="Layanan Laundry Premium & B2B">
          <OurService />
        </section>
        <section id="why-choose-us" aria-label="Keunggulan Waschen Laundry">
          <WhyChooseUs />
        </section>
        <section id="our-events" aria-label="Event B2B dan Mitra Kerjasama">
          <OurEvent />
        </section>
        <section id="customer" aria-label="Klien Rumah Sakit dan Hospital">
          <HospitalCustomer />
        </section>
        <section id="contact-us" aria-label="Hubungi Kami dan Jam Operasional">
          <ContactUs />
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
