import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQSection = () => {
  const faqs = [
    {
      question:
        "Quels types de voyages proposez-vous et quelles destinations sont disponibles ?",
      answer: (
        <p>
          Nous organisons des voyages sur-mesure adaptés à vos envies et
          besoins. Que ce soit :
          <br />- Des séjours en famille à la mer ou à la montagne.
          <br />- Des city-trips en Europe ou ailleurs.
          <br />- Des voyages nature et aventure (randonnées, road trips,
          safaris).
          <br />- Des escapades détente et bien-être.
          <br />
          <strong>Peu importe la destination</strong>, nous nous chargeons de
          tout pour que vous profitiez pleinement de votre voyage.
        </p>
      ),
    },
    {
      question: "Comment fonctionne le processus de réservation ?",
      answer: (
        <p>
          C’est simple :
          <br />
          <strong>1. Planifiez</strong> un appel gratuit avec un conseiller.
          <br />
          <strong>2. Définissez</strong> vos envies et besoins.
          <br />
          <strong>3. Nous organisons tout :</strong> hébergements, transports,
          activités.
          <br />
          <strong> 4. Vous recevez</strong> votre programme détaillé et partez
          sans stress.
        </p>
      ),
    },
    {
      question: "Quel budget prévoir et comment fonctionne la tarification ?",
      answer: (
        <p>
          Nous nous adaptons à <strong>tous les budgets</strong>, du séjour
          simple au voyage d'exception.
          <br />
          Notre modèle repose sur une commission de 15 %, mais grâce à nos
          partenariats exclusifs avec les plus grandes enseignes de voyage,
          cette commission est entièrement compensée.{" "}
          <strong>Résultat : </strong>vous payez le même prix, voire moins cher,
          que si vous organisiez tout seul, sans le stress et les heures de
          recherche.
        </p>
      ),
    },
    {
      question: "Pourquoi choisir Élevia Prestige ?",
      answer: (
        <p>
          - <strong>Zéro stress :</strong> on s’occupe de tout, vous profitez.
          <br />- <strong>Gain de temps :</strong> fini les recherches
          interminables.
          <br />- <strong>Personnalisation :</strong> chaque voyage est conçu
          selon vos attentes.
          <br />- <strong>Accès privilégié :</strong> grâce à nos partenaires,
          vous bénéficiez d’avantages exclusifs.
          <br />- <strong>Assistance :</strong> une équipe disponible en cas de
          besoin avant et pendant votre voyage.
        </p>
      ),
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-14 px-8 bg-[--secondary-color]">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Questions Fréquentes
        </h2>
        <p className="text-gray-600 text-lg">
          Simplifiez vos voyages et partez l'esprit tranquille.
        </p>
      </div>

      <div className="mt-8 max-w-5xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl overflow-hidden"
          >
            <button
              className={`w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none transition-all ${
                openIndex === index ? "bg-gray-200" : "hover:bg-gray-100"
              }`}
              onClick={() => toggleFAQ(index)}
            >
              <span className="font-medium text-gray-800 text-lg">
                {faq.question}
              </span>
              <motion.span
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="text-gray-500 text-xl"
              >
                {openIndex === index ? "−" : "+"}
              </motion.span>
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0, translateY: -10 }}
                  animate={{ opacity: 1, height: "auto", translateY: 0 }}
                  exit={{ opacity: 0, height: 0, translateY: -10 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="px-6 pb-6 pt-2 text-gray-700 bg-gray-100 rounded-b-xl leading-relaxed"
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
