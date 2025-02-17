import { useEffect, useRef } from "react";
import Image from "next/image";

const Partners: React.FC = () => {
  const partners = [
    { name: "Marriott", logo: "/partners/marriott.png" },
    { name: "Air France", logo: "/partners/air-france.png" },
    { name: "Club Med", logo: "/partners/club-med.png" },
    { name: "Emirates", logo: "/partners/emirates.png" },
    { name: "Four Seasons", logo: "/partners/fourseasons.png" },
  ];

  const scrollContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (scrollContainer.current) {
        scrollContainer.current.scrollBy({ left: 2, behavior: "smooth" });

        if (
          scrollContainer.current.scrollLeft >=
          scrollContainer.current.scrollWidth / 2
        ) {
          scrollContainer.current.scrollLeft = 0;
        }
      }
    }, 25); // Augmente la vitesse du défilement

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <section
      id="partners"
      className="pb-16 pt-12 bg-gradient-to-b from-[#F9F9F9] to-white text-center px-4 md:px-6"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
        Nos Partenaires
      </h2>
      <p className="text-md md:text-lg mt-3 max-w-3xl mx-auto text-gray-700 leading-relaxed">
        Avec nos partenaires d'exception, nous transformons vos rêves en voyages
        mémorables. Ils garantissent une expérience sans compromis.
      </p>

      <div
        ref={scrollContainer}
        className="flex overflow-hidden mt-10 max-w-5xl mx-auto space-x-6 scrollbar-hide"
      >
        {partners.concat(partners).map((partner, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-40 md:w-48 lg:w-56 flex justify-center items-center p-4 md:p-6 bg-white rounded-lg shadow-md border border-gray-200 hover:scale-105 transition-transform duration-300"
          >
            <Image
              src={partner.logo}
              alt={`Logo de ${partner.name}`}
              className="object-contain"
              width={160}
              height={70}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Partners;
