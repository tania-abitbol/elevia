import { navigateToCalendly } from "@/utils/navigateToCalendly";

const Process = () => {
  return (
    <div id="process" className="text-gray-900 py-12 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 md:mb-6">
          Comment ça marche ?
        </h2>
        <p className="text-gray-600 text-lg md:text-xl mb-6 md:mb-10">
          Nous vous offrons un service clé en main pour transformer vos idées en
          réalité.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {[
          {
            step: "1",
            title: "Réserver un appel",
            description:
              "Planifiez une consultation pour discuter de vos envies, vos besoins et votre budget.",
            icon: "📅",
          },
          {
            step: "2",
            title: "Conception sur-mesure",
            description:
              "Nous concevons un itinéraire unique, intégrant vos préférences et vos envies.",
            icon: "📝",
          },
          {
            step: "3",
            title: "Validation et devis",
            description:
              "Recevez un devis transparent, incluant tous les services et notre commission.",
            icon: "💼",
          },
          {
            step: "4",
            title: "Organisation complète",
            description:
              "Nous gérons les vols, hôtels, activités et transports pour un voyage sans stress.",
            icon: "✈️",
          },
          {
            step: "5",
            title: "Remise du dossier",
            description:
              "Recevez vos billets, itinéraires et recommandations dans un dossier premium.",
            icon: "📩",
          },
          {
            step: "6",
            title: "Suivi personnalisé sur place",
            description:
              "Avant votre départ, nous créons un groupe WhatsApp pour un suivi en temps réel pendant votre voyage.",
            icon: "💬",
          },
        ].map(({ step, title, description, icon }) => (
          <div
            key={step}
            className="flex items-center bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-all"
          >
            <span className="text-3xl text-[var(--accent-color)] mr-4">
              {icon}
            </span>
            <div className="text-left">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {step}. {title}
              </h3>
              <p className="text-sm text-gray-600">{description}</p>
            </div>
          </div>
        ))}
      </div>

      <section className="bg-[var(--accent-color)] text-white py-12 px-8 text-center mt-16 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold">
          Prêt à commencer votre aventure ?
        </h2>
        <p className="text-lg mt-2 max-w-xl mx-auto">
          Réservez dès maintenant votre appel et laissez-nous créer votre voyage
          sur-mesure.
        </p>
        <button
          onClick={navigateToCalendly}
          className="mt-6 px-8 py-4 bg-white text-[var(--accent-color)] font-semibold rounded-full hover:bg-gray-200 transition shadow-md"
        >
          Planifier un appel
        </button>
      </section>
    </div>
  );
};

export default Process;
