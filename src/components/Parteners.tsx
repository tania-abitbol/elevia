import { useEffect, useRef } from "react";
import Image from "next/image";

const Partners: React.FC = () => {
  const partners = [
    { name: "Marriott", logo: "/partners/marriott.png" },
    { name: "Air France", logo: "/partners/air-france.jpg" },
    { name: "Club Med", logo: "/partners/club-med.png" },
    { name: "Emirates", logo: "/partners/emirates.png" },
    { name: "Four Seasons", logo: "/partners/fourseasons.png" },
  ];

  const scrollContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (scrollContainer.current) {
        scrollContainer.current.scrollBy({
          left: 1,
          behavior: "smooth",
        });

        if (
          scrollContainer.current.scrollLeft >=
          scrollContainer.current.scrollWidth / 2
        ) {
          scrollContainer.current.scrollLeft = 0;
        }
      }
    }, 35);

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <section
      id="partners"
      className="pb-20 pt-10 bg-gradient-to-b from-[#F9F9F9] to-white text-center px-6"
    >
      <h2 className="text-4xl font-bold text-gray-900">Nos Partenaires</h2>
      <p className="text-lg mt-4 max-w-3xl mx-auto text-gray-700 leading-relaxed">
        Avec nos partenaires d'exception, nous transformons vos rêves en voyages
        mémorables. Ils garantissent une expérience sans compromis.
      </p>

      <div
        ref={scrollContainer}
        className="flex overflow-x-hidden mt-12 max-w-6xl mx-auto relative"
      >
        {[...partners, ...partners].map((partner, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-56 mx-4 flex justify-center items-center p-6 bg-white rounded-lg shadow-md border border-gray-200"
          >
            <Image
              src={partner.logo}
              alt={`Logo de ${partner.name}`}
              className="object-contain"
              width={200}
              height={80}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Partners;
