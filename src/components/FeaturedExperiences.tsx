import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import "./carousel.css";

const FeaturedExperiences: React.FC = () => {
  const experiences = [
    {
      title: "Hôtels d’exception",
      description:
        "Séjours Signature, soigneusement sélectionnés pour leur raffinement et leur service irréprochable.",
      image: "/hotel.webp",
      alt: "Séjours Signature",
    },
    {
      title: "Villas Élégantes",
      description:
        "Des villas sublimes, avec piscine privée et conciergerie dédiée, pour une intimité absolue.",
      image: "/villa.webp",
      alt: "Villas Élégantes",
    },
    {
      title: "Aventures Sur-Mesure",
      description:
        "Expéditions uniques et guidées, mêlant luxe et authenticité dans des lieux exclusifs.",
      image: "/safari.webp",
      alt: "Aventures Sur-Mesure",
    },
    {
      title: "Voyages Aériens Premium",
      description:
        "Vols premium, optimisés pour le confort et la flexibilité, avec un service d’exception.",
      image: "/avion.webp",
      alt: "Voyages Aériens Privés",
    },
    {
      title: "Ski en Montagne",
      description:
        "Chalets luxueux au cœur des montagnes, combinant sérénité, jacuzzi et ski privé.",
      image: "/ski.webp",
      alt: "Retraites en Montagne",
    },
    {
      title: "Expériences Maritimes",
      description:
        "Croisières personnalisées sur des yachts élégants, avec itinéraires exclusifs.",
      image: "/yacht.webp",
      alt: "Expériences Maritimes",
    },
  ];

  return (
    <section id="voyages" className="p-20 px-6 text-center">
      <h2 className="text-4xl font-bold text-gray-900">
        Des expériences d'exception
      </h2>
      <p className="text-lg mt-4 max-w-3xl mx-auto text-gray-700">
        Conçues pour vous offrir un équilibre parfait entre confort, exploration
        et élégance.
      </p>

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
        className="mt-10 max-w-6xl mx-auto custom-swiper"
      >
        {experiences.map((experience) => (
          <SwiperSlide key={experience.title}>
            <div className="relative rounded-lg shadow-lg overflow-hidden">
              <div className="relative">
                <Image
                  src={experience.image}
                  alt={experience.alt}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover rounded-t-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30"></div>
              </div>
              <div className="p-6 bg-white rounded-b-lg">
                <h3 className="text-xl font-semibold text-gray-900">
                  {experience.title}
                </h3>
                <p className="mt-2 text-gray-600 leading-relaxed">
                  {experience.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default FeaturedExperiences;
