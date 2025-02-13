import { useEffect, useRef } from "react";
import HeroSection from "@/components/HeroSection";
import WhyChoose from "@/components/WhyChoose";
import TravelExamplesSection from "@/components/TravelSection";
import CTALiberation from "@/components/CTALiberation";
import FeaturedExperiences from "@/components/FeaturedExperiences";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonial";
import FAQSection from "@/components/Faq";
import CallToAction from "@/components/CallToAction";
import Partners from "@/components/Parteners";
// import StickyBanner from "@/components/StickyBanner";

const sections = [
  { id: "hero", component: HeroSection },
  { id: "why-choose", component: WhyChoose },
  { id: "travel-examples", component: TravelExamplesSection },
  { id: "cta-liberation", component: CTALiberation },
  { id: "featured-experiences", component: FeaturedExperiences },
  { id: "process", component: Process },
  { id: "testimonials", component: Testimonials },
  { id: "faq", component: FAQSection },
  { id: "call-to-action", component: CallToAction },
  { id: "partners", component: Partners },
  // { id: "sticky-banner", component: StickyBanner },
];

const trackTimeSpent = (section: string, duration: number) => {
  window.gtag("event", `${section}_${duration}`, {
    event_category: "engagement",
    event_label: section,
    value: duration,
  });
};

const Index: React.FC = () => {
  const sectionStartTimes = useRef<{ [key: string]: number }>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const sectionId = entry.target.id;
          if (entry.isIntersecting) {
            if (!sectionStartTimes.current[sectionId]) {
              sectionStartTimes.current[sectionId] = Date.now();
            }
          } else {
            if (sectionStartTimes.current[sectionId]) {
              const timeSpent = Math.round(
                (Date.now() - sectionStartTimes.current[sectionId]) / 1000
              );
              trackTimeSpent(sectionId, timeSpent);
              delete sectionStartTimes.current[sectionId];
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen text-gray-900">
      {sections.map(({ id, component: Component }) => (
        <section key={id} id={id}>
          <Component />
        </section>
      ))}
    </div>
  );
};

export default Index;
