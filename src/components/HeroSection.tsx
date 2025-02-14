import { navigateToCalendly } from "@/utils/navigateToCalendly";
import Image from "next/image";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <header
      id="hero"
      className="relative h-[90vh] flex flex-col items-center justify-center text-white text-center px-6 bg-fixed bg-center bg-cover"
    >
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className={`w-full h-full object-cover brightness-75 transition-opacity duration-1000 `}
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-2xl px-4"
      >
        <h1 className="text-4xl md:text-6xl font-bold leading-snug drop-shadow-xl">
          Organisateur de voyages sur mesure
        </h1>
        <p className="text-lg md:text-xl mt-4 opacity-90 drop-shadow-md">
          On s’occupe de tout, vous n’avez plus qu’à profiter. Séjours sur
          mesure pour couples, familles et groupes, adaptés à votre budget.
        </p>

        <button
          onClick={navigateToCalendly}
          className="mt-6 px-8 py-4 bg-gradient-to-r from-[--accent-color] to-[--accent-color2] text-white text-lg font-semibold rounded-full shadow-lg transition duration-300 transform hover:scale-105 hover:shadow-2xl"
        >
          Obtenir un devis gratuit
        </button>

        <div className="mt-6 bg-white/30 px-4 py-3 rounded-xl flex flex-wrap items-center justify-center gap-6 shadow-md">
          <Image
            src="/partners/air-france.png"
            width={70}
            height={40}
            alt="Air France"
            className="opacity-90"
          />
          <Image
            src="/partners/marriott.png"
            width={70}
            height={40}
            alt="Marriott"
            className="opacity-90"
          />
          <Image
            src="/partners/club-med.png"
            width={70}
            height={40}
            alt="Club Med"
            className="opacity-90"
          />
          <Image
            src="/partners/fourseasons.png"
            width={70}
            height={40}
            alt="Four Seasons"
            className="opacity-90"
          />
          <span className="text-sm md:text-lg text-white font-semibold md:ml-4">
            + 500 clients satisfaits
          </span>
        </div>
      </motion.div>

      <div className="absolute bottom-6 animate-bounce md:text-white">
        <span className="text-sm md:text-lg">
          ↓ Faites défiler pour en savoir plus
        </span>
      </div>
    </header>
  );
};

export default HeroSection;
