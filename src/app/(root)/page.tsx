import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import ServicesSection from "@/components/ServicesSection";
import CategoriesSection from "@/components/CategoiesSection";
import TrainingSection from "@/components/TrainingSection";
import NewsSection from "@/components/NewsSection";
import EconomicCyclesSection from "@/components/EconomicCyclesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import RegistrationSection from "@/components/RegistrationSection";
import AnnouncementsSection from "@/components/AnnoucementSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background pt-20">
      <Header />
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <CategoriesSection />
      <TrainingSection />
      <NewsSection />
      <EconomicCyclesSection />
      <TestimonialsSection />
      <RegistrationSection />
      <AnnouncementsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
