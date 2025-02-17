import { motion } from "framer-motion";

const travelExamples = [
  {
    title: "Voyage détente aux Maldives",
    description:
      "Un couple souhaitait un voyage relaxant avec zéro organisation. Nous avons sélectionné pour eux une villa privée avec service tout inclus.",
    image: "/maldives.jpg",
  },
  {
    title: "Vacances Ski à Megève",
    description:
      "Un groupe d’amis souhaitait un séjour au ski alliant luxe et sensations fortes. Nous avons organisé une escapade exclusive à Megève, avec chalet 5 étoiles, cours de ski privé et accès aux meilleures tables de la station.",
    image: "/megeve.jpg",
  },
  {
    title: "Road trip en Norvège",
    description:
      "Une famille avec trois enfants rêvait d'un séjour nature en Norvège. Nous leur avons planifié un road trip clé en main, avec hébergements et itinéraire optimisé.",
    image: "/norvege.webp",
  },
];

const TravelExamplesSection = () => {
  return (
    <section id="travel-examples" className="py-12 pb-14 px-6 ">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 md:mb-6">
          Exemples de voyages organisés
        </h2>
        <p className="text-gray-600 text-lg md:text-xl mb-6 md:mb-10">
          Voici quelques voyages que nous avons organisés pour nos clients. Vous
          aussi, laissez-vous guider.
        </p>
      </div>

      <div className="grid gap-4 md:gap-8 grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto">
        {travelExamples.map((trip, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-lg rounded-xl overflow-hidden cursor-pointer transition-transform transform hover:scale-105 hover:shadow-2xl "
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative">
              <img
                src={trip.image}
                alt={trip.title}
                className="w-full h-48 md:h-56 object-cover rounded-t-xl"
              />
              <div className="absolute inset-0 bg-black bg-opacity-10 hover:bg-opacity-0 transition-all"></div>
            </div>
            <div className="p-6 md:p-8">
              <h3 className="text-2xl font-semibold text-gray-800">
                {trip.title}
              </h3>
              <p className="text-gray-600 mt-2 text-sm md:text-base">
                {trip.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TravelExamplesSection;
