import { navigateToCalendly } from "@/utils/navigateToCalendly";

const Process = () => {
  return (
    <div id="process" className="text-gray-900">
      <section className="pb-16 px-6 text-center">
        <h2 className="text-4xl font-bold">Comment ça marche ?</h2>
        <p className="text-md mt-2 max-w-3xl mx-auto text-gray-600">
          De la prise de contact à l’organisation complète de votre voyage, nous
          offrons un service clé en main pour transformer vos idées en réalité.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-5xl mx-auto">
          <div className="flex items-center bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition-all">
            <span className="text-3xl text-[var(--accent-color)] mr-4">📅</span>
            <div className="text-left">
              <h3 className="text-lg font-semibold">1. Réserver un appel</h3>
              <p className="text-sm text-gray-600">
                Planifiez une consultation pour discuter de vos envies, vos
                besoins et votre budget.
              </p>
            </div>
          </div>

          <div className="flex items-center bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition-all">
            <span className="text-3xl text-[var(--accent-color)] mr-4">📝</span>
            <div className="text-left">
              <h3 className="text-lg font-semibold">
                2. Conception sur-mesure
              </h3>
              <p className="text-sm text-gray-600">
                Nous concevons un itinéraire unique, intégrant vos préférences
                et vos envies.
              </p>
            </div>
          </div>

          <div className="flex items-center bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition-all">
            <span className="text-3xl text-[var(--accent-color)] mr-4">💼</span>
            <div className="text-left">
              <h3 className="text-lg font-semibold">3. Validation et devis</h3>
              <p className="text-sm text-gray-600">
                Recevez un devis transparent, incluant tous les services et
                notre commission.
              </p>
            </div>
          </div>

          <div className="flex items-center bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition-all">
            <span className="text-3xl text-[var(--accent-color)] mr-4">✈️</span>
            <div className="text-left">
              <h3 className="text-lg font-semibold">
                4. Organisation complète
              </h3>
              <p className="text-sm text-gray-600">
                Nous gérons les vols, hôtels, activités et transports pour un
                voyage sans stress.
              </p>
            </div>
          </div>

          <div className="flex items-center bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition-all">
            <span className="text-3xl text-[var(--accent-color)] mr-4">📩</span>
            <div className="text-left">
              <h3 className="text-lg font-semibold">5. Remise du dossier</h3>
              <p className="text-sm text-gray-600">
                Recevez vos billets, itinéraires et recommandations dans un
                dossier premium.
              </p>
            </div>
          </div>

          <div className="flex items-center bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition-all">
            <span className="text-3xl text-[var(--accent-color)] mr-4">💬</span>
            <div className="text-left">
              <h3 className="text-lg font-semibold">
                6. Suivi personnalisé sur place
              </h3>
              <p className="text-sm text-gray-600">
                Avant votre départ, nous créons un groupe WhatsApp pour un suivi
                en temps réel pendant votre voyage.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[var(--accent-color)] text-white py-12 px-8 text-center">
        <h2 className="text-2xl font-bold">
          Prêt à commencer votre aventure ?
        </h2>
        <p className="text-md mt-2 max-w-xl mx-auto">
          Réservez dès maintenant votre appel et laissez-nous créer votre voyage
          sur-mesure.
        </p>
        <button
          onClick={navigateToCalendly}
          className="mt-6 px-8 py-4 bg-white text-[var(--accent-color)] font-semibold rounded-lg hover:bg-gray-200 transition inline-block"
        >
          Planifier un appel maintenant
        </button>
      </section>
    </div>
  );
};

export default Process;
