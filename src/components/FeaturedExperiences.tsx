import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

const FeaturedExperiences: React.FC = () => {
  const experiences = [
    {
      title: "Hôtels d’exception",
      description:
        "Séjours Signature, soigneusement sélectionnés pour leur raffinement.",
      image: "/hotel.webp",
      alt: "Séjours Signature",
    },
    {
      title: "Villas Élégantes",
      description:
        "Des villas sublimes, avec piscine privée et chef privé, pour une intimité absolue.",
      image: "/villa.webp",
      alt: "Villas Élégantes",
    },
    {
      title: "Aventures Sur-Mesure",
      description:
        "Expéditions uniques et guidées, mêlant luxe et authenticité.",
      image: "/safari.webp",
      alt: "Aventures Sur-Mesure",
    },
    {
      title: "Voyages Aériens Premium",
      description: "Vols premium, optimisés pour le confort et la flexibilité.",
      image: "/avion.webp",
      alt: "Voyages Aériens Privés",
    },
    {
      title: "Ski en Montagne",
      description:
        "Chalets luxueux au cœur des montagnes. Ambiance chaleureuse garantie.",
      image: "/ski.webp",
      alt: "Retraites en Montagne",
    },
    {
      title: "Expériences Maritimes",
      description: "Croisières personnalisées sur des yachts élégants.",
      image: "/yacht.webp",
      alt: "Expériences Maritimes",
    },
  ];

  return (
    <section id="voyages" className="p-12 px-6 text-center">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 md:mb-6">
          Des expériences d'exception
        </h2>
        <p className="text-gray-600 text-lg md:text-xl mb-6 md:mb-10">
          Conçues pour vous offrir un équilibre parfait entre confort,
          exploration et élégance.
        </p>
      </div>

      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true, dynamicBullets: true }}
        navigation
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="mt-10 max-w-6xl mx-auto custom-swiper rounded-t-lg"
      >
        {experiences.map((experience) => (
          <SwiperSlide key={experience.title}>
            <div className="relative rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform">
              <div className="relative ">
                <Image
                  src={experience.image}
                  alt={experience.alt}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover rounded-t-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-10"></div>
              </div>
              <div className="px-6 py-10 bg-white rounded-b-lg">
                <h3 className="text-xl font-semibold text-[var(--yellow)] mb-2">
                  {experience.title}
                </h3>
                <p className="text-gray-800 leading-relaxed">
                  {experience.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="mt-8">
        <a
          href="#contact"
          className="bg-[var(--yellow)] text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-[var(--yellow)] shadow-lg transition-all inline-block"
        >
          Créez votre expérience unique
        </a>
      </div>
    </section>
  );
};

export default FeaturedExperiences;
