import { FaCrown, FaStar, FaGlobe } from "react-icons/fa";
import { motion } from "framer-motion";

const WhyChoose: React.FC = () => {
  const features = [
    {
      title: "Un Voyage Unique, Pensé Pour Vous",
      description:
        "Chaque détail est conçu pour répondre à vos attentes et surpasser vos rêves.",
      icon: (
        <FaCrown className="text-[var(--yellow)] text-4xl md:text-5xl mb-3" />
      ),
    },
    {
      title: "Des Lieux Privés et Expériences Exclusives",
      description:
        "Séjours dans des endroits inaccessibles au grand public, pour des moments inoubliables.",
      icon: (
        <FaStar className="text-[var(--yellow)] text-4xl md:text-5xl mb-3" />
      ),
    },
    {
      title: "Sérénité Totale, Nous Gérons Tout Pour Vous",
      description:
        "Un accompagnement de A à Z pour un voyage sans stress et 100% plaisir.",
      icon: (
        <FaGlobe className="text-[var(--yellow)] text-4xl md:text-5xl mb-3" />
      ),
    },
  ];

  return (
    <section className="py-12 px-6 text-center bg-[--secondary-color]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-dark">
          Pourquoi choisir <span className="text-primary">Elevia</span> ?
        </h2>
        <p className="text-lg text-gray-600 mt-3 md:mt-4">
          Confiez-nous vos envies, nous en faisons un voyage d’exception.
        </p>
      </div>

      <div className="mt-8 md:mt-12 grid gap-4 md:gap-8 grid-cols-1 md:grid-cols-3 max-w-5xl mx-auto">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
            }}
            transition={{ duration: 0.3 }}
            className="p-6 md:p-8 bg-white rounded-lg shadow-md flex flex-col items-center transition-all cursor-pointer"
          >
            {feature.icon}
            <h3 className="text-lg md:text-xl font-semibold text-dark text-center">
              {feature.title}
            </h3>
            <p className="mt-2 text-gray-600 text-sm md:text-base">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
      <div className="mt-4 md:mt-10">
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="#contact"
          className="bg-[--primary-color] text-white py-3 px-6 md:py-4 md:px-8 rounded-full text-base md:text-lg font-semibold transition-all shadow-lg block mx-auto w-full max-w-[280px] md:max-w-max"
        >
          Prendre Rendez-vous
        </motion.a>
      </div>
    </section>
  );
};

export default WhyChoose;
