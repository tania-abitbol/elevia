import { motion } from "framer-motion";

const travelExamples = [
  {
    title: "City-trip à Rome",
    description:
      "Un couple voulait un city-trip à Rome sans se prendre la tête. Nous leur avons organisé un séjour avec hébergement, restaurants et visites VIP en 48h.",
    image: "/rome.jpg",
  },
  {
    title: "Road trip en Norvège",
    description:
      "Une famille avec trois enfants rêvait d'un séjour nature en Norvège. Nous leur avons planifié un road trip clé en main, avec hébergements et itinéraire optimisé.",
    image: "/norvege.webp",
  },
  {
    title: "Voyage détente aux Maldives",
    description:
      "Un couple souhaitait un voyage relaxant avec zéro organisation. Nous avons sélectionné pour eux une villa privée avec service tout inclus.",
    image: "/maldives.jpg",
  },
];

const TravelExamplesSection = () => {
  return (
    <section id="travel-examples" className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Exemples de voyages organisés
        </h2>
        <p className="text-gray-600 text-lg mb-10">
          Voici quelques voyages que nous avons organisés pour nos clients. Vous
          aussi, laissez-vous guider.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {travelExamples.map((trip, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-lg rounded-xl overflow-hidden cursor-pointer transition-transform transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={trip.image}
              alt={trip.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">
                {trip.title}
              </h3>
              <p className="text-gray-600 mt-2">{trip.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TravelExamplesSection;
