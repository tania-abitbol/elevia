import { navigateToCalendly } from "@/utils/navigateToCalendly";

const HeroSection = () => {
  return (
    <header
      id="hero"
      className="relative h-screen bg-[url('/luxury-travel.webp')] bg-cover bg-center flex flex-col items-center justify-center text-white text-center px-6"
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 max-w-xl">
        <h1 className="text-3xl md:text-5xl font-bold leading-snug animate-fade-in">
          Organisateur de voyages sur mesure
        </h1>
        <p className="text-base md:text-lg mt-4 opacity-90">
          On s’occupe de tout, vous n’avez plus qu’à profiter. Séjours sur
          mesure pour couples, familles et groupes, adaptés à votre budget.
        </p>
        <button
          onClick={navigateToCalendly}
          className="mt-6 px-6 py-3 md:px-8 md:py-4 bg-white text-[var(--accent-color)] font-medium rounded-lg transition duration-300 transform hover:bg-gray-200 hover:scale-105 inline-block"
        >
          Demander un appel gratuit
        </button>
      </div>
      <div className="absolute bottom-6 animate-bounce">
        <span className="text-sm md:text-lg">
          ↓ Faites défiler pour en savoir plus
        </span>
      </div>
    </header>
  );
};

export default HeroSection;
