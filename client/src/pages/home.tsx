import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import ServicesSection from "@/components/services-section";
import ClientsSection from "@/components/clients-section";
import TrainingSection from "@/components/training-section";
import CareersSection from "@/components/careers-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import TestimonialCarousel from "@/components/caraousel";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <AboutSection />
      {/* <ServicesSection /> */}
      {/* <ClientsSection /> */}
      <TrainingSection />
      <CareersSection />
      <ContactSection />
      <TestimonialCarousel />
      <Footer />
    </div>
  );
}
