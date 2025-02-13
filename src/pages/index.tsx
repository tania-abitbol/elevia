import HeroSection from "@/components/HeroSection";
import WhyChoose from "@/components/WhyChoose";
import CallToAction from "@/components/CallToAction";
import FeaturedExperiences from "@/components/FeaturedExperiences";
import Process from "@/components/Process";
import CTALiberation from "@/components/CTALiberation";
import Partners from "@/components/Parteners";
import StickyBanner from "@/components/StickyBanner";
import Testimonials from "@/components/Testimonial";
import FAQSection from "@/components/Faq";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen text-gray-900">
      <HeroSection />
      <Testimonials />
      <CTALiberation />
      <FeaturedExperiences />
      <CallToAction />
      <Process />
      <Partners />
      <WhyChoose />
      <FAQSection />
      <StickyBanner />
    </div>
  );
};

export default Index;
